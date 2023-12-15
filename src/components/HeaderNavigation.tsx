import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const HeaderNavigation = ({
  showMobileMenu,
  toggleShowMobileMenu,
}: {
  showMobileMenu: boolean;
  toggleShowMobileMenu: () => void;
}) => {
  return (
    <div className="flex justify-between  items-center py-8 px-20 md:py-12 md:px-44  lg:py-16 lg:px-40">
      <h1 className="text-base 	md:text-2xl">Alisher Nurlybayev</h1>
      <div className="relative">
        {showMobileMenu ? (
          <IoMdClose
            onClick={toggleShowMobileMenu}
            cursor="pointer"
            className="text-3xl md:text-4xl lg:hidden"
          />
        ) : (
          <RxHamburgerMenu
            onClick={toggleShowMobileMenu}
            className="text-3xl md:text-4xl lg:hidden"
            cursor="pointer"
          />
        )}
        <div
          className={`${showMobileMenu ? `flex flex-col` : `hidden`}
           gap-2 md:gap-4 bg-slate-200 md:text-xl p-2 absolute right-[15%] top-[90%] lg:static lg:bg-inherit lg:flex  lg:flex-row lg:gap-6 lg:p-0`}
        >
          <a onClick={toggleShowMobileMenu} href="#about">
            About
          </a>
          <a onClick={toggleShowMobileMenu} href="#experience">
            Experience
          </a>
          <a onClick={toggleShowMobileMenu} href="#projects">
            Projects
          </a>
          <a onClick={toggleShowMobileMenu} href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
