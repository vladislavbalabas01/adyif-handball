"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface NewsPaginationProps {
  currentPage: number;
  totalPages: number;
}

const NewsPagination = ({ currentPage, totalPages }: NewsPaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <nav
      aria-label="Пагинация новостей"
      className="my-12 flex items-center justify-center gap-2"
    >
      {/* Назад */}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Предыдущая страница"
        className={`
          flex cursor-pointer items-center gap-1
          rounded-lg border border-slate-800
          bg-slate-900 px-3 py-2
          text-sm font-medium text-slate-300
          transition-colors hover:bg-slate-800
          disabled:cursor-not-allowed disabled:opacity-40
        `}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Назад
      </button>

      {/* Номера страниц */}
      <div className="flex items-center gap-1.5 px-2">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
              aria-current={isActive ? "page" : undefined}
              className={`
                h-9 w-9 cursor-pointer
                rounded-lg text-sm font-bold
                transition-all duration-200
                ${
                  isActive
                    ? "scale-105 bg-green-primary text-slate-950 shadow-md shadow-green-primary/20"
                    : "border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"
                }
              `}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Вперед */}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Следующая страница"
        className={`
          flex cursor-pointer items-center gap-1
          rounded-lg border border-slate-800
          bg-slate-900 px-3 py-2
          text-sm font-medium text-slate-300
          transition-colors hover:bg-slate-800
          disabled:cursor-not-allowed disabled:opacity-40
      `}
      >
        Вперед
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </nav>
  );
};

export default NewsPagination;
