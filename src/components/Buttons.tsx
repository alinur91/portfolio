import { Btns } from "../ts/enums";

const Buttons = ({ type }: { type: Btns }) => {
  const getBtnsInfo = (type: Btns) => {
    const btnClass1 =
      "rounded-3xl bg-transparent hover:bg-zinc-800 text-black   hover:text-white py-3 px-6 border border-black hover:border-transparent  text-sm transition ease-in-out duration-300";
    let btnClass2;

    let href1;
    let href2;
    let btn1Text = "Github";
    let btn2Text = "Live Demo";

    switch (type) {
      case Btns.About:
        btnClass2 =
          "rounded-3xl bg-transparent hover:bg-black text-white font-semibold  hover:text-white py-3 px-6 border border-black hover:border-transparent bg-zinc-700 text-sm transition ease-in-out duration-300";
        href1 = "https://hh.kz/resume/8f9572cdff0b8bf0180039ed1f4d734345396d";
        href2 = "#contact";
        btn1Text = "See resume";
        btn2Text = "Contact Info";
        break;

      case Btns.Project1:
        btnClass2 = btnClass1;
        href1 = "https://github.com/alinur91/quiz-app";
        href2 = "https://github.com/alinur91/quiz-app";
        break;

      case Btns.Project2:
        btnClass2 = btnClass1;
        href1 =
          "https://github.com/alinur91/e-commerce-search-and-filtering-only-";
        href2 =
          "https://github.com/alinur91/e-commerce-search-and-filtering-only-";
        break;

      case Btns.Project3:
        btnClass2 = btnClass1;
        href1 = "https://github.com/alinur91/chat-application";
        href2 = "https://github.com/alinur91/chat-application";
        break;
      default:
        break;
    }

    return (
      <>
        <a target="_blank" href={href1}>
          <button className={btnClass1}>{btn1Text}</button>
        </a>
        <a href={href2}>
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
