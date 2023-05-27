import React from "react";
import styles from "./SeeMore.module.css";
import { Link } from "react-router-dom";

const SeeMore = ({ label, to }) => {
  return (
    <Link to={`/${to}`} className={`${styles.seeMore} body-small-semibold`}>
      {label}
    </Link>
  );
};

export default SeeMore;
