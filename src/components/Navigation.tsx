import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Nav } from "../ts/enums";

const Navigation = ({
  showMobileMenu,
  toggleShowMobileMenu,
  section,
}: {
  showMobileMenu?: boolean;
  toggleShowMobileMenu?: () => void;
  section: Nav;
}) => {
 
  const shouldShowIcons = (section: Nav) => {
    if (section === Nav.Header) {
      return showMobileMenu ? (
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
      );
    } else {
      return undefined;
    }
  };

  const headerNavClass = {
    navContainer: `${showMobileMenu ? `flex flex-col` : `hidden`}
           gap-2 md:gap-4 bg-slate-100 text-xl sm:text-2xl p-2  absolute right-[15%] top-[90%] xl:static xl:bg-inherit xl:flex   xl:flex-row xl:gap-6 xl:p-0`,
    navElement:
      "xl:border-transparent xl:border-b-2 xl:pb-1 xl:hover:text-gray-500 xl:hover:pb-1 xl:hover:border-b-2 xl:hover:border-b-gray-400 xl:hover:transition ease-in-out duration-300",
    toggleShowMobileMenu,
  };

  const navElementsInfo = [
    {
      anchorText: "About",
      href: "#about",
    },
    {
      anchorText: "Experience",
      href: "#experience",
    },
    {
      anchorText: "Projects",
      href: "#projects",
    },
    {
      anchorText: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="relative">
      {shouldShowIcons(section)}
      <div
        className={
          section === Nav.Header
            ? headerNavClass.navContainer
            : headerNavClass.navContainer
        }
      >
        {navElementsInfo.map((navEl) => (
          <a
            key={navEl.anchorText}
            className={
              section === Nav.Header
                ? headerNavClass.navElement
                : headerNavClass.navElement
            }
            onClick={
              section === Nav.Header
                ? headerNavClass.toggleShowMobileMenu
                : () => {}
            }
            href={navEl.href}
          >
            {navEl.anchorText}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
