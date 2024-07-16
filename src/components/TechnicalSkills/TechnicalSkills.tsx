import styles from './TechnicalSkills.module.css';
import montserrat from '../../styles/fonts';
import { TbCodeCircle2 } from 'react-icons/tb';
import { MdLibraryBooks } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { FiGrid } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { useLocalesProvider } from '@/localization/localization.provider';

const TechnicalSkills: React.FC = () => {
  const { i18n } = useLocalesProvider();
  return (
    <section id="technical-skills" className={styles.technicalSkills}>
      <h2 className={styles.h}>{i18n._('technical skills')}</h2>
      <p className={styles.p}>{i18n._("More than 10 technical programming skills")}</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <TbCodeCircle2 className={styles.icon} />
          <p className={styles.itemP}>
            {i18n._("Languages and Technologies: HTML5, XML, JavaScript (ES6+), Typescript, Web Sockets.")}
          </p>
        </li>
        <li className={styles.item}>
          <MdLibraryBooks className={styles.icon} />
          <p className={styles.itemP}>
            {i18n._('Frameworks and Libraries: ReactJS (including Hooks, Router, and Lifecycle).')}
          </p>
        </li>
        <li className={styles.item}>
          <FaReact className={styles.icon} />
          <p className={styles.itemP}>
           {i18n._(' Form and Server Interaction: React Tools (Formik, Axios, and others).')}
          </p>
        </li>
        <li className={styles.item}>
          <FaGithub className={styles.icon} />
          <p className={styles.itemP}>
            {i18n._("Development Tools: Git, GitHub, GitLab, Bitbucket, Docker, Developer Tools, Webpack, CI/CD.")}
          </p>
        </li>
        <li className={styles.item}>
          <SiRedux className={styles.icon} />
          <p className={styles.itemP}>
            {i18n._("State Management: Context, Redux, Middleware (Thunk, Redux-Saga), Reduxtoolkit.")}
          </p>
        </li>
        <li className={styles.item}>
          <FiGrid className={styles.icon} />
          <p className={styles.itemP}>
            {i18n._("NextJS, Intermediate Material UI, Bootstrap, jQuery, React Native and Expo.")}
          </p>
        </li>
        <li className={styles.item}>
          <FaSearch className={styles.icon} />
          <p className={styles.itemP}>{i18n._("Testing: Cypress, Jest, Jest snapshot.")}</p>
        </li>
        <li className={styles.item}>
          <SiOpenai className={styles.icon} />
          <p className={styles.itemP}>{i18n._("ChatGPT/OpenAI Other Skills:")}</p>
        </li>
        <li className={styles.item}>
          <TbApi className={styles.icon} />
          <p className={styles.itemP}>{i18n._("Working with REST API.")}</p>
        </li>
      </ul>

      <p className={styles.p2}>{i18n._("Management tools: Jira.")}</p>
      <p className={styles.p3}>
        {i18n._("Design and Prototyping: Wireframe (Photoshop, Figma, Zeplin, Avocode)")}
      </p>
      <p className={styles.p4}>{i18n._("Strong analytical and problem-solving skills.")}</p>
      <p className={styles.p5}>
        {i18n._("Familiarity with Lingui, Husky, Zod, SSR, Utility types.")}
      </p>
    </section>
  );
};

export default TechnicalSkills;
