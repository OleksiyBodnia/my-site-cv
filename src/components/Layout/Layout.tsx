import React, { FunctionComponent, useState } from "react";

// providers
import LocalesProvider from "@/localization/localization.provider";
import { ApiProvider } from "@/providers/ApiProvider/ApiProvider";
// components
import { Header } from "../Header/Header";

import styles from './Layout.module.css';
import Home from "../Home/Home";
import HardSkills from "../HardSkills/HardSkills";
import TechnicalSkills from "../TechnicalSkills/TechnicalSkills";
import SoftSkills from "../SoftSkills/SoftSkills";
import Footer from "../Footer/Footer";
import MobileMenu from "../MobileMenu/MobileMenu";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <LocalesProvider>
      <ApiProvider>
        <div className={styles.container}>
          <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
          <Header toggleMenu={toggleMenu}/>
          <Home />
          <HardSkills />
          <TechnicalSkills />
          <SoftSkills />
          <Footer />
          <main>{children}</main>
        </div>
      </ApiProvider>
    </LocalesProvider>
  );
};

export default Layout;
