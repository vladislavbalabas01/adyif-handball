import { Game } from "@/types/interfaces";
import Image from "next/image";
import { MapPin } from "lucide-react";

export const MatchCard = ({ game }: { game: Game }) => {
  // Рассчитываем счета для АГУ-АДЫИФ и соперника
  const homeScore = game.homeTeam?.score ?? 0;
  const awayScore = game.awayTeam?.score ?? 0;
  const ourScore = game.homeTeam.name.includes("АГУ") ? homeScore : awayScore;
  const opponentScore = game.homeTeam.name.includes("АГУ")
    ? awayScore
    : homeScore;
  const isWin = game.isFinished && ourScore > opponentScore;
  const isDraw = game.isFinished && ourScore === opponentScore;

  return (
    <div
      key={game.id}
      className={`flex-none w-90 sm:w-100 snap-align-start rounded-3xl p-5 border transition-all ${
        !game.isFinished
          ? "bg-slate-900/90 border-green-primary/50 shadow-lg shadow-green-primary/50"
          : "bg-slate-900/40 border-slate-800"
      }`}
    >
      {/* Шапка карточки: Бейдж статуса и Дата */}
      <div className="flex items-center justify-between gap-2 mb-4">
        {!game.isFinished ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/20 border border-white text-white text-[0.6rem] font-black uppercase tracking-wider">
            Скоро
          </span>
        ) : (
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[0.6rem] font-black uppercase tracking-wider ${
              isWin
                ? "bg-emerald-500/20 text-green-light border border-green-light"
                : isDraw
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
            }`}
          >
            {isWin ? "Победа" : isDraw ? "Ничья" : "Поражение"}
          </span>
        )}

        <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
          <span>{new Date(game.date).toLocaleDateString("ru-RU")}</span>
          {game.time && (
            <span className="text-white font-bold ml-1">{game.time}</span>
          )}
        </div>
      </div>

      {/* Табло: Команда 1 - Счет - Команда 2 */}
      <div className="flex justify-between my-8 gap-2">
        {/* АГУ-АДЫИФ (Хозяева или Гости) */}
        <div className="flex flex-col items-center gap-2 flex-1 text-center">
          <div className="relative size-12 sm:size-14 bg-slate-800/60 rounded-2xl p-2 border border-slate-700/50 flex items-start justify-center">
            <Image
              src={game.homeTeam.logoSrc}
              alt="Команда 1"
              fill
              sizes="125px"
              className="object-contain"
            />
          </div>
          <span className="text-xs font-extrabold text-white line-clamp-2">
            {game.homeTeam.name}
          </span>
        </div>

        {/* Центр: Счет или "VS" */}
        <div className="flex items-center justify-center px-2">
          {!game.isFinished ? (
            <span className="text-xl font-black italic text-yellow-300 tracking-widest">
              VS
            </span>
          ) : (
            <div className="flex items-center gap-2 text-2xl font-black italic text-white tracking-tight  px-3 py-1.5 rounded-xl ">
              <span>{homeScore}</span>
              <span className="text-slate-600">:</span>
              <span>{awayScore}</span>
            </div>
          )}
        </div>

        {/* Соперник (или АГУ-АДЫИФ если мы в гостях) */}
        <div className="flex flex-col items-center gap-2 flex-1 text-center">
          <div className="relative size-12 sm:size-14 bg-slate-800/60 rounded-2xl p-2 border border-slate-700/50 flex items-center justify-center">
            <Image
              src={game.awayTeam.logoSrc}
              alt="Команда 2"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span className="text-xs font-extrabold text-white line-clamp-2">
            {game.awayTeam.name}
          </span>
        </div>
      </div>

      {/* Футер карточки: Локация */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-slate-400 text-xs truncate">
        <MapPin className="size-3.5 shrink-0 text-slate-500" />
        {game.arena ? (
          <>
            <span className="truncate">{game.arena}</span>.{" "}
            <span className="truncate">{game.city}</span>
          </>
        ) : (
          <span className="truncate">{game.city}</span>
        )}
      </div>
    </div>
  );
};
