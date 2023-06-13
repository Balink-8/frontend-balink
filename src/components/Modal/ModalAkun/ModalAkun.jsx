import React, { useContext, useState, useEffect } from "react";
import styles from "./ModalAkun.module.css";
import { ModalAkunContext } from "../../../context/ModalAkunContext";
import { ModalConfirmationContext } from "../../../context/ModalConfirmationContext";
import Button from "../../../elements/Button/Button";
import deleteIcon from "../../../assets/icons/delete.svg";
import Input from "../../../elements/Input/Input";
import iconVisibility from "../../../assets/icons/visibility_off.svg";
import useApi from "../../../api/useApi";
import close from "../../../assets/icons/close_black.svg";
import ModalKonfirmasi from "../ModalKonfirmasi/ModalKonfirmasi";
import Spinner from "../../Spinner/Spinner";

const ModalAkun = ({ id }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { closeModalAkun } = useContext(ModalAkunContext);
  const { showModalConfirmation, openModalConfirmation } = useContext(
    ModalConfirmationContext
  );
  const { response, error, loading, get } = useApi();
  const {
    response: delResponse,
    error: delError,
    loading: delLoading,
    del,
  } = useApi();

  useEffect(() => {
    get(`/user/${id}`).catch((error) => {
      // Handle error
      console.error(error);
    });
  }, [id]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const deleteAkun = () => {
    del(`/user/${id}`).catch((error) => {
      // Handle error
      console.error(error);
    });
  };

  console.error(error);
  console.error(response?.data?.data?.nama);
  console.error(loading);

  return (
    <div id="modalAkunContainer" className={styles.modalContainer}>
      <div id="modalAkunContent" className={styles.modalContent}>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            <div className="d-flex justify-content-between align-items-start">
              <img
                src={response?.image}
                alt="avatar-img"
                className={styles.avatar}
              />
              <img
                src={close}
                alt="close-button"
                className={styles.close}
                onClick={() => closeModalAkun()}
              />
            </div>

            <div id="inputGroup1" className={styles.inputGroup}>
              <Input
                label="Nama Lengkap"
                type="text"
                id="fullName"
                name="fullName"
                value={response?.data?.data?.nama}
                readOnly
              />
              <Input
                label="Email address"
                type="email"
                id="email"
                name="email"
                value={response?.email}
                readOnly
              />
            </div>
            <div id="inputGroup2" className={styles.inputGroup}>
              <Input
                label="Username"
                type="text"
                id="username"
                name="username"
                value={response?.username}
                readOnly
              />
              <Input
                label="Telephone"
                type="text"
                id="telephone"
                name="telephone"
                value={response?.telephone}
                readOnly
              />
            </div>
            <div id="inputGroup3" className={styles.inputGroup}>
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={response?.password}
                icon={iconVisibility}
                onClick={togglePasswordVisibility}
                readOnly
              />

              <Input
                label="Alamat"
                type="text"
                id="alamat"
                name="alamat"
                value={response?.alamat}
                readOnly
              />
            </div>

            <Button
              id="hapusButton"
              label="Hapus"
              onClick={() => openModalConfirmation()}
              color="white"
              icon={deleteIcon}
            />
            {showModalConfirmation && <ModalKonfirmasi onClick={deleteAkun} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalAkun;
