import me2 from "../images/me2.jpeg";
import { PiMedalFill } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import TitleAndSubtitle from "./TitleAndSubtitle";
import { Sections } from "../ts/enums";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation("about");

  return (
    <div id="about" className="flex flex-col items-center mt-72">
      <TitleAndSubtitle section={Sections.About} />
      <div className="flex flex-col gap-10 lg:flex-row items-center justify-center  mt-4 lg:mt-12 xl:mt-20">
        <img
          className="rounded-3xl h-60 md:h-[280px] lg:h-[350px] "
          src={me2}
          alt=""
        />
        <div className="flex  flex-col  items-center ">
          <div className="flex gap-10 mb-10 lg:mb-6 w-full">
            <div className="flex flex-col gap-2 items-center justify-center border-2 border-neutral-400 rounded-[36px]  text-center py-6 lg:p-2 xl:py-8 w-full">
              <PiMedalFill fontSize="32px" />
              <h3 className="font-bold text-lg">{t("experience")}</h3>
              <p className="text-gray-600">{t("year")}</p>
              <p className="text-gray-600">{t("title")}</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center border-2 border-neutral-400 rounded-[36px]  text-center py-6 lg:p-2 xl:py-8 w-full">
              <SlPeople fontSize="32px" />
              <h3 className="font-bold text-lg">{t("education")}</h3>
              <p className="text-gray-600">{t("degree")}</p>
            </div>
          </div>
          <p className="text-gray-600">{t("description")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
