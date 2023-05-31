import React from "react";
import styles from "./Statistics.module.css";

const Statistics = ({ label, total, newAmount }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h4 className="body-medium-semibold">{label}</h4>
      <h1 className="display-small-bold">{total}</h1>
      <p className="body-small-reguler mb-0">
        <span className={styles.spanGreen}>{newAmount}</span> Sebulan terakhir
      </p>
    </div>
  );
};

export default Statistics;
