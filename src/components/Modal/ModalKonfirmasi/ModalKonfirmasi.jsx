import React, { useContext } from "react";
import styles from "./Modal.module.css";
import Button from "../../../elements/Button/Button";
import close from "../../../assets/icons/close.svg";
import check from "../../../assets/icons/check.svg";
import konfirmasi from "../../../assets/images/konfirmasi.png";
import ModalTerhapus from "../ModalTerhapus/ModalTerhapus";
import { ModalConfirmationContext } from "../../../context/ModalConfirmationContext";
import { ModalAkunContext } from "../../../context/ModalAkunContext";
import { ModalTempContext } from "../../../context/ModalTempContext";
import { useNavigate } from "react-router-dom";

const ModalKonfirmasi = ({ onClick, path }) => {
  const { closeModalConfirmation } = useContext(ModalConfirmationContext);
  const { closeModalAkun } = useContext(ModalAkunContext);
  const { showModalTemp, openModalTemp } = useContext(ModalTempContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    onClick();
    openModalTemp();
    closeModalConfirmation();
    closeModalAkun();
    setTimeout(() => {
      navigate(`/${path}`);
      window.location.reload();
    }, 1500);
  };

  return (
    <div
      id="modalKonfirmasiContainer"
      className={`${styles.modalContainer} d-flex justify-content-center align-items-center`}
    >
      <div
        id="modalKonfirmasiContent"
        className={`${styles.modalContent} d-flex flex-column justify-content-center align-items-center`}
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
              onClick={() => handleDelete()}
            />
          </div>
          <div className="d-grid col-6">
            <Button
              id="modalKonfirmasiCancelButton"
              label="Cancel"
              color="brown"
              icon={close}
              onClick={() => closeModalConfirmation()}
            />
          </div>
        </div>
      </div>
      {showModalTemp && <ModalTerhapus />}
    </div>
  );
};

export default ModalKonfirmasi;
