import React, { useEffect, useState } from "react";
import keyboard_arrow_right from "../../../assets/icons/keyboard_arrow_right.svg";
import btn_arrow_left from "../../../assets/icons/btn_arrow_left.svg";
import add from "../../../assets/icons/add.svg";
import styles from "./TableEventArtikel.module.css";
import { useNavigate } from "react-router-dom";
import TableSearch from "../../../elements/TableSearch/TableSearch";
import Button from "../../../elements/Button/Button";
import useApi from "../../../utils/useApi";
import EmptyTable from "../../../components/EmptyTable/EmptyTable";
import Spinner from "../../../components/Spinner/Spinner";
import ErrorDisplay from "../../../components/ErrorDisplay/ErrorDisplay";
import add_link from "../../../assets/icons/add_link.svg";
import defaultImg from "../../../assets/images/bg.jpg";

const TableEventArtikel = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedId, setSelectedId] = useState(null);

  const { response: artikel, loading, error, del, get } = useApi();

  useEffect(() => {
    get(`/artikel?page=${currentPage}&limit=${itemsPerPage}`).catch((error) => {
      console.log(error);
    });
  }, [currentPage, itemsPerPage]);

  const data = artikel?.data?.data;

  // Menghitung jumlah halaman
  const totalPages = Math.ceil(artikel?.data?.total_data / itemsPerPage);

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

  const handleTambahArtikel = () => {
    navigate("/artikel/tambah");
  };

  const handleSetArtikel = (ID) => {
    navigate(-1);
    const artikel_id = parseInt(ID);
    localStorage.setItem("artikel_id", artikel_id);
  };

  return (
    <>
      {data?.length === 0 ? (
        <div className="d-flex flex-column justify-content-center">
          <div className="d-grid col-2 ms-auto">
            <Button
              onClick={handleTambahArtikel}
              label="Tambah Artikel"
              icon={add}
              color="brown"
              id="tambah-artikel-button"
            />
          </div>
          <EmptyTable />
        </div>
      ) : (
        <div>
          {loading ? (
            <Spinner />
          ) : error ? (
            <ErrorDisplay errorMessage={error.message} />
          ) : (
            <div>
              <div className="d-flex justify-content-between">
                <TableSearch />
                <Button
                  onClick={handleTambahArtikel}
                  label="Tambah Artikel"
                  icon={add}
                  color="brown"
                  id="tambah-artikel-button"
                />
              </div>

              <div className="row mt-4 text-center">
                <div className="col-12 p-0">
                  <div className="table-responsive">
                    <table className="table">
                      {/* Render data pada halaman saat ini */}
                      <thead className={styles.thead} id="thead">
                        <tr id="tr-table">
                          <th
                            className={`p-3 ${styles.roundedLeftTop} ${styles.tableHeadRow}`}
                            id="foto-header"
                          >
                            Foto
                          </th>
                          <th
                            className={`p-3 ${styles.tableHeadRow}`}
                            id="nama-header"
                          >
                            Nama
                          </th>
                          <th
                            className={`p-3 ${styles.tableHeadRow}`}
                            id="keterangan-header"
                          >
                            Keterangan
                          </th>
                          <th
                            className={`p-3 ${styles.roundedRightTop} ${styles.tableHeadRow}`}
                          ></th>
                        </tr>
                      </thead>
                      <tbody className={styles.tbody} id="tbody">
                        {data?.map((item) => (
                          <tr className={styles.tableRow} key={item.ID}>
                            <td
                              className="p-3"
                              onClick={() => handleSetArtikel(item.ID)}
                              id={`foto-cell`}
                            >
                              <img src={defaultImg} className={styles.image} />
                            </td>
                            <td
                              className="p-3"
                              onClick={() => handleSetArtikel(item.ID)}
                              id={`nama-cell`}
                            >
                              {item.judul}
                            </td>
                            <td
                              className="p-3"
                              style={{
                                maxWidth: "400px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                              onClick={() => handleSetArtikel(item.ID)}
                              id={`keterangan-cell`}
                            >
                              {item.deskripsi}
                            </td>
                            <td className="p-3">
                              <img
                                src={add_link}
                                alt=""
                                className={`${styles.actionButton} me-16`}
                                onClick={() => handleSetArtikel(item.ID)}
                                id={`link-button`}
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
              <div
                className={`${styles.previous}  d-flex flex-row `}
                id="previous"
              >
                <div className="p-3 me-auto">
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
                <div className="p-3 d-flex justify-content-between">
                  <button
                    className={`${styles.btnleft} col-2 me-1 px-3 `}
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
                          id={`pagination-page-${page}`}
                        >
                          {page}
                        </button>
                      );
                    }
                  )}

                  {/* Tombol halaman berikutnya */}
                  <button
                    className={`${styles.btnright} col-2 me-1 px-3`}
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
        </div>
      )}
    </>
  );
};

export default TableEventArtikel;
