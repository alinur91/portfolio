import me from "../images/me.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import TitleAndSubtitle from "./TitleAndSubtitle";
import { Sections } from "../ts/enums";

const SubHeader = () => {
  return (
    <div className="flex flex-col justify-center xl:flex-row items-center gap-12 lg:gap-20">
      <div className="flex items-center justify-center">
        <img className="h-72 lg:h-[400px] rounded-full" src={me} alt="ali" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <TitleAndSubtitle section={Sections.SubHeader} />
        <h2 className="text-xl md:text-3xl font-bold text-gray-600 my-2 sm:my-3">Frontend Developer</h2>
        <div className="flex gap-4 mb-2">
          <a
            target="_blank"
            href="https://hh.kz/resume/8f9572cdff0b8bf0180039ed1f4d734345396d"
          >
            <button className="rounded-3xl bg-transparent hover:bg-zinc-800 text-black  hover:text-white py-2 px-4 border border-black hover:border-transparent  text-sm transition ease-in-out duration-300">
              See resume
            </button>
          </a>
          <a href="contact">
            <button className="rounded-3xl bg-transparent hover:bg-black text-white  hover:text-white py-2 px-4 border border-black hover:border-transparent bg-zinc-700 text-sm transition ease-in-out duration-300">
              Contact Info
            </button>
          </a>
        </div>
        <div className="flex gap-4 text-3xl">
          <a
            target="_blank"
            href="https://hh.kz/resume/8f9572cdff0b8bf0180039ed1f4d734345396d"
          >
            <FaLinkedin />
          </a>
          <a target="_blank" href="https://github.com/alinur91">
            <FaSquareGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
