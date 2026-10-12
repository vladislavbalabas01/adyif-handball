import { NewsApiResponse } from "@/types/interfaces";
import CardNews from "../ui/CardNews";
import NewsSkeleton from "./NewsSkeleton";

const NewsGrid = ({
  isLoading,
  error,
  data,
}: {
  isLoading: boolean | true;
  error: string | null;
  data: NewsApiResponse | null;
}) => {
  if (isLoading) {
    return <NewsSkeleton />;
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

  return data.news.map((post) => <CardNews post={post} key={post.id} />);
};

export default NewsGrid;
