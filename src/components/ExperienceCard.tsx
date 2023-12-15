import { HiMiniCheckBadge } from "react-icons/hi2";

import { TechnologyType } from "../types/types";

const ExperienceCard = ({ data }: { data: TechnologyType[] }) => {
  return (
    <div className="flex flex-col gap-8  items-center py-8 px-10 md:px-[30px]  sm:px-10 xl:px-3 2xl:px-12 border-2 border-neutral-400 rounded-[36px] sm:w-[50%]">
      <h1 className="text-gray-600 text-center font-bold text-xl sm:text-3xl">
        Frontend Development
      </h1>
      <div className="grid gap-7 sm:gap-8  md:gap-12 lg:gap-10  sm:p-2  grid-cols-2    sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((technology) => (
          <div className="flex items-start gap-4">
            <HiMiniCheckBadge fontSize="32px" />
            <div>
              <h3 className="font-bold">{technology.name}</h3>
              <p className="text-gray-500">{technology.mastery}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
