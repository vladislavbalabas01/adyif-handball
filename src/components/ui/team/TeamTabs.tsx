"use client";

import { useCallback, ComponentProps } from "react";
import { CardPlayer } from "./CardPlayer";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

type PlayerCardItem = ComponentProps<typeof CardPlayer>["player"];

const SQUADS = {
  "adyif-1": { label: 'АГУ-"Адыиф"-1', dbValue: "Адыиф-1" },
  "adyif-2": { label: 'АГУ-"Адыиф"-2', dbValue: "Адыиф-2" },
} as const;

type SquadKey = keyof typeof SQUADS;

export default function TeamTabs({ players }: { players: PlayerCardItem[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const squadUrlParam = searchParams.get("squad");

  const currentSquadKey: SquadKey =
    squadUrlParam && squadUrlParam in SQUADS
      ? (squadUrlParam as SquadKey)
      : "adyif-1";

  const handleSquadChange = useCallback(
    (newSquadKey: SquadKey) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("squad", newSquadKey);

      // router.replace обновляет URL без лишней записи в историю и без прыжка скролла
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const filteredPlayers = players.filter(
    (player) => player.squad === SQUADS[currentSquadKey].dbValue,
  );

  return (
    <div>
      {/* Кнопки переключения составов */}
      <div className="flex justify-center gap-3 mb-8">
        {(Object.keys(SQUADS) as SquadKey[]).map((key) => {
          const isActive = currentSquadKey === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => handleSquadChange(key)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition ${
                isActive
                  ? "bg-green-primary text-white shadow-md hover:bg-green-primary/80"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              {SQUADS[key].label}
            </button>
          );
        })}
      </div>

      {/* Сетка игроков выбранного состава */}
      {filteredPlayers.length === 0 ? (
        <p className="text-center text-zinc-400 py-12">
          В составе «{SQUADS[currentSquadKey].label}» пока нет игроков.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPlayers.map((player) => (
            <CardPlayer key={player.id} player={player} />
          ))}
        </div>
      )}
    </div>
  );
}
