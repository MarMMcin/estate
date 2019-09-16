import React from "react";
import Button from "../Button/Button";
import HeaderNavigation from "./HeaderNavigation";
import styles from "./Header.module.scss";
import logoImage from "../../assets/images/logo2.jpg";

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <img className={styles.logo} src={logoImage} alt=" logo" />
    <HeaderNavigation />
    <Button onClick={openModalFn} secondary>
      new add
    </Button>
  </header>
);

export default Header;
