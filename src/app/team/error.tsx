"use client";

import { useEffect } from "react";

export default function TeamError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Ошибка загрузки состава:", error);
  }, [error]);

  return (
    <main className="mt-6 sm:mt-8 md:mt-32 lg:mt-32 xl:mt-34 2xl:mt-36 mb-20">
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 max-w-md mx-auto">
        <div className="text-4xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-white mb-2">
          Отсутствует подключение к базе данных
        </h2>
        <p className="text-zinc-400 text-sm mb-6">
          Не удалось загрузить состав команды. Проверьте, запущен ли контейнер
          PostgreSQL в Docker.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition"
        >
          Попробовать снова
        </button>
      </div>
    </main>
  );
}
