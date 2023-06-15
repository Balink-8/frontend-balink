import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./Transaction.module.css";

const Transaction = () => {
  const series = [20, 40, 40];
  const chartOptions = {
    labels: ["Transaksi Sukses", "Transaksi Batal", "Transaksi Diproses"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: "60%",
        },
      },
    },
    colors: ["#87D14F", "#FF0000", "#FF7002"],
    legend: {
      show: false,
    },
  };
  return (
    <div className="transactions">
      <h1 className="title-large-semibold mb-16">Transaksi</h1>
      <div className="d-flex align-items-center justify-content-center">
        <ul className={`p-0 ${styles.customList}`}>
          <li
            className={`body-medium-semibold d-flex align-items-between ${styles.listItem}`}
          >
            <p className="me-auto">Transaksi Sukses</p>
            <p className={styles.subtext}>{series[0]}%</p>
          </li>
          <li
            className={`body-medium-semibold d-flex align-items-between ${styles.listItem}`}
          >
            <p className="me-auto">Transaksi Batal</p>
            <p className={styles.subtext}>{series[1]}%</p>
          </li>
          <li
            className={`body-medium-semibold d-flex align-items-between ${styles.listItem}`}
          >
            <p className="me-16">Transaksi Diproses</p>
            <p className={styles.subtext}>{series[2]}%</p>
          </li>
        </ul>

        <ReactApexChart options={chartOptions} series={series} type="donut" />
      </div>
    </div>
  );
};

export default Transaction;
