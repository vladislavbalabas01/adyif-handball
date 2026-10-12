import { Game, TeamGameApi } from "@/types/interfaces";

const API_URL =
  "https://ias.rushandball.ru/Api/Online/GetTeamGames/110?compId=8002";

export const getTeamGames = async (): Promise<Game[]> => {
  const response = await fetch(API_URL, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) throw new Error("Не удалось получить список матчей");

  const data: {
    Version: string;
    StatusCode: number;
    Data: TeamGameApi[];
  } = await response.json();

  return data.Data.map((item) => {
    const game = item.Game;

    return {
      id: game.GameId,

      date: game.LocalDateTime,
      time: game.LocalTimeString,

      homeTeam: {
        id: game.GameTeam1.CompTeam.TeamId,
        name: game.GameTeam1.CompTeam.Name,
        logoSrc: getTeamLogo(game.GameTeam1.CompTeam.TeamId),
        score: game.GameTeam1.Score,
      },

      awayTeam: {
        id: game.GameTeam2.CompTeam.TeamId,
        name: game.GameTeam2.CompTeam.Name,
        logoSrc: getTeamLogo(game.GameTeam2.CompTeam.TeamId),
        score: game.GameTeam2.Score,
      },

      city: game.City.Name,
      arena: game.Arena?.Name || "",

      isFinished: Boolean(game.Score),
    };
  });
};

const getTeamLogo = (logoId: number) => {
  return `https://ias.rushandball.ru/api/Media/TeamLogo/${logoId}?useDefault=true`;
};
