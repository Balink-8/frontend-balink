import React, { useState } from "react";
import styles from "./TableProdukDashboard.module.css";
import { useNavigate } from "react-router-dom";

const TableProdukDashboard = ({ data }) => {
  const navigate = useNavigate();
  const newestData = data.slice(-5);

  return (
    <div>
      <div className="row mt-4 text-center px-3">
        <div className="col-12 p-0 ">
          <div className="table-responsive">
            <table className="table">
              {/* Render data pada halaman saat ini */}
              <thead className={styles.thead} id="thead">
                <tr id="tr-table">
                  <th
                    className={`p-3 ${styles.roundedLeftTop} ${styles.tableHeadRow}`}
                  >
                    Kode Transaksi
                  </th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Produk</th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Status</th>
                  <th
                    className={`p-3 ${styles.tableHeadRow} ${styles.roundedRightTop}`}
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className={styles.tbody} id="tbody">
                {newestData.map((item, index) => (
                  <tr
                    className={styles.tableRow}
                    key={index}
                    onClick={() =>
                      navigate(`/transaksi/produk/detail/${item.id}`)
                    }
                  >
                    <td className="p-3">{item.kodeTransaksi}</td>
                    <td className="p-3">{item.namaProduct}</td>
                    <td
                      className={`p-3 title-small-semibold ${
                        styles.tableHeadRowBody
                      } ${styles.roundedRightBot} ${
                        item.status === "Sukses" ? styles.success : ""
                      } 
        ${item.status === "Dipesan" ? styles.order : ""}
        ${item.status === "Dibatalkan" ? styles.cancel : ""}
        ${item.status === "Menunggu" ? styles.waiting : ""}`}
                    >
                      {item.status}
                    </td>
                    <td className="p-3">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableProdukDashboard;
