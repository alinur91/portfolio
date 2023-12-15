import { technologies } from "../data/data";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <h3 >Explore My</h3>
      <h1 className="tracking-wider text-3xl md:text-5xl font-bold mt-2 sm:mt-3 mb-8 sm:mb-12">
        Experience
      </h1>
      <div className="flex flex-col sm:flex-row gap-8 md:gap-10 justify-center items-center mx-8 lg:mx-30">
        <ExperienceCard data={technologies.slice(0, 5)} />
        <ExperienceCard data={technologies.slice(5)} />
      </div>
    </div>
  );
};

export default Experience;
