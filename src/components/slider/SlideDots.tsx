import { SlideDotsProps } from "@/types/interfaces";

export const SlideDots = ({
  count,
  selectedIndex,
  onSelect,
}: SlideDotsProps) => {
  return (
    <div className="absolute z-20 bottom-2 left-0 pl-6 sm:pl-12 lg:pl-16">
      <div className="flex items-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index as any)}
            className={`h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "w-8 bg-green-primary"
                : "w-2 bg-slate-700 hover:bg-slate-500"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
