import { useTranslation } from "react-i18next";
import { Nav } from "../ts/enums";
import LanguageSelector from "./LanguageSelector";
import Navigation from "./Navigation";
import SubHeader from "./SubHeader";
import { useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { t } = useTranslation('header');
  const toggleShowMobileMenu = () => {
    setShowMobileMenu((value) => !value);
  };

  return (
    <div className="flex flex-col gap-20 lg:gap-40">
      <div className="flex justify-between   items-center  py-14">
        <h1 className=" text-xl sm:text-3xl xl:border-transparent xl:border-b-2 xl:pb-1">
          {t("name")}
        </h1>
        <div className="flex items-center gap-4 sm:gap-8  lg:gap-14 2xl:gap-28">
          <Navigation
            section={Nav.Header}
            toggleShowMobileMenu={toggleShowMobileMenu}
            showMobileMenu={showMobileMenu}
          />
          <LanguageSelector />
        </div>
      </div>
      <SubHeader />
    </div>
  );
};

export default Header;
