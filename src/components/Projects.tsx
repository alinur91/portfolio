import { Sections } from "../ts/enums";
import TitleAndSubtitle from "./TitleAndSubtitle";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="mt-16 lg:mt-80 text-center relative">
      <a href="#projects">
        <MdOutlineKeyboardDoubleArrowDown className="hidden xl:block xl:absolute xl:right-[-7%] xl:top-[-25%] lg:text-5xl cursor-pointer" />
      </a>
      <TitleAndSubtitle section={Sections.Projects} />
      <ProjectsCard/>
    </div>
  );
};

export default Projects;
