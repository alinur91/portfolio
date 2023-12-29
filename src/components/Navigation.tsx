import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Nav } from "../ts/enums";
import { useTranslation } from "react-i18next";

const Navigation = ({
  showMobileMenu,
  toggleShowMobileMenu,
  section,
}: {
  showMobileMenu?: boolean;
  toggleShowMobileMenu?: () => void;
  section: Nav;
}) => {
  const {t} = useTranslation('header')
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
    navContainer: `${showMobileMenu ? `flex flex-col items-center` : `hidden`}
           gap-4  bg-slate-100 text-xl sm:text-2xl p-2  absolute right-[15%] top-[90%] xl:static xl:bg-inherit xl:flex   xl:flex-row xl:items-center xl:gap-8 xl:p-0`,
    navElement:
      "xl:border-transparent xl:border-b-2 xl:py-3 xl:hover:text-gray-500 xl:hover:py-3 xl:hover:border-b-2 xl:hover:border-b-gray-400 xl:hover:transition ease-in-out duration-300",
    toggleShowMobileMenu,
  };

  const footerNavClass = {
    navContainer: `flex flex-col items-center sm:flex-row gap-1 sm:gap-8 lg:gap-9  bg-slate-100  sm:text-2xl p-2`,
    navElement:
      "w-fit border-transparent border-b-2 py-2 sm:py-3 hover:text-gray-500 hover:py-2 sm:hover:py-3 hover:border-b-2 hover:border-b-gray-400 hover:transition ease-in-out duration-300",
  };

  const navElementsInfo = [
    {
      anchorText: t("about"),
      href: "#about",
    },
    {
      anchorText: t("experience"),
      href: "#experience",
    },
    {
      anchorText: t("projects"),
      href: "#projects",
    },
    {
      anchorText: t("contact"),
      href: "#contact",
    },
  ];

  return (
    <div
      className={`${
        section === Nav.Header && "relative flex  text-xl sm:text-2xl"
      } ${section === Nav.Footer && "mt-24 sm:mt-16 xl:mt-44"}`}
    >
      {shouldShowIcons(section)}
      <div
        className={
          section === Nav.Header
            ? headerNavClass.navContainer
            : footerNavClass.navContainer
        }
      >
        {navElementsInfo.map((navEl) => (
          <a
            key={navEl.anchorText}
            className={
              section === Nav.Header
                ? headerNavClass.navElement
                : footerNavClass.navElement
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
