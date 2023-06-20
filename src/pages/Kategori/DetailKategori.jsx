import React, { useEffect, useState } from "react";
import styles from "./DetailKategori.module.css";
import Button from "../../elements/Button/Button";
import edit from "../../assets/icons/edit_square_white.svg";
import hapus from "../../assets/icons/delete.svg";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import Modal from "react-modal";
import konfirmasi from "../../assets/images/konfirmasi.png";
import close from "../../assets/icons/close.svg";
import check from "../../assets/icons/check.svg";
import deleteImg from "../../assets/images/delete.png";


const DetailKategori = () => {
  const navigate = useNavigate();
  const [modalKonfirmasiIsOpen, setModalKonfirmasiIsOpen] = useState(false);
  const [modalTerhapusIsOpen, setModalTerhapusIsOpen] = useState(false);
  const { response: kategori_produk, error, loading, get, del } = useApi();
  const { id } = useParams();

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

  useEffect(() => {
    get(`/kategori_produk/${id}`).catch((error) => {
      // Handle error
      console.error(error);
    });
  }, [id]);

  const handleDeletePoduk = () => {
    del(`/kategori_produk/${id}`)
    .then(() => {
      openTerhapusModal();
    })
    .catch((error) => {
      console.error(error);
    });
  };
 
  const closeKonfirmasiModal = () => {
    setModalKonfirmasiIsOpen(false);
  };

  const openKonfirmasiModal = () => {
    setModalKonfirmasiIsOpen(true);
  };

  const openTerhapusModal = () => {
    setModalTerhapusIsOpen(true);
    setTimeout(() => {
      closeTerhapusModal();
      navigate(-1);
    }, 1500);
  };

  const closeTerhapusModal = () => {
    setModalTerhapusIsOpen(false);
  };


  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage={error.message} />
      ) : (

    <div className={styles.container} id="detailKategoriContentContainer">
      <h1 
        className="headline-small-semibold mb-16" 
        id="detailKategoriTitle">
          Detail Kategori
        </h1>
      <h4 
        className="title-large-semibold mb-24 mt-5" 
        id="detailNamaKategoriTitle">
          {kategori_produk?.data?.nama}
        </h4>
      <p 
        className="body-medium-regular"
        id="deskripsiDetail">
          {kategori_produk?.data?.deskripsi}
      </p>
      

      <div className="d-flex justify-content-end gap-3 pt-5">
            <div className="d-grid col-3">
              <Button
                label="Hapus"
                color="white"
                icon={hapus}
                onClick={() => openKonfirmasiModal()}
                id="hapusButton"
              />
            </div>
            <div className="d-grid col-3">
              <Button
                label="Edit"
                color="brown"
                icon={edit}
                onClick={() => navigate(`/kategori/edit/${id}`)}
                id="editButton"
              />
            </div>
        </div>
    </div>
    )}

    {/* Modal */}
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
            <p id="modalKonfirmasiText2" className="body-small-regular mb-32">
              Apakah anda yakin?
            </p>
            <div className="d-flex gap-5 justify-content-center">
              <div className="d-grid col-6">
                <Button
                  id="modalKonfirmasiYesButton"
                  label="Yes"
                  color="white"
                  icon={check}
                  onClick={handleDeletePoduk}
                />
              </div>
              <div className="d-grid col-6">
                <Button
                  id="modalKonfirmasiCancelButton"
                  label="Cancel"
                  color="brown"
                  icon={close}
                  onClick={closeKonfirmasiModal}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalTerhapusIsOpen}
        onRequestClose={closeTerhapusModal}
        contentLabel="Deleted Modal"
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
            <p id="modal-terhapus-message" className="body-small-regular mb-16">
              Data telah berhasil dihapus
            </p>
          </div>
        </div>
      </Modal>

    
    </div>
  );
};

export default DetailKategori;
