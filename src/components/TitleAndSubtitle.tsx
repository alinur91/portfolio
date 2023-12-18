import { Sections } from "../ts/enums";

const TitleAndSubtitle = ({ section }: { section: Sections }) => {
  const getTextsData = (section: Sections) => {
    let title;
    let subTitle;
    const titleClass = "text-slate-600 mb-2 ";
    let subtitleClass = "text-3xl md:text-5xl font-bold ";

    switch (section) {
      case Sections.About:
        title = "Get To Know More";
        subTitle = "About Me";
        subtitleClass += "lg:mb-12";
        break;
      case Sections.Experience:
        title = "Explore My";
        subTitle = "Experience";
        subtitleClass += "mb-10";
        break;
      case Sections.Projects:
        title = "Browse My Recent";
        subTitle = "Projects";
        break;
      case Sections.Contact:
        title = "Get in Touch";
        subTitle = "Contact Me";
        subtitleClass += "mb-10";
        break;
      case Sections.SubHeader:
        title = "Hello, I'm";
        subTitle = "Alisher Nurlybayev";
        break;
      default:
        break;
    }

    return { title, subTitle, titleClass, subtitleClass };
  };

  return (
    <>
      <h3 className={getTextsData(section).titleClass}>
        {getTextsData(section).title}
      </h3>
      <h1 className={getTextsData(section).subtitleClass}>
        {getTextsData(section).subTitle}
      </h1>
    </>
  );
};

export default TitleAndSubtitle;
