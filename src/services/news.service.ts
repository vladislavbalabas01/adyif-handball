import "server-only";
import { unstable_cache } from "next/cache";
import { NEWS_DATA } from "@/data/news";
import { NewsApiResponse } from "@/types/interfaces";

const newsPerPage = parseInt(process.env.NEWS_PER_PAGE || "8", 10);

// 1. Обычная внутренняя функция запроса (к БД или файлу)
async function fetchNewsFromSource(
  page: number,
  limit: number,
): Promise<NewsApiResponse> {
  const safePage = Math.max(1, page);
  const safeLimit = Math.max(1, Math.min(24, limit));

  // Здесь в будущем будет: await prisma.news.findMany(...)
  const sortedNews = [...NEWS_DATA].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const total = sortedNews.length;
  const totalPages = Math.ceil(total / safeLimit) || 1;
  const startIndex = (safePage - 1) * safeLimit;
  const news = sortedNews.slice(startIndex, startIndex + safeLimit);

  return {
    news,
    pagination: {
      page: safePage,
      limit: safeLimit,
      total,
      totalPages,
      hasMore: safePage < totalPages,
    },
  };
}

// 2. Оборачиваем в кэш Next.js (возвращаем полноценный ISR)
export const getNews = (page = 1, limit = newsPerPage) => {
  return unstable_cache(
    async () => fetchNewsFromSource(page, limit),
    // Ключ кэша (уникальный для каждой комбинации страницы и лимита)
    [`news-page-${page}-limit-${limit}`],
    {
      revalidate: 300, // Те самые 5 минут ISR-кэширования
      tags: ["news"], // Тег для мгновенного сброса кэша при публикации
    },
  )();
};
