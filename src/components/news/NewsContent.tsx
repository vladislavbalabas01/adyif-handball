import { NewsApiResponse } from "@/types/interfaces";
import { getNews } from "@/services/news.service";
import CardNews from "@/components/ui/CardNews";
import NewsPagination from "@/components/news/NewsPagination";

export async function NewsContent({ page }: { page: number }) {
  let data: NewsApiResponse | null = null;
  let error: string | null = null;

  try {
    data = await getNews(page);
  } catch (err) {
    error = err instanceof Error ? err.message : "Неизвестная ошибка";
  }

  if (error) {
    return (
      <div className="col-span-full flex items-center justify-center min-h-48">
        <p className="text-red-400 text-center font-medium">{error}</p>
      </div>
    );
  }

  if (!data?.news.length) {
    return (
      <div className="col-span-full flex items-center justify-center min-h-48">
        <p className="text-slate-400 text-center">Новостей пока нет</p>
      </div>
    );
  }

  return (
    <>
      <div
        className={`
            flex flex-col
            gap-x-3 gap-y-10
            sm:px-10
            md:px-0
            md:grid md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            xl:grid-rows-2
            `}
      >
        {data.news.map((post) => (
          <CardNews post={post} key={post.id} />
        ))}
      </div>

      {data.pagination.totalPages > 1 && (
        <NewsPagination
          currentPage={page}
          totalPages={data.pagination.totalPages}
        />
      )}
    </>
  );
}
