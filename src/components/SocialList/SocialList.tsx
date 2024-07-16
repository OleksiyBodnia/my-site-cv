import React, { FunctionComponent } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

// styles
import styles from "./SocialList.module.css";

const SocialList: FunctionComponent = () => {
  return (
    <div className={styles.socialList}>
      <a
        href="https://www.facebook.com/profile.php?id=100001488713274"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className={styles.icon} />
      </a>
      <a
        href="https://telegram.me/VadymBezsmertnyi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTelegram className={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/vadym-bezsmertnyi-7666431a2/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialList;
