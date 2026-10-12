import { getTeamGames } from "@/services/games.service";
import { MatchCard } from "./MatchCard";

export const MatchesGrid = async () => {
  const games = await getTeamGames();

  const upcoming = games
    .filter((game) => !game.isFinished)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  const finished = games
    .filter((game) => game.isFinished)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="flex flex-col justify-start xl:flex-row gap-6">
      {/* Предстоящие */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Предстоящие матчи</h2>
        </div>

        <div className="grid gap-6">
          {upcoming.map((game) => (
            <MatchCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Завершённые */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white">Последние матчи</h2>
        </div>

        <div className="grid gap-6">
          {finished.map((game) => (
            <MatchCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
};
