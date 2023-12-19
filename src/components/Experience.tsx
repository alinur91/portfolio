import { technologies } from "../data/data";
import ExperienceCard from "./ExperienceCard";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import TitleAndSubtitle from "./TitleAndSubtitle";
import { Sections } from "../ts/enums";

const Experience = () => {
  return (
    <div className="flex flex-col items-center  w-full relative mt-16 lg:mt-72">
      <a href="#experience">
        <MdOutlineKeyboardDoubleArrowDown className="hidden lg:block lg:absolute lg:right-[-7%] lg:top-[-25%] lg:text-5xl cursor-pointer" />
      </a>
      <TitleAndSubtitle section={Sections.Experience} />
      <div
        id="experience"
        className="flex flex-col sm:flex-row gap-8 md:gap-10 justify-center items-center w-full"
      >
        <ExperienceCard data={technologies.slice(0, 5)} />
        <ExperienceCard data={technologies.slice(5)} />
      </div>
    </div>
  );
};

export default Experience;
