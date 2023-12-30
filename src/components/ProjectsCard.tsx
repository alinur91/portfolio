import { useTranslation } from "react-i18next";
import { cardsData } from "../data/data";
import Buttons from "./Buttons";

const ProjectsCard = () => {
  const { t } = useTranslation("projects");

  return (
    <div
      id="projects"
      className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-10 mt-10"
    >
      {cardsData.map((card) => (
        <div key={card.titleText} className={card.cardClass}>
          <img
            className={card.imgClass}
            src={card.imgSrc}
            alt={card.titleText}
          />
          <h1 className={card.titleClass}>{t(`app_${card.titleText}`)}</h1>
          <Buttons type={card.btnType} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsCard;
