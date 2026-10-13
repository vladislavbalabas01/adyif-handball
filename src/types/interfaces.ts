import { LucideIcon } from "lucide-react";
import { getPlayers } from "@/services/players.service";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  hot?: boolean;
  date: string;
  imageMain: string;
  imageGallery?: [{ id: string; src: string }];
  slug: string;
}

export interface NewsApiResponse {
  news: NewsItem[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

export interface Team {
  id: number;
  name: string;
  logo: string;
  arena: string;
  players?: Player[];
}

export interface TeamStanding {
  rank: number;
  team: string;
  games: number;
  wins: number;
  draws: number;
  losses: number;
  goals: string;
  points: number;
}

export interface Match {
  id: number;
  homeTeam: {
    name: string;
    logo: string;
    score?: number;
  };
  awayTeam: {
    name: string;
    logo: string;
    score?: number;
  };
  date: string;
  time: string;
  location: string;
  tournament: string;
  status: "upcoming" | "finished" | "live";
  isHome: boolean;
  ticketUrl?: string;
}

// NEW!!!

export interface Game {
  id: number;
  date: string;
  time: string;

  homeTeam: {
    id: number;
    name: string;
    logoSrc: string;
    score: number | null;
  };

  awayTeam: {
    id: number;
    name: string;
    logoSrc: string;
    score: number | null;
  };

  city: string;
  arena: string;

  isFinished: boolean;
}

export interface TeamGameApi {
  Game: {
    GameId: number;
    GameNumber: string;

    LocalDateTime: string;
    LocalTimeString: string;

    MoscowDateTime: string;
    MoscowTimeString: string;

    Score: string | null;

    GameTeam1: {
      Team1Id: number;
      CompTeam: {
        TeamId: number;
        Name: string;
        ShortName: string;
        Team: {
          Name: string;
          LogoId: number;
          ClubLogoId: number;
        };
      };
      Score: number | null;
    };

    GameTeam2: {
      Team2Id: number;
      CompTeam: {
        TeamId: number;
        Name: string;
        ShortName: string;
        Team: {
          Name: string;
          LogoId: number;
          ClubLogoId: number;
        };
      };
      Score: number | null;
    };

    City: {
      Name: string;
    };

    Arena?: {
      Name: string;
    };
  };

  Comp: {
    CompId: number;
    ShortName: string;
  };
}

export interface NavItem {
  id: number;
  title: string;
  icon: LucideIcon;
  href?: string;
  isToggleMenu?: boolean;
}

export interface SlideItemProps {
  post: NewsItem;
  isPriority?: boolean;
}

export interface SlideDotsProps {
  count: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export interface Sponsor {
  id: number;
  title: string;
  slug: string;
  logo: string;
  status: string;
}

export interface NewsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export interface TeamStanding {
  rank: number;
  team: string;
  games: number;
  wins: number;
  draws: number;
  losses: number;
  goals: string;
  points: number;
  logoSrc: string;
}

// Prisma
export interface CreatePlayerData {
  lastName: string;
  firstName: string;
  middleName?: string;
  birthDate: Date;
  number: number;
  position: string;
  squad: string;
  height: number;
  photoUrl?: string;
  photoAlt?: string;
}

// Извлекаем тип одного игрока из массива, который возвращает сервис
export type Player = Awaited<ReturnType<typeof getPlayers>>[number];
