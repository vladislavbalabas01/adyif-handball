import { MOBILE_NAV_SUB_ITEMS } from "@/data/navigation";
import Link from "next/link";
import { NavItem } from "@/types/interfaces";
import { X } from "lucide-react";

export default function MobileSubMenu({
  isOpen,
  onClose,
  currentPathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPathname: string;
}) {
  return (
    /* Дополнительное полноэкранное мобильное меню */

    <div
      className={`
        absolute right-3 bottom-[calc(100%+0.5rem)] z-40
        bg-slate-900/80 backdrop-blur-xl
        rounded-xl md:hidden
        flex flex-col justify-between
        py-4 px-6 h-52
        transition-all duration-300
        ${isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-20"}`}
    >
      <div className="flex justify-end">
        <button onClick={onClose} aria-label="Закрыть меню">
          <X />
        </button>
      </div>

      <nav className="flex-1 flex flex-col justify-center gap-2">
        {MOBILE_NAV_SUB_ITEMS.map((item: NavItem) => {
          const isActive = currentPathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href as string}
              className="flex gap-3 text-xl"
            >
              <Icon className={`${isActive ? "text-green-light" : ""}`} />
              <span className={`${isActive ? "text-green-light" : ""}`}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
