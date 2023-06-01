import React, { useContext, useState } from "react";
import styles from "./ModalAkun.module.css";
import avatar from "../../../assets/images/avatar.png";
import { ModalAkunContext } from "../../../context/ModalAkunContext";
import Button from "../../../elements/Button/Button";
import deleteIcon from "../../../assets/icons/delete.svg";
import Input from "../../../elements/Input/Input";
import iconVisibility from "../../../assets/icons/visibility_off.svg";

const ModalAkun = () => {
  const userData = [
    {
      id: 1,
      username: "NurHak88",
      pengguna: "Nur Hakiki",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai ",
      email: "nurhak88@gmail.com",
      password: "12345678",
    },
    {
      id: 2,
      username: "MutSab75",
      pengguna: "Mutiara Sabrina",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai ",
      email: "mutsab75@gmail.com",
      password: "12345678",
    },
    {
      id: 3,
      username: "MadMil45",
      pengguna: "Made Mila",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
      email: "madmil45@gmail.com",
      password: "12345678",
    },
    {
      id: 4,
      username: "1Tuhumi2",
      pengguna: "Tuhfah Humaira",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
      email: "tuhumi12@gmail.com",
      password: "12345678",
    },
    {
      id: 5,
      username: "33Cribel",
      pengguna: "Cristoper Bella",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
      email: "cribel33@gmail.com",
      password: "12345678",
    },
    {
      id: 6,
      username: "JosWhee3",
      pengguna: "Joseph Wheeler",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
      email: "joswhee3@gmail.com",
      password: "12345678",
    },
    {
      id: 7,
      username: "YasJos99",
      pengguna: "Yasmien Joshua",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
      email: "yasjos99@gmail.com",
      password: "12345678",
    },
    {
      id: 8,
      username: "Andlumu7",
      pengguna: "Andre Lumut",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
      email: "email@gmail.com",
      password: "12345678",
    },
    {
      id: 9,
      username: "SanMase1",
      pengguna: "Sankurina Mase",
      telephone: "08123456789",
      alamat: "Jl. Hidup Damai",
      email: "email@gmail.com",
      password: "12345678",
    },
    {
      id: 10,
      username: "BraSki12",
      pengguna: "Brahmana Yaski",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
      email: "email@gmail.com",
      password: "12345678",
    },
    {
      id: 11,
      username: "tes",
      pengguna: "tes",
      telephone: "082121213434",
      alamat: "Jl. Hidup Damai",
      email: "email@gmail.com",
      password: "12345678",
    },
  ];
  const { closeModalAkun, modalId } = useContext(ModalAkunContext);
  const user = userData.find((item) => item.id === modalId);

  const [showPassword, setShowPassword] = useState(false); // Toggle state for password input

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <img src={avatar} alt="" className={styles.avatar} />
        <div className={styles.inputGroup}>
          <Input
            label="Nama Lengkap"
            type="text"
            id="fullName"
            name="fullName"
            value={user?.pengguna}
            readOnly
          />
          <Input
            label="Email address"
            type="email"
            id="email"
            name="email"
            value={user?.email}
            readOnly
          />
        </div>
        <div className={styles.inputGroup}>
          <Input
            label="Username"
            type="text"
            id="username"
            name="username"
            value={user?.username}
            readOnly
          />
          <Input
            label="Telephone"
            type="text"
            id="telephone"
            name="telephone"
            value={user?.telephone}
            readOnly
          />
        </div>
        <div className={styles.inputGroup}>
          <Input
            label="Password"
            type={showPassword ? "text" : "password"} // Show password if showPassword is true
            id="password"
            name="password"
            value={user?.password}
            icon={iconVisibility}
            onClick={togglePasswordVisibility}
            readOnly
          />

          <Input
            label="Alamat"
            type="text"
            id="alamat"
            name="alamat"
            value={user?.alamat}
            readOnly
          />
        </div>

        <Button
          label="Hapus"
          onClick={() => closeModalAkun()}
          color="white"
          icon={deleteIcon}
        />
      </div>
    </div>
  );
};

export default ModalAkun;
