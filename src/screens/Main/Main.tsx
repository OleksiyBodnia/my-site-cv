import React, { FunctionComponent } from "react";
import { useLocalesProvider } from "@/localization/localization.provider";
import montserrat from "@/styles/fonts";
import 'modern-normalize/modern-normalize.css'

const Main: FunctionComponent = () => {
  const { i18n } = useLocalesProvider();
  return (
    <div>
      {/* <h1
        style={{
          fontFamily: montserrat.style.fontFamily,
        }}
      >
        {i18n._("Example translate text")}
      </h1>

      <p>
        {i18n._(
          "Example test"
        )}
      </p> */}
    </div>
  );
};

export default Main;
