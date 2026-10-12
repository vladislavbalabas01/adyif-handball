import { MatchesGrid } from "@/components/ui/matches/MatchesGrid";
import { StandingsSkeleton } from "@/components/ui/standings/StandingsSkeleton";
import { StandingsTableUi } from "@/components/ui/standings/StandingsTableUi";
import { Suspense } from "react";

const superligaId = Number(process.env.SUPERLIGA_COMPETITION_ID);

const Page = async () => {
  return (
    <main className="mt-6 sm:mt-8 md:mt-32 lg:mt-32 xl:mt-34 2xl:mt-36 mb-8">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="w-full sm:w-4/6">
            <MatchesGrid />
          </div>
          <div className="w-full sm:w-2/6">
            <Suspense fallback={<StandingsSkeleton />}>
              <StandingsTableUi fullSize={false} standId={superligaId} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
