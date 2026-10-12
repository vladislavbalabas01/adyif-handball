import HeroSection from "@/components/home/HeroSection";
import MatchesScrollSection from "@/components/home/MatchesScrollSection";
import NewsSection from "@/components/home/NewsSection";
import SponsorsSection from "@/components/home/SponsorsSection";
import StandingsSection from "@/components/home/StandingsSection";

export default function MainPage() {
  return (
    <main>
      {/* Hero секция */}
      <HeroSection />

      {/* Ближайший матч */}
      <MatchesScrollSection />

      {/* Новости */}
      <NewsSection />

      {/* Турнирная таблица */}
      <StandingsSection />

      {/* Спонсоры */}
      <SponsorsSection />
    </main>
  );
}
