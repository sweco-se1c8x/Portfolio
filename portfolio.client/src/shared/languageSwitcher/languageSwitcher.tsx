import React, { useState, useRef, useEffect } from "react";
import i18n from "i18next";
import { LanguageSwitcherProps } from "../../interface/header";
import Button from "../Button/Button";

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ languages }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsDropdownOpen(false);
  };

  const currentLanguage = i18n.language;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="inline-flex w-20 items-center border bg-primary focus:outline-none text-primary-foreground py-2 px-4 rounded-md shadow-sm"
      >
        {languages.find(lang => lang.code === currentLanguage)?.name}
      </Button>
      {isDropdownOpen && (
        <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md dark:bg-gray-700 dark:divide-gray-600 shadow-lg">
          <ul className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button 
                  className={`flex items-center w-full px-4 py-2 text-sm text-left truncate dark:text-gray-400 active:bg-primary hover:bg-primary ${
                    currentLanguage === lang.code
                      ? "bg-primary"
                      : "text-gray-500"
                  }`}
                  role="menuitem"
                  tabIndex={-1}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  <img src={lang.icon} className="pr-1"/> {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
