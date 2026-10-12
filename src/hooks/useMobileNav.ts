import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const useMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Закрытие доп меню при клике на свободную область экрана
  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (!isOpen) return;

    document.addEventListener("pointerdown", handleClickOutside);

    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [isOpen]);

  // Блокировка скролла страницы при открытом мобильном меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Закрытие меню при смене страницы
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return {
    isOpen,
    toggle: () => setIsOpen((prev) => !prev),
    close: () => setIsOpen(false),
    menuRef,
    pathname,
  };
};
