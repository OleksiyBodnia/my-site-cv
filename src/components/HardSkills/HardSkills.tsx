import styles from './HardSkills.module.css';
import montserrat from '../../styles/fonts';
import desktop from '../../images/hard-skills/desktop.png';
import desktop2x from '../../images/hard-skills/desktop@2x.png';
import tablet from '../../images/hard-skills/tablet.png';
import tablet2x from '../../images/hard-skills/tablet@2x.png';
import proces from '../../images/hard-skills/proces.png';
import process2x from '../../images/hard-skills/proces@2x.png';
import { useLocalesProvider } from '@/localization/localization.provider';


const HardSkills: React.FC = () => {
  const { i18n } = useLocalesProvider();
  return (
    <section id="hard-skills" className={styles.hardScills}>
      <h2 className={styles.h}>{i18n._("HARD SKILLS")}</h2>
      <p className={styles.p}>
        {i18n._("React Native and Front End Developer websites, Mobile Apps and Business Logic")}
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
        <img
            src={desktop.src}
            srcSet={`${desktop.src} 1x, ${desktop2x.src} 2x`}
            alt="desktop"
            className={styles.itemImg}
          />
          <h3 className={styles.itemH}>{i18n._("websites")}</h3>
          <p className={styles.itemP}>
            {i18n._("I create modern websites with elegant design and high performance. My professional approach to website development ensures an excellent user experience.")}
          </p>
        </li>
        <li className={styles.item}>
        <img
            src={tablet.src}
            srcSet={`${tablet.src} 1x, ${tablet2x.src} 2x`}
            alt="tablet"
            className={styles.itemImg}
          />
          <h3 className={styles.itemH}>{i18n._("mobile apps")}</h3>
          <p className={styles.itemP}>
            {i18n._("I develop mobile apps for iOS and Android with a user-friendly interface and high speed.My apps combine modernd design with functionality to meet users' needs.")}
          </p>
        </li>
        <li className={styles.item}>
        <img
            src={proces.src}
            srcSet={`${proces.src} 1x, ${process2x.src} 2x`}
            alt="proccess"
            className={styles.itemImg}
          />
          <h3 className={styles.itemH}>back-end</h3>
          <p className={styles.itemP}>
            {i18n._("I have experience in backend development using various services. I ensure the reliability, scalability, and security of your applications through the efficient use of databases and APIs.")}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default HardSkills;