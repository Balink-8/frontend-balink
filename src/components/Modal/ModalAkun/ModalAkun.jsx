import React, { useContext, useState, useEffect } from "react";
import styles from "./ModalAkun.module.css";
import { ModalAkunContext } from "../../../context/ModalAkunContext";
import { ModalContext } from "../../../context/ModalContext";
import Button from "../../../elements/Button/Button";
import deleteIcon from "../../../assets/icons/delete.svg";
import Input from "../../../elements/Input/Input";
import iconVisibility from "../../../assets/icons/visibility_off.svg";
import useApi from "../../../api/useApi";
import close from "../../../assets/icons/close_black.svg";

const ModalAkun = ({ id }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { closeModalAkun } = useContext(ModalAkunContext);
  const { openModal } = useContext(ModalContext);
  const { response, error, loading, get } = useApi();
  console.log(response);
  console.log(error);
  console.log(loading);
  console.log(id);

  useEffect(() => {
    get(`https://647ca813c0bae2880ad10a5f.mockapi.io/balink/user/${id}`).catch(
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        {loading ? (
          <p>Loading...</p>
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
            <div className={styles.inputGroup}>
              <Input
                label="Nama Lengkap"
                type="text"
                id="fullName"
                name="fullName"
                value={response?.pengguna}
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
            <div className={styles.inputGroup}>
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
            <div className={styles.inputGroup}>
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
              label="Hapus"
              onClick={() => openModal()}
              color="white"
              icon={deleteIcon}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalAkun;
