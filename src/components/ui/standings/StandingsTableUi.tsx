import { getStandings, getCompData } from "@/services/standings.service";
import { StandingsTableRow } from "./StandingsTableRow";
import { StandingsTableHeader } from "./StandingsTableHeader";

const ligaCompId = Number(process.env.SUPERLIGA_COMPETITION_ID);

export const StandingsTableUi = async ({
  standId,
  fullSize,
}: {
  standId: number;
  fullSize: boolean;
}) => {
  const [teamStandings, competitionData] = await Promise.all([
    getStandings(standId),
    getCompData(standId),
  ]);

  return (
    <section className="w-full min-w-0 overflow-hidden rounded-2xl border bg-slate-900/40 border-slate-800">
      {/* Заголовок */}
      <div className="border-b border-zinc-200 px-4 py-4 sm:px-5">
        <h2 className="text-lg font-bold text-white">{competitionData.Name}</h2>
        <h2 className="text-sm uppercase text-white">
          {competitionData.Parent.Name}
        </h2>
      </div>

      {/* Таблица */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <StandingsTableHeader fullSize={fullSize} />
          </thead>

          <tbody>
            {teamStandings.map((row) => (
              <StandingsTableRow key={row.rank} row={row} fullSize={fullSize} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
