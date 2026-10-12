import DesktopNavigation from "./header-parts/DesktopNavigation";
import MobileNavigation from "./header-parts/MobileNavigation";

const Header = () => {
  return (
    <>
      {/* Десктопная навигация */}
      <DesktopNavigation />
      {/* Мобильная навигация */}
      <MobileNavigation />
    </>
  );
};

export default Header;
