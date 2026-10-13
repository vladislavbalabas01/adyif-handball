import { NewsItem } from "@/types/interfaces";
import { LinkHeadingOfSection } from "../ui/HeadingOfSection";
import { NEWS_DATA } from "@/data/news";
import LinkButton from "../ui/LinkButton";
import CardNews from "../ui/CardNews";

const NewsSection = () => {
  const latestNews = [...NEWS_DATA]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8);

  return (
    <section className="mt-8 mb-6 container">
      <LinkHeadingOfSection text="Последние новости *" href="/news?page=1" />
      {/* Сетка */}
      <div className="flex flex-col gap-3 mb-8 sm:px-10 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {latestNews.map((post: NewsItem) => (
          /* Карточка новости */
          <CardNews post={post} key={post.id} />
        ))}
      </div>

      <div className="flex mb-6">
        <LinkButton linkName="Больше новостей" href="/news?page=1" />
      </div>

      <div className="text-slate-400">
        * Сайт находится в тестовом режиме. Новости не являются актуальными или
        действительными
      </div>
    </section>
  );
};

export default NewsSection;
