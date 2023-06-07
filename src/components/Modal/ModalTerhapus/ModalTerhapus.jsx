import React from "react";
import deleteImg from "../../../assets/images/delete.png";
import styles from "./Modal.module.css";

const ModalTerhapus = () => {
  return (
    <div
      className={`${styles.modalContainer} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.modalContent} d-flex flex-column justify-content-center align-items-center`}
      >
        <img src={deleteImg} alt="success" className="mb-16" />
        <h4 className="title-large-semibold mb-16">Berhasil Dihapus</h4>
        <p className="body-small-regular mb-16">Data telah berhasil dihapus</p>
      </div>
    </div>
  );
};

export default ModalTerhapus;
