import { HeadingOfSection } from "@/components/ui/HeadingOfSection";
import TeamTabs from "@/components/ui/team/TeamTabs";
import { getPlayers } from "@/services/players.service";

export const dynamic = "force-dynamic";

const Page = async () => {
  const allPlayers = await getPlayers();

  return (
    <main className="mt-6 sm:mt-8 md:mt-32 lg:mt-32 xl:mt-34 2xl:mt-36 mb-20">
      <div className="container">
        <HeadingOfSection text='Состав команды "АГУ-Адыиф"' />

        <TeamTabs players={allPlayers} />
      </div>
    </main>
  );
};

export default Page;
