import { TechnologyType } from "../ts/types";
// import todo from "../images/todo.png";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import { Btns } from "../ts/enums";

export const technologies: TechnologyType[] = [
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Experienced" },
  { name: "SASS", level: "Intermediate" },
  { name: "JavaScript", level: "Experienced" },
  { name: "React", level: "Experienced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Material UI", level: "Basic" },
  { name: "Tailwind Css", level: "Intermediate" },
  { name: "Node JS", level: "Basic" },
  { name: "Git", level: "Basic" },
];

const projectsCardInfo = {
  cardClass:
    "col-span-1 sm:col-span-2 md:col-span-1 xl:col-span-1 border-2 border-neutral-400 rounded-3xl px-6 py-5 sm:px-12 sm:py-6 md:px-2 md:py-5 lg:px-9  flex flex-col gap-4 justify-center items-center",
  imgClass:
    "h-36 w-48  sm:w-full sm:h-full   border-2 border-transparent rounded-lg",
  titleClass: "font-bold text-lg sm:text-2xl sm:tracking-wider",
};

export const cardsData = [
  {
    cardClass: projectsCardInfo.cardClass,
    imgClass: projectsCardInfo.imgClass,
    titleClass: projectsCardInfo.titleClass,
    imgSrc: project1,
    titleText: "quiz",
    btnType: Btns.Project1,
  },
  {
    cardClass: projectsCardInfo.cardClass,
    imgClass: projectsCardInfo.imgClass,
    titleClass: projectsCardInfo.titleClass,
    imgSrc: project2,
    titleText: "ecommerce",
    btnType: Btns.Project2,
  },
  {
    cardClass:
      "col-span-2 sm:col-span-2 md:col-span-2 xl:col-span-1 border-2 border-neutral-400 rounded-3xl px-6 py-5 sm:px-12 sm:py-6 md:px-8 md:py-5 lg:px-9  flex flex-col gap-4 justify-center items-center",
    imgClass: "border-2 border-transparent rounded-lg sm:w-full sm:h-full",
    titleClass: projectsCardInfo.titleClass,
    imgSrc: project3,
    titleText: "chat",
    btnType: Btns.Project3,
  },
];
