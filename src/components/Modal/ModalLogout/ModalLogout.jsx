import React, { useContext } from "react";
import styles from "./Modal.module.css";
import Button from "../../../elements/Button/Button";
import close from "../../../assets/icons/close.svg";
import check from "../../../assets/icons/check.svg";
import { ModalLogoutContext } from "../../../context/ModalLogoutContext";
import { useNavigate } from "react-router";

const ModalLogout = () => {
  const navigate = useNavigate();
  const { closeModalLogout } = useContext(ModalLogoutContext);
  return (
    <div
      id="modalLogoutContainer"
      className={`${styles.modalContainer} d-flex justify-content-center align-items-center`}
    >
      <div
        id="modalLogoutContent"
        className={`${styles.modalContent} d-flex flex-column justify-content-center align-items-center`}
      >
        <h4
          id="modalLogoutTitle"
          className="title-large-semibold mb-32 text-center"
        >
          Apakah anda yakin Logout?
        </h4>
        <p className="body-small-regular ">
          Jika anda logout maka semua data yang ada disini akan hilang dan tidak
          dapat dikembalikan lagi
        </p>
        <p className="body-small-regular">Apakah anda tetap ingin Logout?</p>
        <div className="d-flex gap-5 justify-content-center mt-32">
          <div className="d-grid col-6">
            <Button
              id="modalLogoutYesButton"
              label="Yes"
              color="white"
              icon={check}
              onClick={() => navigate("/login")}
            />
          </div>
          <div className="d-grid col-6">
            <Button
              id="modalLogoutCancelButton"
              label="Cancel"
              color="brown"
              icon={close}
              onClick={() => closeModalLogout()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
