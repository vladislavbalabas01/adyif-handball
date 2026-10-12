import { useEffect, useState } from "react";
import { TeamStanding } from "@/types/interfaces";

export const useStandings = () => {
  const [standings, setStandings] = useState<TeamStanding[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [dataError, setDataError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchStandings() {
      try {
        const res = await fetch("/api/standings");
        if (!res.ok) {
          setDataError(true);
        }
        const data = await res.json();
        setStandings(data);
      } catch (err) {
        console.error("Ошибка загрузки таблицы:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchStandings();
  }, []);

  return { standings, loading, dataError };
};
