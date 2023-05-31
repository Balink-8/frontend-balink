import React, { useState } from "react";
import keyboard_arrow_right from "../../../assets/icons/keyboard_arrow_right.svg";
import btn_arrow_left from "../../../assets/icons/btn_arrow_left.svg";
import vector from "../../../assets/icons/Vector.svg";
import styles from "./TableProduk.module.css";
import { Link, useNavigate } from "react-router-dom";
import Gambar from '../../../assets/assetsLandingPage/bali.svg'
import Edit from '../../../assets/icons/edit_square.svg'
import Delete from '../../../assets/icons/delete1.png'
const TableProduk = ({ data }) => {
   const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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

  const handleTambahProduk = () => {
   navigate('/tambahProduk')
  }

  return (
    <div>
      <div className="row">
        <div className="p-0">
          <div className={styles.search} id="search">
            <div className={styles.searchInput}>
               <input
               id="searchinput"
               type="text"
               className={`${styles.searchinput} form-control`}
               placeholder="Search..."
               />
               <img src={vector} alt="" className={styles.vector} />
            </div>
            <div className={styles.parentButton}>
               <button className={styles.buttonProduk} onClick={handleTambahProduk}><span className={styles.spanAdd}>+</span>Tambah Produk</button>
            </div>
          </div>
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
                  <th className={`p-3 ${styles.tableHeadRow}`}>Judul</th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Harga</th>
                  <th className={`p-3 ${styles.tableHeadRow}`}>Kategori</th>
                  <th
                    className={`p-3 ${styles.roundedRightTop} ${styles.tableHeadRow}`}
                  ></th>
                </tr>
              </thead>
              <tbody className={styles.tbody} id="tbody">
                {currentItems.map((item, index) => (
                  <tr className={styles.tableRow} key={index}>
                    <td className='p-3'><img src={Gambar} className={styles.image}/></td>
                    <td className="p-3">{item.judul}</td>
                    <td className="p-3">{item.harga}</td>
                    <td className="p-3">{item.kategori}</td>
                    <td className="p-3">
                      <Link to={`/akun/${item.username}`}>
                        <img
                          src={Edit}
                          alt=""
                          className={styles.actionButton}
                        />
                        <img
                          src={Delete}
                          alt=""
                          className={styles.actionButton}
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

export default TableProduk;
