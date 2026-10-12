import Image from "next/image";
import { TeamStanding } from "@/types/interfaces";

export const StandingsTableRow = ({
  row,
  fullSize,
}: {
  row: TeamStanding;
  fullSize: boolean;
}) => {
  const isOurTeam =
    row.team.toUpperCase().includes("АГУ") ||
    row.team.toUpperCase().includes("АДЫИФ");

  const cellPadding = fullSize ? "px-3 lg:px-6 xl:px-8" : "px-3";

  return (
    <tr
      key={row.rank}
      className="border-b bg-slate-900/40 border-slate-800 last:border-b-0 hover:bg-green-primary ease transition-colors"
    >
      {/* Место */}
      <td className={`${cellPadding} py-3 text-center`}>
        <span className="text-sm font-semibold text-white">{row.rank}</span>
      </td>

      {/* Логотип + название */}
      <td className={`${cellPadding} py-3`}>
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center relative">
            <Image
              src={row.logoSrc}
              alt={row.team}
              fill
              sizes="125px"
              className="object-contain max-h-7 w-auto drop-shadow-sm"
            />
          </div>

          <span
            className={`truncate text-sm font-semibold ${isOurTeam ? "text-green-light" : "text-zinc-100"}`}
          >
            {row.team}
          </span>
        </div>
      </td>

      {/* Игры */}
      <td className={`${cellPadding} py-3 text-center text-sm text-zinc-100`}>
        {row.games}
      </td>

      {fullSize && (
        <>
          {/* Победы */}
          <td
            className={`${cellPadding} hidden md:table-cell py-3 text-center text-sm text-zinc-100`}
          >
            {row.wins}
          </td>

          {/* Ничьи */}
          <td
            className={`${cellPadding} hidden md:table-cell py-3 text-center text-sm text-zinc-100`}
          >
            {row.draws}
          </td>

          {/* Поражения */}
          <td
            className={`${cellPadding} hidden md:table-cell py-3 text-center text-sm text-zinc-100`}
          >
            {row.losses}
          </td>
        </>
      )}

      {/* Очки */}
      <td className={`${cellPadding} py-3 text-center bg-slate-900`}>
        <span className="text-sm font-bold text-zinc-100">{row.points}</span>
      </td>
    </tr>
  );
};
