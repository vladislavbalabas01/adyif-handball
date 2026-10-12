import { HeadingOfSection } from "@/components/ui/HeadingOfSection";
import { CardPlayer } from "@/components/ui/team/CardPlayer";
import { getPlayers } from "@/services/players.service";

export const dynamic = "force-dynamic";

const Page = async () => {
  const allPlayers = await getPlayers();

  return (
    <main className="mt-6 sm:mt-8 md:mt-32 lg:mt-32 xl:mt-34 2xl:mt-36 mb-20">
      <div className="container">
        <HeadingOfSection text='Состав команды "АГУ-Адыиф"' />

        <div className="pt-xl sm:pt-2xl mb-4xl xs:grid-cols-2 grid auto-rows-[1fr] sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {allPlayers.map((player) => (
            <CardPlayer key={player.id} player={player} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
