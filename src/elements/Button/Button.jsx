import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick, icon, color }) => {
  const dynamicClassName = `${styles.btnContainer} ${styles[color]}`;
  const dynamicIcon = `${styles[color]}`;
  return (
    <button
      className={`d-flex justify-content-center align-items-center ${dynamicClassName}`}
      onClick={onClick}
    >
      <img src={icon} alt="btn-icon" className={`me-8 ${dynamicIcon}`} />
      <p className="body-large-semibold m-0">{label}</p>
    </button>
  );
};

export default Button;
