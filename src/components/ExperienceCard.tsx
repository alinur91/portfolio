import { HiMiniCheckBadge } from "react-icons/hi2";

import { TechnologyType } from "../ts/types";

const ExperienceCard = ({ data }: { data: TechnologyType[] }) => {
  return (
    <div className="flex flex-col gap-8  items-center py-8  border-2 border-neutral-400 rounded-[36px] sm:w-[50%] w-full ">
      <h1 className="text-gray-600 text-center font-bold text-xl sm:text-3xl">
        Frontend Development
      </h1>
      <div className="grid gap-7 sm:gap-8  md:gap-12 lg:gap-10  sm:p-2  grid-cols-2    sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {data.map((technology) => (
          <div key={technology.name} className="flex items-start gap-4">
            <HiMiniCheckBadge fontSize="32px" />
            <div>
              <h3 className="font-bold">{technology.name}</h3>
              <p className="text-gray-500">{technology.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
