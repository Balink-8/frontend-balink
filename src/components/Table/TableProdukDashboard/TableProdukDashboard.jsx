import React, { useState } from "react";
import styles from "./TableProdukDashboard.module.css";
import { useNavigate } from "react-router-dom";

const TableProdukDashboard = ({ userDataProduk }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const navigate = useNavigate();

  // Mendapatkan data yang ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userDataProduk.slice(indexOfFirstItem, indexOfLastItem);

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
                {currentItems.map((item, index) => (
                  <tr
                    className={styles.tableRow}
                    key={index}
                    onClick={() => navigate("/transaksi/produk/detail")}
                  >
                    <td className="p-3">{item.kodetransaksi}</td>
                    <td className="p-3">{item.produk}</td>
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
