import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { LanguagesType } from "../ts/types";

const LanguageSelector = () => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", language: "English" },
    { code: "ru", language: "Русский" },
  ];

  const getShorthandLanguageName = (
    languages: LanguagesType[],
    i18Language: string
  ) => {
    const language = languages.filter((lan) => lan.code === i18Language)[0]
      .language;

    return (
      <span> {language.charAt(0).toUpperCase() + language.slice(1, 3)}</span>
    );
  };

  return (
    <div
      onClick={() => setShowLanguageOptions((val) => !val)}
      className="relative flex items-center gap-1 cursor-pointer group text-xl sm:text-2xl bg-slate-100  p-2 w-[100px]"
    >
      {getShorthandLanguageName(languages, i18n.language)}
      <div className="group-hover:text-slate-400">
        {showLanguageOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {showLanguageOptions && (
        <ul className="absolute top-[100%] flex flex-col gap-4 w-full group-hover:text-transparent">
          {languages.map((languageInfo) => (
            <li
              className={`${
                languageInfo.code === i18n.language ? "text-slate-400" : ""
              }`}
              key={languageInfo.code}
              onClick={() => i18n.changeLanguage(languageInfo.code)}
            >
              {languageInfo.language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
