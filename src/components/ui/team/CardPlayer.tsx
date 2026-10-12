import { Player } from "@/types/interfaces";
import Image from "next/image";

export const CardPlayer = ({ player }: { player: Player }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-square w-full overflow-hidden">
        {/* Background */}
        <div className="custom-shape absolute inset-0 bg-slate-800"></div>

        {/* Player */}
        <div className="absolute right-0 bottom-0 w-9/10 h-9/10">
          <Image
            src={`${player.photo?.url}` || "/images/players/default-player.png"}
            alt={player.photo?.altText || "Player photo"}
            className="object-contain"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-3">
          <span className="text-green-light text-6xl font-light italic">
            {player.number}
          </span>
          <div className="flex flex-col justify-center">
            <h3 className="text-green-light text-sm font-bold">
              {player.firstName}
            </h3>
            <h3 className="text-white text-lg font-bold">{player.lastName}</h3>
          </div>
        </div>

        <span className="text-green-light text-sm font-light">
          {player.position}
        </span>
      </div>
    </div>
  );
};
