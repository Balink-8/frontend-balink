import React, { useState } from "react";
import keyboard_arrow_right from "../../../assets/icons/keyboard_arrow_right.svg";
import btn_arrow_left from "../../../assets/icons/btn_arrow_left.svg";
import add from "../../../assets/icons/add.svg";
import styles from "./TableKategori.module.css";
import { useNavigate } from "react-router-dom";
import Edit from "../../../assets/icons/edit_square.svg";
import Delete from "../../../assets/icons/deleteRed.svg";
import TableSearch from "../../../elements/TableSearch/TableSearch";
import Button from "../../../elements/Button/Button";
import useApi from "../../../api/useApi";

const TableKategori = ({ data }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { response: kategori, loading, error, del } = useApi();

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  // Mendapatkan data yang ditampilkan pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

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

  const handleTambahKategori = () => {
    navigate("/kategori/tambah");
  };

  // const handleDetailKategori = () => {
  //   navigate("/kategori/detail");
  // };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <TableSearch />
        <Button
          onClick={handleTambahKategori}
          label="Tambah Kategori"
          icon={add}
          color="brown"
        />
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
                    Nama Kategori
                  </th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>
                    Deskripsi Kategori
                  </th>
                  <th
                    className={`p-3 ${styles.roundedRightTop} ${styles.tableHeadRow}`}
                  ></th>
                </tr>
              </thead>
              <tbody className={styles.tbody} id="tbody">
                {currentItems?.map((item) => (
                  <tr className={styles.tableRow} key={item.id}>
                    <td
                      className="p-3"
                      onClick={() => navigate(`/kategori/detail/${item.id}`)}
                    >
                      {item.namaKategori}
                    </td>
                    <td
                      className="p-3"
                      style={{
                        maxWidth: "400px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      onClick={() => navigate(`/kategori/detail/${item.id}`)}
                    >
                      {item.deskripsiKategori}
                    </td>
                    <td className="p-3">
                      <img
                        src={Edit}
                        alt=""
                        className={`${styles.actionButton} me-16`}
                        onClick={() => navigate(`/kategori/edit/${item.id}`)}
                        id="edit-icon"
                      />
                      <img
                        src={Delete}
                        alt=""
                        className={styles.actionButton}
                        onClick={() =>
                          del(
                            `https://6486e617beba6297278f6c94.mockapi.io/kategori/${item.id}`
                          )
                        }
                        id="delete-icon"
                      />
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

export default TableKategori;
