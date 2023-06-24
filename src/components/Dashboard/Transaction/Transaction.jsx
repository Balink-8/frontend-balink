import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./Transaction.module.css";
import greenDot from "../../../assets/images/Ellipse 148.svg";
import redDot from "../../../assets/images/Ellipse 149.svg";
import brownDot from "../../../assets/images/Ellipse 150.svg";
import orangeDot from "../../../assets/images/Ellipse 151.svg";

const Transaction = () => {
  const series = [20, 15, 25, 40];
  const chartOptions = {
    labels: ["Sukses", "Dibatalkan", "Menunggu", "Dipesan"],
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
    colors: ["#87D14F", "#FF0000", "#9B6732", "#FF7002"],
    legend: {
      show: false,
    },
  };
  return (
    <div className="transactions">
      <h1 className="title-large-semibold mb-16">Transaksi</h1>
      <div className="d-flex align-items-center justify-content-around">
        <div className="d-flex flex-column align-items-between">
          <div className="d-flex justify-content-start align-items-center mb-8">
            <div className="d-flex align-items-center me-2">
              <img
                src={greenDot}
                alt=""
                style={{ width: "12px", height: "24px" }}
              />
            </div>
            <p className="mb-0 me-auto body-small-semibold">Sukses</p>
            <p className={`${styles.subtext} mb-0 body-medium-semibold`}>
              {series[0]}%
            </p>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-8">
            <div className="d-flex align-items-center me-2">
              <img
                src={redDot}
                alt=""
                style={{ width: "12px", height: "24px" }}
              />
            </div>
            <p className="mb-0 me-auto body-small-semibold">Dibatalkan</p>
            <p className={`${styles.subtext} mb-0 body-medium-semibold`}>
              {series[1]}%
            </p>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-8">
            <div className="d-flex align-items-center me-2">
              <img
                src={brownDot}
                alt=""
                style={{ width: "12px", height: "24px" }}
              />
            </div>
            <p className="mb-0 me-auto body-small-semibold">Menunggu</p>
            <p className={`${styles.subtext} mb-0 body-medium-semibold`}>
              {series[2]}%
            </p>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-8">
            <div className="d-flex align-items-center me-2">
              <img
                src={orangeDot}
                alt=""
                style={{ width: "12px", height: "24px" }}
              />
            </div>
            <p className="mb-0 me-auto body-small-semibold">Dipesan</p>
            <p className={`${styles.subtext} mb-0 ms-5 body-medium-semibold`}>
              {series[3]}%
            </p>
          </div>
        </div>

        <ReactApexChart options={chartOptions} series={series} type="donut" />
      </div>
    </div>
  );
};

export default Transaction;
