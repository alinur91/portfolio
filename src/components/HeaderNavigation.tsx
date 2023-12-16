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
    <div className="flex justify-between  items-center p-14 ">
      <h1 className=" text-xl sm:text-3xl">Alisher Nurlybayev</h1>
      <div className="relative">
        {showMobileMenu ? (
          <IoMdClose
            onClick={toggleShowMobileMenu}
            cursor="pointer"
            className="text-3xl md:text-4xl xl:hidden"
          />
        ) : (
          <RxHamburgerMenu
            onClick={toggleShowMobileMenu}
            className="text-3xl md:text-4xl xl:hidden"
            cursor="pointer"
          />
        )}
        <div
          className={`${showMobileMenu ? `flex flex-col` : `hidden`}
           gap-2 md:gap-4 bg-slate-100 text-xl sm:text-2xl p-2  absolute right-[15%] top-[90%] xl:static xl:bg-inherit xl:flex   xl:flex-row xl:gap-6 xl:p-0`}
        >
          <a
            className="xl:border-transparent xl:border-b-2 xl:pb-1 xl:hover:text-gray-500 xl:hover:pb-1 xl:hover:border-b-2 xl:hover:border-b-gray-400 xl:hover:transition ease-in-out duration-300"
            onClick={toggleShowMobileMenu}
            href="#about"
          >
            About
          </a>
          <a
            className="xl:border-transparent xl:border-b-2 xl:hover:text-gray-500 xl:hover:pb-1 xl:hover:border-b-2 xl:hover:border-b-gray-400 xl:hover:transition ease-in-out duration-300"
            onClick={toggleShowMobileMenu}
            href="#experience"
          >
            Experience
          </a>
          <a
            className="xl:border-transparent xl:border-b-2 xl:hover:text-gray-500 xl:hover:pb-1 xl:hover:border-b-2 xl:hover:border-b-gray-400 xl:hover:transition ease-in-out duration-300"
            onClick={toggleShowMobileMenu}
            href="#projects"
          >
            Projects
          </a>
          <a
            className="xl:border-transparent xl:border-b-2 xl:hover:text-gray-500 xl:hover:pb-1 xl:hover:border-b-2 xl:hover:border-b-gray-400 xl:hover:transition ease-in-out duration-300"
            onClick={toggleShowMobileMenu}
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
