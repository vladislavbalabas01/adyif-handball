export const StandingsTableHeader = ({ fullSize }: { fullSize: boolean }) => {
  const cellPadding = fullSize ? "px-3 lg:px-6 xl:px-8" : "px-3";

  return (
    <tr className="border-b border-zinc-200 bg-slate-900 text-xs font-medium uppercase tracking-wide text-zinc-100">
      <th className={`${cellPadding} py-3 w-8 text-center sm:w-16`}>Место</th>

      <th className={`${cellPadding} py-3 w-full text-center`}>Команда</th>

      <th className={`${cellPadding} py-3 w-20 text-center`}>И</th>

      {fullSize && (
        <th
          className={`${cellPadding} hidden md:table-cell py-3 w-20 text-center`}
        >
          В
        </th>
      )}

      {fullSize && (
        <th
          className={`${cellPadding} hidden md:table-cell py-3 w-20 text-center`}
        >
          Н
        </th>
      )}

      {fullSize && (
        <th
          className={`${cellPadding} hidden md:table-cell py-3 w-20 text-center`}
        >
          П
        </th>
      )}

      <th className={`${cellPadding} py-3 w-20 text-center`}>О</th>
    </tr>
  );
};
