import React, { useState } from "react";
import keyboard_arrow_right from "../../../assets/icons/keyboard_arrow_right.svg";
import btn_arrow_left from "../../../assets/icons/btn_arrow_left.svg";
import styles from "./TableEvent.module.css";
import edit from "../../../assets/icons/edit.svg";
import del from "../../../assets/icons/delete.svg";
import { Link, useNavigate } from "react-router-dom";
import TableSearch from "../../../elements/TableSearch/TableSearch";
import Button from "../../../elements/Button/Button";
import add from "../../../assets/icons/add.svg";

const TableEvent = ({ userData }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  // Mendapatkan data yang ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

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

  const handleNavigate = () => {
    navigate("/event/tambah");
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <TableSearch />
        <div id="tambahEvent">
          <Button
            onClick={handleNavigate}
            label="Tambah Event"
            icon={add}
            color="brown"
          />
        </div>
      </div>

      <div className="row mt-4 text-center">
        <div className="col-12 p-0">
          <div className="table-responsive">
            <table className="table ">
              {/* Render data pada halaman saat ini */}
              <thead className={styles.thead} id="thead">
                <tr id="tr-table">
                  <th
                    className={`p-3 ${styles.roundedLeftTop} ${styles.tableHeadRow}`}
                  >
                    Foto
                  </th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Nama</th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Deskripsi</th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Tanggal</th>
                  <th
                    className={`p-3 ${styles.roundedRightTop} ${styles.tableHeadRow}`}
                  ></th>
                </tr>
              </thead>
              <tbody className={styles.tbody} id="tbody">
                {currentItems.map((item, index) => (
                  <tr className={styles.tableRow} key={index}>
                    <td className="p-3">
                      <img src={item.foto} />
                    </td>
                    <td className="p-3">{item.nama}</td>
                    <td className="p-3">{item.deskripsi}</td>
                    <td className="p-3">{item.tanggal}</td>
                    <td className="p-3">
                      <Link to={`/event/detail`}>
                        <img
                          src={edit}
                          alt=""
                          className={styles.actionButton}
                        />
                      </Link>
                      <Link to={`/event/${item.nama}`}>
                        <img src={del} alt="" className={styles.actionButton} />
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
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
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
          })}

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
  );
};

export default TableEvent;
