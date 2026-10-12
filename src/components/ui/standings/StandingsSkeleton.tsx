const skeletonRows = Array.from({ length: 8 });

export const StandingsSkeleton = () => {
  return (
    <section className="w-full min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-slate-900">
      {/* Заголовок */}
      <div className="border-b border-zinc-700 px-4 py-4 sm:px-5">
        <div className="h-5 w-48 animate-pulse rounded bg-slate-700" />

        <div className="mt-2 h-3 w-32 animate-pulse rounded bg-slate-700" />
      </div>

      {/* Таблица */}
      <div className="w-full overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-zinc-700 bg-slate-900">
              <th className="w-12 px-3 py-3 sm:w-16">
                <div className="mx-auto h-3 w-10 animate-pulse rounded bg-slate-700" />
              </th>

              <th className="px-3 py-3">
                <div className="mx-auto h-3 w-16 animate-pulse rounded bg-slate-700" />
              </th>

              <th className="w-14 px-3 py-3">
                <div className="mx-auto h-3 w-4 animate-pulse rounded bg-slate-700" />
              </th>

              <th className="w-14 px-3 py-3">
                <div className="mx-auto h-3 w-4 animate-pulse rounded bg-slate-700" />
              </th>

              <th className="w-14 px-3 py-3">
                <div className="mx-auto h-3 w-4 animate-pulse rounded bg-slate-700" />
              </th>

              <th className="w-14 px-3 py-3">
                <div className="mx-auto h-3 w-4 animate-pulse rounded bg-slate-700" />
              </th>

              <th className="w-14 px-3 py-3">
                <div className="mx-auto h-3 w-4 animate-pulse rounded bg-slate-700" />
              </th>
            </tr>
          </thead>

          <tbody>
            {skeletonRows.map((_, index) => (
              <tr
                key={index}
                className="border-b border-slate-700 bg-slate-800 last:border-b-0"
              >
                {/* Место */}
                <td className="px-3 py-3">
                  <div className="mx-auto h-4 w-4 animate-pulse rounded bg-slate-700" />
                </td>

                {/* Команда */}
                <td className="px-3 py-3">
                  <div className="flex items-center gap-3">
                    <div className="size-9 shrink-0 animate-pulse rounded-full bg-slate-700" />

                    <div className="h-4 w-32 animate-pulse rounded bg-slate-700 sm:w-48" />
                  </div>
                </td>

                {/* И */}
                <td className="px-3 py-3">
                  <div className="mx-auto h-4 w-5 animate-pulse rounded bg-slate-700" />
                </td>

                {/* В */}
                <td className="px-3 py-3">
                  <div className="mx-auto h-4 w-5 animate-pulse rounded bg-slate-700" />
                </td>

                {/* Н */}
                <td className="px-3 py-3">
                  <div className="mx-auto h-4 w-5 animate-pulse rounded bg-slate-700" />
                </td>

                {/* П */}
                <td className="px-3 py-3">
                  <div className="mx-auto h-4 w-5 animate-pulse rounded bg-slate-700" />
                </td>

                {/* О */}
                <td className="px-3 py-3">
                  <div className="mx-auto h-4 w-5 animate-pulse rounded bg-slate-700" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
