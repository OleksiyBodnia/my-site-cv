import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

// providers
import { localesContext } from '@/localization/localization.provider';

// constants
import { languages } from '@/localization/localization.const';

// styles
import styles from './Header.module.css';
import Image from 'next/image';
import SocialList from '../SocialList/SocialList';
import Nav from '../Nav/Nav';
import { TiThMenu } from 'react-icons/ti';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

type HeaderProps = {
  toggleMenu: () => void;
};

export const Header: FunctionComponent<HeaderProps> = ({ toggleMenu }) => {
  const { i18n, language, setLanguage } = useContext(localesContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [opositeLanguage, setOpositeLanguage] = useState('');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const titleLanguage = useMemo(
    () =>
      languages.find(languageItem => languageItem.key === language)?.title ||
      languages[0].title,
    [language]
  );

  const onToggleLanguage = async () => {
    if (language === 'en') await setLanguage('uk');
    else await setLanguage('en');
  };

  useMemo(() => {
    const oppositeLanguageKey = language === 'en' ? 'uk' : 'en';
    setOpositeLanguage(
      languages.find(languageItem => languageItem.key === oppositeLanguageKey)
        ?.title || languages[0].title
    );
  }, [language]);

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  return (
    <header className={styles.header}>
      <TiThMenu className={styles.menu} onClick={toggleMenu} />
      <div className={styles.socialList}>
        <SocialList />
      </div>
      <div className={styles.nav}>
        <Nav />
      </div>

      <div className={styles.container}>
        <div className={styles.languageButton}>
          <p className={styles.titleLanguageButton} onClick={toggleLangMenu}>
            {titleLanguage}
          </p>
          {isLangMenuOpen ? <IoMdArrowDropup className={styles.arrow}/>: <IoMdArrowDropdown className={styles.arrow}/>}
        </div>
        {isLangMenuOpen && (
          <div onClick={toggleLangMenu} className={styles.openedMenu}>
            <p
              className={styles.titleLanguageButton}
              onClick={onToggleLanguage}
            >
              {opositeLanguage}
            </p>
          </div>
        )}
        
      </div>
      
    </header>
  );
};
