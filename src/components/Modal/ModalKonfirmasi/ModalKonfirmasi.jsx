import React, { useContext } from "react";
import styles from "./Modal.module.css";
import Button from "../../../elements/Button/Button";
import close from "../../../assets/icons/close.svg";
import check from "../../../assets/icons/check.svg";
import konfirmasi from "../../../assets/images/konfirmasi.png";
import { ModalContext } from "../../../context/ModalContext";

const ModalKonfirmasi = () => {
  const { closeModal, openModalTemp } = useContext(ModalContext);
  return (
    <div
      className={`${styles.modalContainer} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.modalContent} d-flex flex-column justify-content-center align-items-center`}
      >
        <img src={konfirmasi} alt="konfirmasi-img" className="mb-16" />
        <h4 className="title-large-semibold mb-32 text-center">
          Apakah anda ingin menghapus data ini?
        </h4>
        <p className="body-small-regular">
          Data yang sudah dihapus tidak dapat dikembalikan lagi
        </p>
        <p className="body-small-regular mb-32">Apakah anda yakin?</p>
        <div className="d-flex gap-5 justify-content-center">
          <div className="d-grid col-6">
            <Button
              label="Yes"
              color="white"
              icon={check}
              onClick={() => openModalTemp()}
            />
          </div>
          <div className="d-grid col-6">
            <Button
              label="Cancel"
              color="brown"
              icon={close}
              onClick={() => closeModal()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalKonfirmasi;
