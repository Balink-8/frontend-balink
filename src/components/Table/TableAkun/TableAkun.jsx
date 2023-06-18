import React, { useState, useEffect } from "react";
import keyboard_arrow_right from "../../../assets/icons/keyboard_arrow_right.svg";
import btn_arrow_left from "../../../assets/icons/btn_arrow_left.svg";
import styles from "./TableAkun.module.css";
import demography from "../../../assets/icons/demography.svg";
import TableSearch from "../../../elements/TableSearch/TableSearch";
import Modal from "react-modal";
import Button from "../../../elements/Button/Button";
import deleteIcon from "../../../assets/icons/delete.svg";
import Input from "../../../elements/Input/Input";
import iconVisibility from "../../../assets/icons/visibility_off.svg";
import close_black from "../../../assets/icons/close_black.svg";
import close from "../../../assets/icons/close.svg";
import check from "../../../assets/icons/check.svg";
import konfirmasi from "../../../assets/images/konfirmasi.png";
import deleteImg from "../../../assets/images/delete.png";
import useApi from "../../../api/useApi";
import Spinner from "../../../components/Spinner/Spinner";
import EmptyTable from "../../EmptyTable/EmptyTable";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";

const TableAkun = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [modalAkunIsOpen, setModaAkunlIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [modalKonfirmasiIsOpen, setModalKonfirmasiIsOpen] = useState(false);
  const [modalTerhapusIsOpen, setModalTerhapusIsOpen] = useState(false);

  const { response: akun, loading, error, del, get } = useApi();

  useEffect(() => {
    get(`/user?page=${currentPage}&limit=${itemsPerPage}`).catch((error) => {
      console.log(error);
    });
  }, [currentPage, itemsPerPage]);

  const data = akun?.data?.data;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      padding: "60px",
      width: "979px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      zIndex: "9999",
    },
  };

  const customStylesConfirmation = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      padding: "60px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      zIndex: "9999",
    },
  };

  const totalPages = Math.ceil(akun?.data?.total_data / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeItemsPerPage = (e) => {
    const value = parseInt(e.target.value, 10);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const openAkunModal = (item) => {
    setSelectedItem(item);
    setModaAkunlIsOpen(true);
  };

  const closeAkunModal = () => {
    setModaAkunlIsOpen(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const openKonfirmasiModal = () => {
    setModalKonfirmasiIsOpen(true);
  };

  const closeKonfirmasiModal = () => {
    setModalKonfirmasiIsOpen(false);
  };

  const openTerhapusModal = () => {
    setModalTerhapusIsOpen(true);
    setTimeout(() => {
      closeTerhapusModal();
      window.location.reload();
    }, 1500);
  };

  const closeTerhapusModal = () => {
    setModalTerhapusIsOpen(false);
  };

  const deleteAkun = () => {
    del(`/user/${selectedItem?.ID}`)
      .then(() => {
        openTerhapusModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {data?.length === 0 ? (
        <div className="d-flex flex-column justify-content-center">
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
              <div>
                <TableSearch />
                <div className="row mt-4 text-center">
                  <div className="col-12 p-0">
                    <div className="table-responsive">
                      <table className="table">
                        <thead className={styles.thead} id="thead">
                          <tr id="tr-table">
                            <th
                              className={`p-3 ${styles.roundedLeftTop} ${styles.tableHeadRow}`}
                            >
                              Email
                            </th>
                            <th className={`p-3 ${styles.tableHeadRow}`}>
                              Pengguna
                            </th>
                            <th className={`p-3 ${styles.tableHeadRow}`}>
                              Telephone
                            </th>
                            <th className={`p-3 ${styles.tableHeadRow}`}>
                              Alamat
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
                                onClick={() => openAkunModal(item)}
                              >
                                {item.email}
                              </td>
                              <td
                                className="p-3"
                                onClick={() => openAkunModal(item)}
                              >
                                {item.nama}
                              </td>
                              <td
                                className="p-3"
                                onClick={() => openAkunModal(item)}
                              >
                                {item.no_telepon}
                              </td>
                              <td
                                className="p-3"
                                onClick={() => openAkunModal(item)}
                              >
                                {item.alamat}
                              </td>
                              <td className="p-3">
                                <img
                                  src={demography}
                                  alt=""
                                  className={styles.actionButton}
                                  onClick={() => openAkunModal(item)}
                                  id="detail-icon"
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.previous} d-flex flex-row`}
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
                      className={`${styles.btnleft} col-2 me-1 px-3`}
                      id="btnleft"
                      onClick={previousPage}
                      disabled={currentPage === 1}
                    >
                      <img src={btn_arrow_left} alt="" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
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
                      )
                    )}

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

              {/* Modal */}
              <Modal
                isOpen={modalAkunIsOpen}
                onRequestClose={closeAkunModal}
                contentLabel="Detail Modal"
                style={customStyles}
              >
                {selectedItem && (
                  <div id="modalAkunContainer">
                    <div id="modalAkunContent">
                      <div>
                        <div className="d-flex justify-content-between align-items-start">
                          <img
                            src={selectedItem.foto_profile}
                            alt="avatar-img"
                            className={styles.avatar}
                          />
                          <img
                            src={close_black}
                            alt="close-button"
                            className={styles.close}
                            onClick={() => setModaAkunlIsOpen(false)}
                          />
                        </div>

                        <div id="inputGroup1" className="d-flex gap-5 mb-24">
                          <Input
                            label="Nama Lengkap"
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={selectedItem.nama}
                            readOnly
                          />
                          <Input
                            label="Email address"
                            type="email"
                            id="email"
                            name="email"
                            value={selectedItem.email}
                            readOnly
                          />
                        </div>
                        <div id="inputGroup2" className="d-flex gap-5 mb-24">
                          <Input
                            label="Username"
                            type="text"
                            id="username"
                            name="username"
                            value={selectedItem.nama}
                            readOnly
                          />
                          <Input
                            label="Telephone"
                            type="text"
                            id="telephone"
                            name="telephone"
                            value={selectedItem.no_telepon}
                            readOnly
                          />
                        </div>
                        <div id="inputGroup3" className="d-flex gap-5 mb-24">
                          <Input
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={selectedItem.password}
                            icon={iconVisibility}
                            onClick={togglePasswordVisibility}
                            readOnly
                          />

                          <Input
                            label="Alamat"
                            type="text"
                            id="alamat"
                            name="alamat"
                            value={selectedItem.alamat}
                            readOnly
                          />
                        </div>
                        <Button
                          id="hapusButton"
                          label="Hapus"
                          onClick={() => openKonfirmasiModal()}
                          color="white"
                          icon={deleteIcon}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Modal>
              <Modal
                isOpen={modalKonfirmasiIsOpen}
                onRequestClose={closeKonfirmasiModal}
                contentLabel="Confirmation Modal"
                style={customStylesConfirmation}
              >
                <div
                  id="modalKonfirmasiContainer"
                  className={`d-flex justify-content-center align-items-center`}
                >
                  <div
                    id="modalKonfirmasiContent"
                    className={`d-flex flex-column justify-content-center align-items-center`}
                  >
                    <img
                      id="modalKonfirmasiImage"
                      src={konfirmasi}
                      alt="konfirmasi-img"
                      className="mb-16"
                    />
                    <h4
                      id="modalKonfirmasiTitle"
                      className="title-large-semibold mb-32 text-center"
                    >
                      Apakah anda ingin menghapus data ini?
                    </h4>
                    <p id="modalKonfirmasiText1" className="body-small-regular">
                      Data yang sudah dihapus tidak dapat dikembalikan lagi
                    </p>
                    <p
                      id="modalKonfirmasiText2"
                      className="body-small-regular mb-32"
                    >
                      Apakah anda yakin?
                    </p>
                    <div className="d-flex gap-5 justify-content-center">
                      <div className="d-grid col-6">
                        <Button
                          id="modalKonfirmasiYesButton"
                          label="Yes"
                          color="white"
                          icon={check}
                          onClick={() => deleteAkun()}
                        />
                      </div>
                      <div className="d-grid col-6">
                        <Button
                          id="modalKonfirmasiCancelButton"
                          label="Cancel"
                          color="brown"
                          icon={close}
                          onClick={() => closeKonfirmasiModal()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
              <Modal
                isOpen={modalTerhapusIsOpen}
                onRequestClose={closeTerhapusModal}
                contentLabel="Confirmation Modal"
                style={customStylesConfirmation}
              >
                <div
                  id="modal-terhapus-container"
                  className={`d-flex justify-content-center align-items-center`}
                >
                  <div
                    id="modal-terhapus-content"
                    className={`d-flex flex-column justify-content-center align-items-center`}
                  >
                    <img
                      id="modal-terhapus-image"
                      src={deleteImg}
                      alt="success"
                      className="mb-16"
                    />
                    <h4
                      id="modal-terhapus-heading"
                      className="title-large-semibold mb-16"
                    >
                      Berhasil Dihapus
                    </h4>
                    <p
                      id="modal-terhapus-message"
                      className="body-small-regular mb-16"
                    >
                      Data telah berhasil dihapus
                    </p>
                  </div>
                </div>
              </Modal>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TableAkun;
