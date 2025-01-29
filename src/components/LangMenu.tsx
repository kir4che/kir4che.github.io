import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LANGUAGES } from "@/constants";

import ArrowDownIcon from 'assets/icons/arrow-down.svg?react';

interface Language {
  code: string;
  label: string;
}

const LangMenu: React.FC = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      navigate(`/${lng}`);

      // 自動關閉選單
      const elem = document.activeElement;
      if (elem) (elem as HTMLElement)?.blur();
    });
  };

  return (
    <div className="text-sm dropdown dropdown-hover dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className='flex items-center gap-1'>
        <span>{t(`nav.language.${i18n.language}`)}</span>
        <ArrowDownIcon className="w-4 h-4" />
      </div>
      <ul tabIndex={0} className="z-10 w-32 p-2 bg-white rounded-md shadow dropdown-content">
        {LANGUAGES.map(({ code }: Language) => (
          <li key={code}>
            <button type='button' onClick={() => changeLanguage(code)}   className='rounded-sm px-2.5 py-2 w-full text-left hover:bg-pink-100 active:bg-pink-200'>
              {t(`nav.language.${code}`)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangMenu;
