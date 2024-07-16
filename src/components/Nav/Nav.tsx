import styles from './Nav.module.css'
import montserrat from '../../styles/fonts';
import { useLocalesProvider } from '@/localization/localization.provider';

const Nav: React.FC = () => {
  const { i18n } = useLocalesProvider();
    return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#home">{i18n._("Home")}</a>
          </li>
          <li className={styles.navItem}>
            <a href="#hard-skills">{i18n._("Hard Skills")}</a>
          </li>
          <li className={styles.navItem}>
            <a href="#technical-skills">{i18n._("Technical Skills")}</a>
          </li>
          <li className={styles.navItem}>
            <a href="#soft-skills">{i18n._("Soft Skills")}</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contacts">{i18n._("Contacts")}</a>
          </li>
        </ul>
      </nav>
    );
};
export default Nav;
