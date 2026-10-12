import { NewsItem } from "@/types/interfaces";
import Link from "next/link";
import Image from "next/image";

const CardNews = ({ post }: { post: NewsItem }) => {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="flex gap-2 items-stretch sm:flex-col sm:gap-4 group"
    >
      <div className="relative aspect-video rounded-lg overflow-hidden shrink-0 w-30 h-auto sm:rounded-2xl sm:w-full sm:aspect-wideo">
        <Image
          src={post.imageMain}
          alt={post.title}
          fill
          loading="eager"
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 30vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between gap-3">
        <h3 className="line-clamp-3 leading-tight text-[clamp(0.75rem,0.618rem+0.563vw,1.125rem)] group-hover:text-green-light font-semibold pt-0.5 transition-color duration-500">
          {post.title}
        </h3>
        <span className="text-xs text-slate-400">
          {new Date(post.date).toLocaleDateString("ru-RU")}
        </span>
      </div>
    </Link>
  );
};

export default CardNews;
