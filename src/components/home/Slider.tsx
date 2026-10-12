"use client";

import { NEWS_DATA } from "@/data/news";
import { NewsItem } from "@/types/interfaces";
import { useHeroSlider } from "@/hooks/useHeroSlider";
import { SlideItem } from "../slider/SlideItem";
import { SlideDots } from "../slider/SlideDots";

const Slider = () => {
  const heroNews = NEWS_DATA.filter((post: NewsItem) => post.hot).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const { emblaRef, selectedIndex, scrollTo } = useHeroSlider();

  if (!heroNews.length) null;

  return (
    <div className="relative">
      {/* Контейнер вьюпорта Embla Carousel */}
      <div
        className="overflow-hidden w-full h-full aspect-square sm:aspect-video"
        ref={emblaRef}
      >
        <div className="flex h-full touch-pan-y">
          {heroNews.map((post) => (
            <SlideItem key={post.id} post={post} />
          ))}
        </div>

        {/* 4. Индикаторы (Дотсы) и счетчик слайдов */}
        <SlideDots
          count={heroNews.length}
          selectedIndex={selectedIndex}
          onSelect={scrollTo}
        />
      </div>
    </div>
  );
};

export default Slider;
