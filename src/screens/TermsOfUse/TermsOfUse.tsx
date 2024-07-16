import React, { FunctionComponent, useContext } from "react";

// providers
import { localesContext } from "@/localization/localization.provider";

// styles
import styles from "./TermsOfUse.module.css";

const TermsOfUse: FunctionComponent = () => {
  const { i18n } = useContext(localesContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>{i18n._("Terms of Use")}</h1>
    </div>
  );
};

export default TermsOfUse;
