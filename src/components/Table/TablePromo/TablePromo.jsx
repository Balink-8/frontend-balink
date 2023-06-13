import React, { useContext, useState } from "react";
import keyboard_arrow_right from "../../../assets/icons/keyboard_arrow_right.svg";
import btn_arrow_left from "../../../assets/icons/btn_arrow_left.svg";
import styles from "./TablePromo.module.css";
import edit from "../../../assets/icons/edit.svg";
import hapus from "../../../assets/icons/deleteRed.svg";
import { Link, useNavigate } from "react-router-dom";
import TableSearch from "../../../elements/TableSearch/TableSearch";
import Button from "../../../elements/Button/Button";
import add from "../../../assets/icons/add.svg";
import useApi from "../../../api/useApi";

const TablePromo = ({ data }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { response: promo, loading, error, del } = useApi();

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

  const handleNavigate = () => {
    navigate("/promo/tambah");
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <TableSearch />
        <div id="tambahPromo">
          <Button
            onClick={handleNavigate}
            label="Tambah Promo"
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
                    Nama Promo
                  </th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Deskripsi Promo</th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Kode Promo</th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Potongan Harga</th>
                  <th
                    className={`p-3 ${styles.roundedRightTop} ${styles.tableHeadRow}`}
                  ></th>
                </tr>
              </thead>
              <tbody className={styles.tbody} id="tbody">
                {currentItems?.map((item) => (
                  <tr className={styles.tableRow} key={item.id}>
                    <td className="p-3" onClick={() => navigate(`/promo/detail/${item.id}`)}>{item.NamaPromo}</td>
                    <td className="p-3"
                      style={{
                        maxWidth: "400px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      onClick={() => navigate(`/promo/detail/${item.id}`)}>
                        {item.DeskripsiPromo}
                    </td>
                    <td className="p-3 body-medium-semibold" onClick={() => navigate(`/promo/detail/${item.id}`)}>{item.KodePromo}</td>
                    <td className="p-3" onClick={() => navigate(`/promo/detail/${item.id}`)}>{item.PotonganHarga}</td>
                    <td className="p-3">
                      <img
                        src={edit}
                        alt=""
                        className={styles.actionButton}
                        onClick={() => navigate(`/promo/${item.id}`)}
                      />
                      <img 
                        src={hapus} 
                        alt="" 
                        className={styles.actionButton} 
                        onClick={() =>
                          del(
                            `https://648179fd29fa1c5c503172c3.mockapi.io/promo/${item.id}`
                          )
                        }
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

export default TablePromo;
