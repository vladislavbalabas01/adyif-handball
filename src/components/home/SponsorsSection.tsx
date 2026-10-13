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
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {generalSponsors.map((sponsor: Sponsor) => {
            return (
              <Link
                key={sponsor.id}
                href={sponsor.slug}
                className={`relative opacity-75 hover:opacity-100 transition-opacity duration-300`}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.title}
                  width={200}
                  height={64}
                  className="object-contain h-22 w-auto"
                />
              </Link>
            );
          })}
        </div>

        {/* 2. Партнёры */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {standardSponsors.map((sponsor: Sponsor) => {
            return (
              <Link
                key={sponsor.id}
                href={sponsor.slug}
                className={`relative flex justify-center items-center opacity-75 hover:opacity-100 transition-opacity duration-300`}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.title}
                  width={200}
                  height={64}
                  className="object-contain h-18 w-auto"
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
