import styles from './SoftSkills.module.css';
import montserrat from '../../styles/fonts';
import { useLocalesProvider } from '@/localization/localization.provider';

const SoftSkills: React.FC = () => {
  const { i18n } = useLocalesProvider();
  return (
    <section id="soft-skills" className={styles.SoftSkills}>
      <h2 className={styles.h}>{i18n._("Soft skills")}</h2>
      <p className={styles.p}>
        <span>
          {i18n._("I am an experienced Front-end Developer specializing in ReactJS/React Native, TypeScript, Redux, and Testing.")}
        </span>
        <span>
          {i18n._("With a strong background in web development, I have a proven  track record of creating user-friendly and visually appealing interfaces.")}
        </span>
        <span>
          {i18n._("I am passionate about staying up-to-date with the latest technologies and industry trends to deliver high-quality and efficient solutions.")}
        </span>
        <span>
          {i18n._("I thrive in collaborative environments and enjoy working with cross-functional teams to bring ideas to life.")}
        </span>
      </p>
    </section>
  );
};

export default SoftSkills;
