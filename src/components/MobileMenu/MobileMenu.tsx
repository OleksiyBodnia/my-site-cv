import React, { FunctionComponent } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

//providers
import { useLocalesProvider } from "@/localization/localization.provider";

// styles
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};
const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  const { i18n } = useLocalesProvider();
  return (
    <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ""}`}>
      <IoClose onClick={toggleMenu} className={styles.closeBtn} />
      <h2 className={styles.name}>{i18n._("Vadym bezsmertnyi")}</h2>
      <p className={styles.position}>full-stack developer</p>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#home" onClick={toggleMenu} className={styles.navLink}>
            {i18n._("Home")}
          </a>{" "}
        </li>
        <li className={styles.navItem}>
          <a
            href="#hard-skills"
            onClick={toggleMenu}
            className={styles.navLink}
          >
            {" "}
            {i18n._("Hard Skills")}
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#technical-skills"
            onClick={toggleMenu}
            className={styles.navLink}
          >
            {i18n._("Technical Skills")}
          </a>{" "}
        </li>
        <li className={styles.navItem}>
          <a
            href="#soft-skills"
            onClick={toggleMenu}
            className={styles.navLink}
          >
            {i18n._("Soft Skills")}
          </a>{" "}
        </li>
        <li className={styles.navItem}>
          <a href="#contacts" onClick={toggleMenu} className={styles.navLink}>
            {i18n._("Contacts")}
          </a>{" "}
        </li>
      </ul>
      <div className={styles.socialList}>
        <a
          href="https://www.facebook.com/profile.php?id=100001488713274"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className={styles.fb} />
        </a>
        <a
          href="https://telegram.me/VadymBezsmertnyi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTelegram className={styles.tg} />
        </a>
        <a
          href="https://www.linkedin.com/in/vadym-bezsmertnyi-7666431a2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.ig} />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
