import React, { useContext } from "react";
import styles from "./ModalAkun.module.css";
import avatar from "../../../assets/images/avatar.png";
import { ModalAkunContext } from "../../../context/ModalAkunContext";

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
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <img src={avatar} alt="" className="mb-3" />
        <div className="d-flex mb-3 gap-5">
          <div className="">
            <label htmlFor="fullName" className="form-label ">
              Nama Lengkap
            </label>
            <input
              type="text"
              className={`form-control ${styles.modalAkunInput}`}
              id="fullName"
              value={user?.pengguna}
              readOnly
            />
          </div>
          <div className="">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className={`form-control ${styles.modalAkunInput}`}
              id="email"
              value={user?.email}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex mb-3 gap-5">
          <div className="">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-control ${styles.modalAkunInput}`}
              id="username"
              value={user?.username}
              readOnly
            />
          </div>
          <div className="">
            <label htmlFor="telephone" className="form-label">
              Telephone
            </label>
            <input
              type="text"
              className={`form-control ${styles.modalAkunInput}`}
              id="telephone"
              value={user?.telephone}
              readOnly
            />
          </div>
        </div>
        <div className="d-flex mb-3 gap-5">
          <div className="">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${styles.modalAkunInput}`}
              id="password"
              value={user?.password}
              readOnly
            />
          </div>
          <div className="">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <input
              type="text"
              className={`form-control ${styles.modalAkunInput}`}
              id="alamat"
              value={user?.alamat}
              readOnly
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => closeModalAkun()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalAkun;
