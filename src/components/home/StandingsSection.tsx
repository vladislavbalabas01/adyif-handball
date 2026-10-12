import { Suspense } from "react";
import { StandingsTableUi } from "../ui/standings/StandingsTableUi";
import { StandingsSkeleton } from "../ui/standings/StandingsSkeleton";

const ligaCompId = Number(process.env.SUPERLIGA_COMPETITION_ID);

export default async function StandingsTable() {
  return (
    <section className="w-full mx-auto py-8">
      <div className="container">
        <Suspense fallback={<StandingsSkeleton />}>
          <StandingsTableUi standId={ligaCompId} fullSize={true} />
        </Suspense>
      </div>
    </section>
  );
}
