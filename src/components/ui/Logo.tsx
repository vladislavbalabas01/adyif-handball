import Image from "next/image";
import Link from "next/link";

const Logo = ({ width }: { width: number }) => {
  return (
    <Link href="/" className="flex items-center gap-3 group z-1">
      {/*  Иконка */}
      <div>
        <Image
          src="/logo/adyif_logo_sq.png"
          alt="logo"
          priority
          width={100}
          height={100}
          quality={95}
          className={`object-contain w-${width} group-hover:scale-105 transition-transform duration-300`}
        />
      </div>

      <span className="text-2xl text-white">|</span>

      {/* Название сайта */}
      <div className="flex flex-col leading-none text-white">
        <span className="font-semibold uppe">Гандбольный клуб</span>
        <span className="font-black italic text-lg">АГУ-АДЫИФ</span>
      </div>
    </Link>
  );
};

export default Logo;
