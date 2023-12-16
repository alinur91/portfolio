import { Sections } from "../ts/enums";
import TitleAndSubtitle from "./TitleAndSubtitle";

const Projects = () => {
  return <div className="mt-16 lg:mt-80 text-center">
   <TitleAndSubtitle section={Sections.Projects} />
  </div>;
}

export default Projects