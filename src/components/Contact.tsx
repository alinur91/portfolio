import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Nav, Sections } from "../ts/enums";
import ContactInfo from "./ContactInfo";
import Navigation from "./Navigation";
import TitleAndSubtitle from "./TitleAndSubtitle"
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation('footer')
  return (
    <div
      id="contact"
      className="relative flex flex-col justify-center items-center mt-32 2xl:mt-96"
    >
      <a href="#contact">
        <MdOutlineKeyboardDoubleArrowDown className="hidden lg:block lg:absolute lg:right-[-7%] lg:top-[-42%]  xl:top-[-30%] 2xl:top-[-70%] lg:text-5xl cursor-pointer" />
      </a>
      <TitleAndSubtitle section={Sections.Contact} />
      <ContactInfo />
      <Navigation section={Nav.Footer} />
      <p className="mt-4 mb-32 sm:mt-10 sm:mb-14  text-slate-500">
        {t("copyright")}
      </p>
    </div>
  );
}

export default Contact