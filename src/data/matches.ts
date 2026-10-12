import { Match } from "@/types/interfaces";

export const MATCHES_DATA: Match[] = [
  {
    id: 1,
    homeTeam: {
      name: "АГУ-Адыиф",
      logo: "/logo/adyif_logo_sq.png",
    },
    awayTeam: {
      name: "Ростов-Дон",
      logo: "/logo/rostov_logo_sq.png",
    },
    date: "2026-08-10T17:00:00.000Z",
    time: "18:00",
    location: "ДС «Якуб Коблев», Майкоп",
    tournament: "OLIMPBET Суперлига",
    status: "finished",
    isHome: true,
    ticketUrl: "/tickets",
  },
  {
    id: 2,
    homeTeam: {
      name: "Астраханочка",
      logo: "/logo/astrahanochka_logo_sq.png",
    },
    awayTeam: {
      name: "АГУ-Адыиф",
      logo: "/logo/adyif_logo_sq.png",
    },
    date: "2026-08-22T17:00:00.000Z",
    time: "19:00",
    location: "УСК «Олимп», Тольятти",
    tournament: "OLIMPBET Суперлига",
    status: "finished",
    isHome: false,
  },
  {
    id: 3,
    homeTeam: {
      name: "АГУ-Адыиф",
      logo: "/logo/adyif_logo_sq.png",
      score: 28,
    },
    awayTeam: {
      name: "ЦСКА",
      logo: "/logo/cska_logo_sq.png",
      score: 26,
    },
    date: "2026-09-05T17:00:00.000Z",
    time: "18:30",
    location: "ДС «Якуб Коблев», Майкоп",
    tournament: "OLIMPBET Суперлига",
    status: "finished",
    isHome: true,
  },
  {
    id: 4,
    homeTeam: {
      name: "Динамо-Синара",
      logo: "/logo/dynamo_logo_sq.png",
      score: 30,
    },
    awayTeam: {
      name: "АГУ-Адыиф",
      logo: "/logo/adyif_logo_sq.png",
      score: 27,
    },
    date: "2026-09-29T17:00:00.000Z",
    time: "17:00",
    location: "СГК «Динамо», Волгоград",
    tournament: "OLIMPBET Суперлига",
    status: "finished",
    isHome: false,
  },
  {
    id: 5,
    homeTeam: {
      name: "Ростов-Дон",
      logo: "/logo/rostov_logo_sq.png",
    },
    awayTeam: {
      name: "АГУ-Адыиф",
      logo: "/logo/adyif_logo_sq.png",
    },

    date: "2026-11-10T17:00:00.000Z",
    time: "18:00",
    location: "Ростов-арена», Ростов-на-Дону",
    tournament: "OLIMPBET Суперлига",
    status: "upcoming",
    isHome: false,
    ticketUrl: "/tickets",
  },
];
