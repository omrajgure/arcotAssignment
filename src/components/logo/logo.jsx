import React from "react";
import styles from "./logo.module.css";
import logo from "../../assets/logo.png";
export const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={logo} alt="logo" height={"100%"} width={"100%"} />
    </div>
  );
};
