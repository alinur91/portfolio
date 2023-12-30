import { useTranslation } from "react-i18next";
import { Sections } from "../ts/enums";

const TitleAndSubtitle = ({ section }: { section: Sections }) => {
  const { t } = useTranslation("titleAndSubtitle");

  const getTextsData = (section: Sections) => {
    let title;
    let subTitle;
    const titleClass = "text-slate-600 mb-2 ";
    let subtitleClass = "text-3xl md:text-5xl font-bold ";

    switch (section) {
      case Sections.About:
        title = t("title_know-more");
        subTitle = t("subtitle_about-me");
        subtitleClass += "lg:mb-12";
        break;
      case Sections.Experience:
        title = t("title_explore");
        subTitle = t("subtitle_experience");
        subtitleClass += "mb-10";
        break;
      case Sections.Projects:
        title = t("title_browse");
        subTitle = t("subtitle_projects");
        break;
      case Sections.Contact:
        title = t("title_touch");
        subTitle = t("subtitle_contact");
        subtitleClass += "mb-10";
        break;
      case Sections.SubHeader:
        title = t("title_greetings");
        subTitle = t("subtitle_name");
        break;
      default:
        break;
    }

    return (
      <>
        <h3 className={titleClass}>{title}</h3>
        <h1 className={subtitleClass}>{subTitle}</h1>
      </>
    );
  };

  return <>{getTextsData(section)}</>;
};

export default TitleAndSubtitle;
