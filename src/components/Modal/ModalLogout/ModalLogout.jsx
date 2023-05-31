import React from "react";
import styles from "./Modal.module.css";

const ModalLogout = () => {
  return (
    <div
      className={`${styles.modalContainer} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.modalContent} d-flex flex-column justify-content-center align-items-center`}
      >
        <h4 className="title-large-semibold mb-16 text-center">
          Apakah anda yakin untuk Logout?
        </h4>
        <p className="body-small-regular mb-16 text-center">
          Jika anda logout maka semua data yang ada disini akan hilang dan tidak
          dapat dikembalikan lagi
        </p>
        <p className="body-small-regular mb-48 text-center">
          Apakah anda tetap ingin Logout?
        </p>
        <div className="d-flex gap-5">
          <button type="button" class="btn btn-light">
            Light
          </button>
          <button type="button" class="btn btn-dark">
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
