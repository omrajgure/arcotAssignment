import React from "react";
import styles from "./sidebar.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
import WindowIcon from "@mui/icons-material/Window";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";

export const Sidebar = ({ hamburgerClicked }) => {
  return (
    <div className={!hamburgerClicked ? styles.Wrapper : styles.wrapper}>
      <div className={`${styles.imgDiv} ${styles.selectedDiv}`}>
        <WindowIcon />
      </div>
      <div className={`${styles.imgDiv} ${styles.hidden}`}>
        <EmailIcon />
      </div>
      <div className={`${styles.imgDiv} ${styles.hidden}`}>
        <NotificationsIcon />
      </div>
      <div className={styles.imgDiv}>
        <SettingsIcon />
      </div>
      <div className={styles.imgDiv}>
        <AccountCircleIcon />
      </div>
    </div>
  );
};
