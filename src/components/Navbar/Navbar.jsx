import React from "react";
import avatar from "../../assets/images/avatar.png";
import notification from "../../assets/icons/notifications.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} navbar`} id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand headline-small-semibold">Dashboard</a>
        <div className="user">
          <img src={notification} alt="notification-icon" className="me-16" />
          <img src={avatar} alt="avatar-img" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
