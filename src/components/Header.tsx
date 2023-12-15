import HeaderNavigation from "./HeaderNavigation";
import SubHeader from "./SubHeader";
import { useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleShowMobileMenu = () => {
    setShowMobileMenu((value) => !value);
  };

  return (
    <div className="flex flex-col gap-20 lg:gap-40">
      <HeaderNavigation
        toggleShowMobileMenu={toggleShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
      <SubHeader />
    </div>
  );
};

export default Header;
