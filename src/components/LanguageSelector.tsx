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

  const showListOfLanguages = (showLanguageOptions: boolean) => {
    return showLanguageOptions ? (
      <ul className="absolute top-[100%] flex flex-col gap-4 w-full">
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
    ) : undefined;
  };

  const showArrowIcon = (showLanguageOptions: boolean) => {
    return (
      <div className="group-hover:text-slate-400">
        {showLanguageOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
    );
  };

  return (
    <div
      onClick={() => setShowLanguageOptions((val) => !val)}
      className="relative  gap-1 cursor-pointer  text-xl sm:text-2xl bg-slate-100  p-2 w-[100px]"
    >
      <div className="flex items-center gap-1 group">
        {getShorthandLanguageName(languages, i18n.language)}
        {showArrowIcon(showLanguageOptions)}
      </div>
      {showListOfLanguages(showLanguageOptions)}
    </div>
  );
};

export default LanguageSelector;
