import { Btns, Sections } from "../ts/enums";
import TitleAndSubtitle from "./TitleAndSubtitle";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import Buttons from "./Buttons";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Projects = () => {
  return (
    <div className="mt-16 lg:mt-80 text-center relative">
      <a href="#projects">
        <MdOutlineKeyboardDoubleArrowDown className="hidden xl:block xl:absolute xl:right-[-5%] xl:top-[-25%] lg:text-5xl cursor-pointer" />
      </a>
      <TitleAndSubtitle section={Sections.Projects} />
      <div id="projects" className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 mt-10">
        <div className="col-span-1 sm:col-span-2 md:col-span-1 xl:col-span-1 border-2 border-neutral-400 rounded-3xl px-6 py-5 sm:px-12 sm:py-6 md:px-3 md:py-5 lg:px-9  flex flex-col gap-4 justify-center items-center">
          <img
            className="h-36 w-48  sm:w-full sm:h-full   border-2 border-transparent rounded-lg"
            src={project1}
            alt=""
          />
          <h1 className="font-bold text-lg sm:text-2xl sm:tracking-wider">
            Project One
          </h1>
          <Buttons type={Btns.Project1} />
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-1 xl:col-span-1 border-2 border-neutral-400 rounded-3xl px-6 py-5 sm:px-12 sm:py-6 md:px-3 md:py-5 lg:px-9  flex flex-col gap-4 justify-center items-center">
          <img
            className="h-36 w-48  sm:w-full sm:h-full   border-2 border-transparent rounded-lg"
            src={project2}
            alt=""
          />
          <h1 className="font-bold text-lg sm:text-2xl sm:tracking-wider">
            Project Two
          </h1>
          <Buttons type={Btns.Project2} />
        </div>
        <div className="col-span-2 sm:col-span-2 md:col-span-2 xl:col-span-1 border-2 border-neutral-400 rounded-3xl px-6 py-5 sm:px-12 sm:py-6 md:px-3 md:py-5 lg:px-9  flex flex-col gap-4 justify-center items-center">
          <img
            className="border-2 border-transparent rounded-lg sm:w-full sm:h-full "
            src={project3}
            alt=""
          />
          <h1 className="font-bold text-lg sm:text-2xl sm:tracking-wider">
            Project Three
          </h1>
          <Buttons type={Btns.Project3} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
