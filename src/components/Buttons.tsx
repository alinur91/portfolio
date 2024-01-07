import { useTranslation } from "react-i18next";
import { Btns } from "../ts/enums";

const Buttons = ({ type }: { type: Btns }) => {
  const { t } = useTranslation("buttons");

  const getBtnsInfo = (type: Btns) => {
    let btnClass1 =
      "rounded-3xl bg-transparent hover:bg-zinc-800 text-black   hover:text-white py-3  border border-black hover:border-transparent  text-sm transition ease-in-out duration-300 w-[140px]";
    let btnClass2;

    let href1;
    let href2;
    let target = "_blank";
    let btn1Text = "Github";
    let btn2Text = t("btn_live");

    switch (type) {
      case Btns.About:
        btnClass2 =
          "rounded-3xl bg-transparent hover:bg-black text-white font-semibold  hover:text-white py-3  border border-black hover:border-transparent bg-zinc-700 text-sm transition ease-in-out duration-300 w-[140px]";
        href1 = "https://hh.kz/resume/8f9572cdff0b8bf0180039ed1f4d734345396d";
        href2 = "#contact";
        target = "_self";
        btn1Text = t("btn_resume");
        btn2Text = t("btn_contact");
        break;

      case Btns.Project1:
        btnClass1 = btnClass1.replace("w-[140px]", "w-28");
        btnClass2 = btnClass1;
        href1 = "https://github.com/alinur91/quiz-app";
        href2 = "https://brilliant-zabaione-e8f99f.netlify.app/";
        break;

      case Btns.Project2:
        btnClass1 = btnClass1.replace("w-[140px]", "w-28");
        btnClass2 = btnClass1;
        href1 =
          "https://github.com/alinur91/e-commerce-search-and-filtering-only-";
        href2 = "https://elegant-macaron-4fb242.netlify.app/";
        break;

      case Btns.Project3:
        btnClass1 = btnClass1.replace("w-[140px]", "w-28");
        btnClass2 = btnClass1;
        href1 = "https://github.com/alinur91/chat-application";
        href2 = "https://github.com/alinur91/chat-application";
        break;
      default:
        break;
    }

    return (
      <>
        <a target={target} href={href1}>
          <button className={btnClass1}>{btn1Text}</button>
        </a>
        <a target={target} href={href2}>
          <button className={btnClass2}>{btn2Text}</button>
        </a>
      </>
    );
  };

  const classBtns =
    (type === Btns.Project1 || type === Btns.Project2) &&
    "flex-col sm:flex-row";

  return (
    <div
      className={`flex ${classBtns} gap-4 ${
        type === Btns.About && "flex-row mb-2"
      }`}
    >
      {getBtnsInfo(type)}
    </div>
  );
};

export default Buttons;
