import { getTeamGames } from "@/services/games.service";
import { LinkHeadingOfSection } from "../ui/HeadingOfSection";
import { MatchCard } from "../ui/matches/MatchCard";
import { Game } from "@/types/interfaces";

const MatchesScrollSection = async () => {
  const games = await getTeamGames();

  const upcoming = games.find((game) => !game.isFinished);
  const finished = games
    .filter((game) => game.isFinished)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  const gamesArr: Game[] = [];
  if (upcoming) gamesArr.push(upcoming);

  gamesArr.push(...finished);

  return (
    <section className="container mb-6 mx-auto w-full py-8 bg-slate-950 overflow-hidden z-3">
      <LinkHeadingOfSection text="Матчи команды" href="/matches" />

      {/* Горизонтальная прокручиваемая лента */}
      <div className="lg:container flex 2xl:grid-cols-3 justify-between w-full overflow-x-auto gap-4 pb-4 scrollbar-none snap-x snap-mandatory touch-pan-x">
        {gamesArr.map((game) => {
          return <MatchCard key={game.id} game={game} />;
        })}
      </div>
    </section>
  );
};

export default MatchesScrollSection;

// "use client";
// import { Match } from "@/types/interfaces";
// import Image from "next/image";
// import { MapPin } from "lucide-react";
// import { MATCHES_DATA } from "@/data/matches";
// import { HeadingOfSection } from "../ui/HeadingOfSection";

// // Название команды
// const TEAM_NAME = "АГУ-АДЫИФ";
// const TEAM_LOGO = "/logo/adyif_logo_sq.png"; // путь к твоему логотипу

// const MatchesScrollSection = () => {
//   const upcomingMatch = MATCHES_DATA.find((m) => m.status === "upcoming");
//   const pastMatches = MATCHES_DATA
//     // 1. Оставляем только завершенные матчи
//     .filter((match) => match.status === "finished")
//     // 2. Сортируем по дате от самой новой к старой (по убыванию)
//     .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
//     // 3. Берем первые два матча из отсортированного списка
//     .slice(0, 2);

//   // Объединяем в один массив: сначала предстоящий, затем 3 прошедших
//   const allMatches: Match[] = [];
//   if (upcomingMatch) allMatches.push(upcomingMatch);
//   allMatches.push(...pastMatches);

//   return (
//     <section className="container mb-6 mx-auto w-full py-8 bg-slate-950 overflow-hidden z-3">
//       <HeadingOfSection text="Матчи команды" />

//       {/* Горизонтальная прокручиваемая лента */}
//       <div className="lg:container flex 2xl:grid-cols-3 justify-between w-full overflow-x-auto gap-4 pb-4 scrollbar-none snap-x snap-mandatory touch-pan-x">
//         {allMatches.map((match) => {
//           const isUpcoming = match.status === "upcoming";

//           // Рассчитываем счета для АГУ-АДЫИФ и соперника
//           const homeScore = match.homeTeam?.score ?? 0;
//           const awayScore = match.awayTeam?.score ?? 0;
//           const ourScore = match.isHome ? homeScore : awayScore;
//           const opponentScore = match.isHome ? awayScore : homeScore;
//           const isWin = !isUpcoming && ourScore > opponentScore;
//           const isDraw = !isUpcoming && ourScore === opponentScore;

//           return (
//             <div
//               key={match.id}
//               className={`flex-none w-90 sm:w-100 snap-align-start rounded-3xl p-5 border transition-all ${
//                 isUpcoming
//                   ? "bg-slate-900/90 border-green-primary/50 shadow-lg shadow-green-primary/50"
//                   : "bg-slate-900/40 border-slate-800"
//               }`}
//             >
//               {/* Шапка карточки: Бейдж статуса и Дата */}
//               <div className="flex items-center justify-between gap-2 mb-4">
//                 {isUpcoming ? (
//                   <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/20 border border-white text-white text-[0.6rem] font-black uppercase tracking-wider">
//                     Скоро
//                   </span>
//                 ) : (
//                   <span
//                     className={`inline-flex items-center px-2.5 py-1 rounded-full text-[0.6rem] font-black uppercase tracking-wider ${
//                       isWin
//                         ? "bg-emerald-500/20 text-green-light border border-green-light"
//                         : isDraw
//                           ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
//                           : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
//                     }`}
//                   >
//                     {isWin ? "Победа" : isDraw ? "Ничья" : "Поражение"}
//                   </span>
//                 )}

//                 <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
//                   <span>
//                     {new Date(match.date).toLocaleDateString("ru-RU")}
//                   </span>
//                   {match.time && (
//                     <span className="text-white font-bold ml-1">
//                       {match.time}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Табло: Команда 1 - Счет - Команда 2 */}
//               <div className="flex justify-between my-8 gap-2">
//                 {/* АГУ-АДЫИФ (Хозяева или Гости) */}
//                 <div className="flex flex-col items-center gap-2 flex-1 text-center">
//                   <div className="relative size-12 sm:size-14 bg-slate-800/60 rounded-2xl p-2 border border-slate-700/50 flex items-start justify-center">
//                     <Image
//                       src={match.isHome ? TEAM_LOGO : match.homeTeam.logo}
//                       alt="Команда 1"
//                       width={48}
//                       height={48}
//                       className="object-contain"
//                     />
//                   </div>
//                   <span className="text-xs font-extrabold text-white line-clamp-2">
//                     {match.isHome ? TEAM_NAME : match.homeTeam.name}
//                   </span>
//                 </div>

//                 {/* Центр: Счет или "VS" */}
//                 <div className="flex items-center justify-center px-2">
//                   {isUpcoming ? (
//                     <span className="text-xl font-black italic text-yellow-300 tracking-widest">
//                       VS
//                     </span>
//                   ) : (
//                     <div className="flex items-center gap-2 text-2xl font-black italic text-white tracking-tight  px-3 py-1.5 rounded-xl ">
//                       <span>{homeScore}</span>
//                       <span className="text-slate-600">:</span>
//                       <span>{awayScore}</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Соперник (или АГУ-АДЫИФ если мы в гостях) */}
//                 <div className="flex flex-col items-center gap-2 flex-1 text-center">
//                   <div className="relative size-12 sm:size-14 bg-slate-800/60 rounded-2xl p-2 border border-slate-700/50 flex items-center justify-center">
//                     <Image
//                       src={match.isHome ? match.awayTeam.logo : TEAM_LOGO}
//                       alt="Команда 2"
//                       width={48}
//                       height={48}
//                       className="object-contain"
//                     />
//                   </div>
//                   <span className="text-xs font-extrabold text-white line-clamp-2">
//                     {match.isHome ? match.awayTeam.name : TEAM_NAME}
//                   </span>
//                 </div>
//               </div>

//               {/* Футер карточки: Локация */}
//               <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-slate-400 text-xs truncate">
//                 <MapPin className="size-3.5 shrink-0 text-slate-500" />
//                 <span className="truncate">{match.location}</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default MatchesScrollSection;
