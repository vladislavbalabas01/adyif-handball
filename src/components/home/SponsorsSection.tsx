import { SPONSORS_DATA } from "@/data/sponsors";
import { Sponsor } from "@/types/interfaces";
import Image from "next/image";
import Link from "next/link";

const SponsorsSection = () => {
  const generalSponsors = SPONSORS_DATA.filter((sponsor) => sponsor.isGeneral);
  const standardSponsors = SPONSORS_DATA.filter(
    (sponsor) => !sponsor.isGeneral,
  );

  return (
    <section className="container py-8 md:py-12">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* 1. Генеральные спонсоры */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {generalSponsors.map((sponsor: Sponsor) => {
            const isIkor = sponsor.title === "Айкор";
            const widthClass = isIkor ? "w-28 md:w-36" : "w-36 md:w-56";

            return (
              <Link
                key={sponsor.id}
                href={sponsor.slug}
                className={`relative h-14 md:h-16 ${widthClass} opacity-75 hover:opacity-100 transition-opacity duration-300`}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.title}
                  fill
                  sizes="(max-width: 768px) 150px, 220px"
                  className="object-contain brightness-0 invert"
                />
              </Link>
            );
          })}
        </div>

        {/* 2. Партнёры */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {standardSponsors.map((sponsor: Sponsor) => {
            const isFgr = sponsor.title === "ФГР";

            // Динамически определяем габариты и цветность
            const sizeClass = isFgr
              ? "w-12 md:w-16 h-16 md:h-20"
              : "w-20 md:w-28 h-20 md:h-28";
            const colorClass = isFgr ? "" : "brightness-0 invert";

            return (
              <Link
                key={sponsor.id}
                href={sponsor.slug}
                className={`relative flex justify-center items-center ${sizeClass} opacity-75 hover:opacity-100 transition-opacity duration-300`}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.title}
                  fill
                  sizes="(max-width: 768px) 100px, 150px"
                  className={`object-contain ${colorClass}`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
