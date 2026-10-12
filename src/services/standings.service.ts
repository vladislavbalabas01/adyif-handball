import { TeamStanding } from "@/types/interfaces";

export async function getStandings(compId: number): Promise<TeamStanding[]> {
  const API_URL = `https://ias.rushandball.ru/Api/Competitions/WithTeams/${compId}`;

  const response = await fetch(API_URL, {
    next: { revalidate: 3600 }, // Кэшируем на 1 час
    headers: {
      Accept: "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Сервер ФГР ответил ошибкой: ${response.status} ${response.statusText}`,
    );
  }

  const json = await response.json();

  // Проверяем, действительно ли нам пришла структура, которую мы ожидаем
  if (!json || !json.Data || !Array.isArray(json.Data.CompTeams)) {
    console.error("Неожиданный ответ API:", json);
    throw new Error("В ответе сервера отсутствует массив Data.CompTeams");
  }

  const compTeams = json.Data.CompTeams;

  const standings: TeamStanding[] = compTeams.map((item: any) => {
    const rank = item.Place ?? 0;

    // Ищем название команды по приоритету
    const teamName =
      item.ShortName || item.Name || item.Team?.Name || "Неизвестная команда";

    const games = item.Games ?? 0;
    const wins = item.Winnings ?? 0;
    const draws = item.Draws ?? 0;
    const losses = item.Defeats ?? 0;

    const goalsScored = item.GoalsPlus ?? 0;
    const goalsConceded = item.GoalsMinus ?? 0;
    const goals = `${goalsScored}-${goalsConceded}`;

    const points = item.Points ?? 0;

    const logoId = item.TeamId;
    const logoSrc = `https://ias.rushandball.ru/api/Media/TeamLogo/${logoId}?useDefault=true`;

    return {
      rank,
      team: teamName,
      games,
      wins,
      draws,
      losses,
      goals,
      points,
      logoSrc,
    };
  });

  return standings.sort((a, b) => {
    if (a.rank === 0 && b.rank !== 0) return 1;
    if (b.rank === 0 && a.rank !== 0) return -1;
    return a.rank - b.rank;
  });
}

export async function getCompData(compId: number) {
  const API_URL = `https://ias.rushandball.ru/Api/Competitions/WithChilds/${compId}`;

  const response = await fetch(API_URL, {
    next: { revalidate: 3600 }, // Кэшируем на 1 час
    headers: {
      Accept: "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Сервер ФГР ответил ошибкой: ${response.status} ${response.statusText}`,
    );
  }

  const json = await response.json();

  return json.Data;
}
