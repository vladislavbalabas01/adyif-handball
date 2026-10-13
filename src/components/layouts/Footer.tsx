import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { PC_NAV_ITEMS } from "@/data/navigation";
import { NavItem } from "@/types/interfaces";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="container mx-auto py-10">
        {/* Основная сетка */}
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8 mb-12">
          {/* 1. О клубе */}
          <div className="space-y-4">
            <Logo width={20} />
            <p className="text-sm text-slate-400 leading-relaxed">
              Женский гандбольный клуб «АГУ-Адыиф» (г. Майкоп). Официальный сайт
              команды Республики Адыгея.
            </p>
          </div>

          {/* 2. Навигация */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              {PC_NAV_ITEMS.map((item: NavItem) => (
                <li key={item.href}>
                  <Link
                    href={item.href as string}
                    className="hover:text-green-light transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Команда */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Команда</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={"/team?squad=adyif-1"}
                  className="hover:text-green-light transition-colors"
                >
                  "АГУ-Адыиф"
                </Link>
              </li>
              <li>
                <Link
                  href={"/team?squad=adyif-2"}
                  className="hover:text-green-light transition-colors"
                >
                  "АГУ-Адыиф" - 2
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Контакты и домашняя арена */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-green-light shrink-0 mt-0.5" />
                <span>
                  г. Майкоп, ул. Университетская, 1 (ДС «Якуб Коблев»)
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-green-light shrink-0" />
                <a
                  href="mailto:info@agu-adyif.ru"
                  className="hover:text-white transition-colors"
                >
                  info@agu-adyif.ru
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-green-light shrink-0" />
                <a
                  href="tel:+78772000000"
                  className="hover:text-white transition-colors"
                >
                  +7 (8772) XX-XX-XX
                </a>
              </li>
            </ul>
          </div>

          {/* 5. Социальные сети */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Соцсети</h3>
            <p className="text-sm text-slate-400 mb-4">
              Следите за новостями и анонсами матчей в наших каналах:
            </p>
            <div className="flex gap-3">
              {/* VK */}
              <Link
                href="https://vk.ru/hc_adyif_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 font-bold text-xs hover:text-white transition-all"
                aria-label="ВКонтакте"
              >
                <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                  <path d="M15.073 2H8.937C3.388 2 2 3.388 2 8.937v6.126C2 20.612 3.388 22 8.937 22h6.136C20.612 22 22 20.612 22 15.063V8.937C22 3.388 20.612 2 15.073 2zm3.17 13.782h-1.396c-.53 0-.693-.422-1.648-1.382-1.12-1.1-1.61-1.246-1.89-1.246-.395 0-.51.112-.51.65v1.365c0 .34-.11.55-1.01.55-1.488 0-3.136-.9-4.303-2.58-1.706-2.404-2.17-4.214-2.17-4.582 0-.2.08-.39.47-.39h1.396c.35 0 .48.16.61.53.68 1.97 1.83 3.69 2.3 3.69.17 0 .25-.08.25-.52V10.1c-.05-.93-.54-1.01-.54-1.34 0-.16.13-.33.35-.33h2.19c.3 0 .41.16.41.51v2.75c0 .3.13.41.22.41.17 0 .31-.11.62-.42 1.02-1.15 1.75-2.92 1.75-2.92.09-.2.25-.33.6-.33h1.396c.42 0 .53.22.44.51-.18.82-1.92 3.3-1.92 3.3-.15.24-.21.35 0 .63.15.2.66.65 1.01 1.05.65.74 1.15 1.36 1.28 1.79.13.41-.07.62-.48.62z" />
                </svg>
              </Link>
              {/* Telegram */}
              <Link
                href="https://t.me/hc_adyif_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 font-bold text-xs hover:text-white transition-all"
                aria-label="Telegram"
              >
                <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.87 7.97-3.44 3.8-1.58 4.59-1.86 5.1-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.22z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} ГК «АГУ-Адыиф». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
