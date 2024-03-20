import React from "react";
import styles from "./navbar.module.css";
import { Logo } from "../logo/logo";
import search from "../../assets/search.png";
import messages from "../../assets/messages.png";
import bell from "../../assets/bell.png";
import MenuIcon from "@mui/icons-material/Menu";
export const Navbar = ({ set_hamburgerClicked }) => {
  // hamburger icon in mobile view
  const handlehamburgerClicked = () => {
    set_hamburgerClicked((prevval) => !prevval);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.LogoDiv}>
        <Logo />
      </div>
      <div className={styles.navbar}>
        <h1>Analytics</h1>

        <div className={styles.navbarList}>
          <div className={styles.searchDiv}>
            <img src={search} alt="searchicon" height={"30%"} width={"10%"} />
            <input placeholder="Search..." />
          </div>
          <div className={styles.imgSizing}>
            <img src={messages} alt="messages" height={"100%"} width={"100%"} />
          </div>
          <div className={styles.imgSizing}>
            <img src={bell} alt="bell" height={"100%"} width={"100%"} />
          </div>
        </div>
        <div className={styles.hamburger} onClick={handlehamburgerClicked}>
          <MenuIcon sx={{ width: "1rem", height: "1rem" }} />
        </div>
      </div>
    </div>
  );
};
