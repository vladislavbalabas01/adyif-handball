import { SlideItemProps } from "@/types/interfaces";
import Image from "next/image";
import Link from "next/link";

export const SlideItem = ({ post, isPriority = true }: SlideItemProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString("ru-RU");

  return (
    <div className="relative flex-[0_0_100%] h-full flex items-end justify-start">
      {/* 1. ИЗОБРАЖЕНИЕ НОВОСТИ НА ФОНЕ */}
      {post.imageMain && (
        <Image
          src={post.imageMain} // Укажи точное имя поля из твоей структуры (post.image / post.imageUrl)
          alt={post.title}
          fill
          priority
          sizes="(max-width: 640px) 95vw, 95vw"
          className="object-cover object-center transition-transform duration-700 ease-out"
        />
      )}
      {/* Затемнение слайда */}
      <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950/50 to-transparent" />
      {/* 2. Контентная область слайда */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-16 w-full mb-10 lg:mb-20">
        <Link
          href={`/news/${post.slug}`}
          className="lg:max-w-5xl space-y-4 sm:space-y-6"
        >
          {/* Заголовок новости */}
          <h1 className="text-xl sm:text-4xl lg:text-5xl font-black italic uppercase tracking-tight leading-[1.08] text-white line-clamp-3">
            {post.title}
          </h1>

          {/* Тег даты */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 text-[clamp(0.7rem,2.5vw,1rem)] font-semibold text-white">
              {new Date(post.date).toLocaleDateString("ru-RU")}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
