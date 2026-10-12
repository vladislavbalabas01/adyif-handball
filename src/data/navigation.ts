import { NavItem } from "@/types/interfaces";
import {
  Shirt,
  House,
  Volleyball,
  Info,
  ScrollText,
  Image,
  CircleEllipsis,
} from "lucide-react";

export const MOBILE_NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    title: "Главная",
    icon: House,
    href: "/",
  },
  {
    id: 2,
    title: "Новости",
    icon: ScrollText,
    href: "/news",
  },
  {
    id: 3,
    title: "Матчи",
    icon: Volleyball,
    href: "/matches",
  },
  {
    id: 4,
    title: "Команда",
    icon: Shirt,
    href: "/team",
  },
  {
    id: 5,
    title: "Меню",
    icon: CircleEllipsis,
    isToggleMenu: true,
  },
];

export const MOBILE_NAV_SUB_ITEMS: NavItem[] = [
  {
    id: 5,
    title: "Медиа",
    icon: Image,
    href: "/media",
  },
  {
    id: 6,
    title: "Контакты",
    icon: Info,
    href: "/contacts",
  },
];

export const PC_NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    title: "Новости",
    icon: ScrollText,
    href: "/news",
  },
  {
    id: 2,
    title: "Матчи",
    icon: Volleyball,
    href: "/matches",
  },
  {
    id: 3,
    title: "Команда",
    icon: Shirt,
    href: "/team",
  },
  {
    id: 4,
    title: "Медиа",
    icon: Image,
    href: "/media",
  },
  {
    id: 5,
    title: "Контакты",
    icon: Info,
    href: "/contacts",
  },
];
