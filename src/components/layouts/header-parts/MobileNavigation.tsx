"use client";

import Link from "next/link";
import { MOBILE_NAV_ITEMS } from "@/data/navigation";
import { NavItem } from "@/types/interfaces";
import { useMobileNav } from "@/hooks/useMobileNav";
import MobileSubMenu from "./MobileSubMenu";

const MobileNavigation = () => {
  const { isOpen, close, toggle, menuRef, pathname } = useMobileNav();

  return (
    <>
      {/* Затемняющий оверлей для удобного закрытия меню по тапу мимо */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 backdrop-blur-xs md:hidden"
          aria-hidden="true"
          onClick={close}
        />
      )}

      <div
        ref={menuRef}
        className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-slate-800 border-t border-green-light backdrop-blur-lg py-3"
      >
        <MobileSubMenu
          isOpen={isOpen}
          onClose={close}
          currentPathname={pathname}
        />

        {/* Нижняя панеель навигации */}
        <div className="grid grid-cols-5 gap-1">
          {MOBILE_NAV_ITEMS.map((item: NavItem) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            if (item.href) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex justify-center ${isActive ? "text-green-light" : ""}`}
                >
                  <Icon className="size-7" />
                </Link>
              );
            } else {
              // Кнопка меню
              return (
                <button
                  key={item.id}
                  className={`flex justify-center`}
                  onClick={toggle}
                  aria-expanded={isOpen}
                  aria-label="Открыть меню"
                >
                  <Icon className="size-7" />
                </button>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
