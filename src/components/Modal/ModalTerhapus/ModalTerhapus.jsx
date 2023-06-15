import React from "react";
import deleteImg from "../../../assets/images/delete.png";
import styles from "./Modal.module.css";

const ModalTerhapus = () => {
  return (
    <div
      id="modal-terhapus-container"
      className={`${styles.modalContainer} d-flex justify-content-center align-items-center`}
    >
      <div
        id="modal-terhapus-content"
        className={`${styles.modalContent} d-flex flex-column justify-content-center align-items-center`}
      >
        <img
          id="modal-terhapus-image"
          src={deleteImg}
          alt="success"
          className="mb-16"
        />
        <h4 id="modal-terhapus-heading" className="title-large-semibold mb-16">
          Berhasil Dihapus
        </h4>
        <p id="modal-terhapus-message" className="body-small-regular mb-16">
          Data telah berhasil dihapus
        </p>
      </div>
    </div>
  );
};

export default ModalTerhapus;
