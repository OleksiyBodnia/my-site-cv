import React, { FunctionComponent } from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

//providers
import { useLocalesProvider } from "@/localization/localization.provider";

// styles
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.desk}>
        <div className={styles.divF}>
          <h2 className={styles.h}>{i18n._("Vadym Bezsmertnyi")}</h2>
          <p className={styles.p}>React Native and full-stack Developer</p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="" className={styles.link}>
                {i18n._("Design by @meellovve")}
              </a>
            </li>
            <li className={styles.item}>
              <a href="" className={styles.link}>
                {i18n._("Privacy Policy")}
              </a>
            </li>
            <li className={styles.item}>
              <a href="" className={styles.link}>
                {i18n._("Terms of Use")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.socialList}>
            <li className={styles.socialItem}>
              <a
                href="https://www.facebook.com/profile.php?id=100001488713274"
                target="_blank"
                rel="noopener noreferrer"
              >
                {<FaFacebook className={styles.socialLink} />}
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="https://telegram.me/VadymBezsmertnyi"
                target="_blank"
                rel="noopener noreferrer"
              >
                {<BsTelegram className={styles.socialLink} />}
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="https://www.linkedin.com/in/vadym-bezsmertnyi-7666431a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {<FaLinkedin className={styles.socialLink} />}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <a href="#home" className={styles.navLink}>
                {i18n._("Home")}
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#hard-skills" className={styles.navLink}>
                {i18n._("Hard Skills")}
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#technical-skills" className={styles.navLink}>
                {i18n._("Technical Skills")}
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#soft-skills" className={styles.navLink}>
                {i18n._("Soft Skills")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.mob}>
        <div className={styles.mobFDiv}>
          <h2 className={styles.mobH}>{i18n._("Vadym")}</h2>
          <p className={styles.mobP}>{i18n._("Bezsmertnyi")}</p>
        </div>
        <div className={styles.mobSDiv}>
          <ul className={styles.navMob}>
            <li className={styles.navItemMob}>
              <a href="#home" className={styles.navLinkMob}>
                {i18n._("Home")}
              </a>
            </li>
            <li className={styles.navItemMob}>
              <a href="#hard-skills" className={styles.navLinkMob}>
                {i18n._("Hard Skills")}
              </a>
            </li>
            <li className={styles.navItemMob}>
              <a href="#technical-skills" className={styles.navLinkMob}>
                {i18n._("Technical Skills")}
              </a>
            </li>
            <li className={styles.navItemMob}>
              <a href="#soft-skills" className={styles.navLinkMob}>
                {i18n._("Soft Skills")}
              </a>
            </li>
          </ul>
          <ul className={styles.socialListMob}>
            <li className={styles.socialItemMob}>
              <a href="" target="_blank" rel="noopener noreferrer">
                {<FaFacebook className={styles.socialLinkMob} />}
              </a>
            </li>
            <li className={styles.socialItemMob}>
              <a href="" target="_blank" rel="noopener noreferrer">
                {<BsTelegram className={styles.socialLinkMob} />}
              </a>
            </li>
            <li className={styles.socialItemMob}>
              <a href="" target="_blank" rel="noopener noreferrer">
                {<FaLinkedin className={styles.socialLinkMob} />}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.mobTDiv}>
          <p className={styles.pMobT}>full-stack</p>
          <p className={styles.pMobTS}>{i18n._("Developer")}</p>
        </div>

        <div className={styles.botLinkMob}>
          <ul className={styles.listMob}>
            <li className={styles.itemMob}>
              <a href="" className={styles.linkMob}>
                {i18n._("Privacy Policy")}
              </a>
            </li>
            <li className={styles.itemMob}>
              <a href="" className={styles.linkMob}>
                {i18n._("Terms of Use")}
              </a>
            </li>
            <li className={styles.itemMob}>
              <a href="" className={styles.linkMob}>
                {i18n._("Design by @meellovve")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
