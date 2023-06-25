import React, { useState, useEffect } from "react";
import keyboard_arrow_right from "../../../../assets/icons/keyboard_arrow_right.svg";
import btn_arrow_left from "../../../../assets/icons/btn_arrow_left.svg";
import styles from "./TableTransaksiProduk.module.css";
import receipt_long2 from "../../../../assets/icons/receipt_long2.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatCurrency } from "../../../../utils/CurrencyFormatter";
import Spinner from "../../../Spinner/Spinner";
import ErrorDisplay from "../../../ErrorDisplay/ErrorDisplay";

const TableTransaksiProduk = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading state to true before making the request
      const response = await axios.get(
        "https://647ca813c0bae2880ad10a5f.mockapi.io/balink/transaksiProduk"
      );

      setData(response.data);
      setLoading(false); // Set loading state to false after receiving the response
    } catch (error) {
      console.error(error);
      setError(error); // Set the error state if an error occurs
      setLoading(false); // Set loading state to false if an error occurs
    }
  };

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Mendapatkan data yang ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Mengubah halaman
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Halaman sebelumnya
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Halaman berikutnya
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Mengubah jumlah item per halaman
  const changeItemsPerPage = (e) => {
    const value = parseInt(e.target.value, 10);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage={error.message} />
      ) : (
        <div>
          <div className="row mt-4 text-center">
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
                      <th className={`p-3 ${styles.tableHeadRow}`}>Username</th>
                      <th className={`p-3 ${styles.tableHeadRow}`}>Waktu</th>
                      <th className={`p-3 ${styles.tableHeadRow}`}>Produk</th>
                      <th className={`p-3 ${styles.tableHeadRow}`}>Total</th>
                      <th className={`p-3 ${styles.tableHeadRow}`}>Status</th>
                      <th
                        className={`p-3 ${styles.roundedRightTop} ${styles.tableHeadRow}`}
                      ></th>
                    </tr>
                  </thead>
                  <tbody className={styles.tbody} id="tbody">
                    {currentItems.map((item, index) => (
                      <tr className={styles.tableRow} key={index}>
                        <td className="p-3">{item.kodeTransaksi}</td>
                        <td className="p-3">{item.username}</td>
                        <td className="p-3">{item.waktu}</td>
                        <td className="p-3">{item.namaProduct}</td>
                        <td className="p-3">
                          {formatCurrency(item.grandTotal)}
                        </td>
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
                        <td className="p-3">
                          <Link to={`/transaksi/produk/detail/${item.id}`}>
                            <img
                              src={receipt_long2}
                              alt=""
                              className={styles.actionButton}
                              id="detail-icon"
                            />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Kotak angka untuk memilih jumlah item per halaman */}
          <div className={`${styles.previous} row`} id="previous">
            <div className="col-10 p-3">
              <span className={styles.tableSpan}>Showing</span>
              <select
                className={`${styles.itemsPerPage} ms-2 `}
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={changeItemsPerPage}
              >
                <option value={10}>10</option>
                <option value={30}>20</option>
                <option value={50}>50</option>
              </select>
              <span className={`${styles.tableSpan} ms-2`}>of 50</span>
            </div>
            <div className="col-2 p-3">
              <button
                className={`${styles.btnleft} col-2 me-1`}
                id="btnleft"
                onClick={previousPage}
                disabled={currentPage === 1}
              >
                <img src={btn_arrow_left} alt="" />
              </button>

              {/* tombol halaman */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  return (
                    <button
                      className={`${styles.paginationPage} me-1 ${
                        currentPage === page && styles.active
                      }`}
                      key={page}
                      onClick={() => goToPage(page)}
                      disabled={currentPage === page}
                    >
                      {page}
                    </button>
                  );
                }
              )}

              {/* Tombol halaman berikutnya */}
              <button
                className={styles.btnright}
                id="btnright"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                <img src={keyboard_arrow_right} alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TableTransaksiProduk;
