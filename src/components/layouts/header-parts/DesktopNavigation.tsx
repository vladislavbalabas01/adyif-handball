"use client";
import Logo from "@/components/ui/Logo";
import { PC_NAV_ITEMS } from "@/data/navigation";
import { useHeaderDesktop } from "@/hooks/useHeaderDesktop";
import { NavItem } from "@/types/interfaces";
import { usePathname } from "next/navigation";
import Link from "next/link";

const DesktopNavigation = () => {
  const pathname = usePathname();
  const isVisible = useHeaderDesktop();

  const showHeader = pathname !== "/" || isVisible;
  return (
    <header
      className={`hidden md:block fixed inset-x-0 top-0 py-4 w-full bg-slate-900 shadow-md border-b border-green-primary z-50 transition-transform duration-300 ease-in-out ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/*  Логотип */}
          <Logo width={20} />

          {/* Навигация */}
          <nav className="flex items-center gap-1 lg:gap-4">
            {PC_NAV_ITEMS.map((item: NavItem) => {
              return (
                <Link
                  key={item.href}
                  href={item.href as string}
                  className={`text-lg
                            ${pathname === item.href ? "text-green-primary" : "text-white"}
                            hover:text-green-primary
                            transition-colors duration-300`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavigation;
