import { Nav } from "../ts/enums";
import Navigation from "./Navigation";
import SubHeader from "./SubHeader";
import { useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleShowMobileMenu = () => {
    setShowMobileMenu((value) => !value);
  };

  return (
    <div className="flex flex-col gap-20 lg:gap-40">
      <div className="flex justify-between  items-center p-14 ">
        <h1 className=" text-xl sm:text-3xl xl:border-transparent xl:border-b-2 xl:pb-1">
          Alisher Nurlybayev
        </h1>
        <Navigation
          section={Nav.Header}
          toggleShowMobileMenu={toggleShowMobileMenu}
          showMobileMenu={showMobileMenu}
        />
      </div>

      <SubHeader />
    </div>
  );
};

export default Header;
