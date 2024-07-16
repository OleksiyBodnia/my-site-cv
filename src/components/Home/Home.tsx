import styles from './Home.module.css';
import montserrat from '../../styles/fonts';
import { useLocalesProvider } from '@/localization/localization.provider';

const Home: React.FC = () => {
  const { i18n } = useLocalesProvider();
  return (
    <section id='home' className={styles.homeSection}>
        <h1 className={styles.h}>
            {i18n._("Vadym Bezsmertnyi")}
        </h1>
        <p className={styles.p}>
            full-stack <span className={styles.span}>{i18n._("Developer")}</span>
        </p>
    </section>
  )
}

export default Home
