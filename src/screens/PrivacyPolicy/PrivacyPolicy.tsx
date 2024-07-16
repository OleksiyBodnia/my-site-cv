import React, { FunctionComponent, useContext } from "react";
import Link from "next/link";
import { Trans } from "@lingui/react";

// providers
import { localesContext } from "@/localization/localization.provider";

// styles
import styles from "./PrivacyPolicy.module.css";

export const PrivacyPolicy: FunctionComponent = () => {
  const { i18n } = useContext(localesContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>{i18n._("Privacy Policy")}</h1>
    </div>
  );
};
