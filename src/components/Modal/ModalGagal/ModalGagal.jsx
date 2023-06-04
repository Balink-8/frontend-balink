import React from "react";
import ModalGagalLogo from "../../../assets/images/ModalGagalLogo.png";
import styles from "./Modal.module.css";

const ModalGagal = () => {
  return (
    <div
      className={`${styles.modalContainer} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.modalContent} d-flex flex-column justify-content-center align-items-center`}
      >
        <img src={ModalGagalLogo} alt="success" className="mb-16" />
        <h4 className="title-large-semibold mb-16">Gagal Disimpan</h4>
        <p className="body-small-regular mb-16">
          Data yang anda buat Gagal disimpan
        </p>
      </div>
    </div>
  );
};

export default ModalGagal;
