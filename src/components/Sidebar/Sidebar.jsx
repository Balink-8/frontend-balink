import React, { useState } from "react";
import logo from "../../assets/logo/Balink 2 1.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import person from "../../assets/icons/person.svg";
import theater_comedy from "../../assets/icons/theater_comedy.svg";
import receipt_long from "../../assets/icons/receipt_long.svg";
import local_activity from "../../assets/icons/local_activity.svg";
import article from "../../assets/icons/article.svg";
import home from "../../assets/icons/home.svg";
import logout from "../../assets/icons/logout.svg";
import storefront from "../../assets/icons/storefront.svg";
import folder_copy from "../../assets/icons/folder_copy.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Modal from "react-modal";
import Button from "../../elements/Button/Button";
import close from "../../assets/icons/close.svg";
import check from "../../assets/icons/check.svg";
import axios from "axios";

const Sidebar = () => {
  const [modalLogoutIsOpen, setModalLogoutIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
      padding: "60px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      zIndex: "9999",
    },
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    navigate("/login");
  };

  return (
    <div className={`${styles.sidebar} d-flex`}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3"
        style={{ width: 280, height: "100vh" }}
      >
        <Link
          to="/dashboard"
          className="d-flex align-items-center gap-5 mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img src={logo} alt="img" />
        </Link>
        <br />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={dashboard} alt="" className="img" />
              <span id="dashboard">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/akun"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={person} alt="" className="img" />
              <span id="akun">Akun</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={theater_comedy} alt="" className="img" />
              <span id="event">Event</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/produk"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={storefront} alt="" className="img" />
              <span id="produk">Produk</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kategori"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={folder_copy} alt="" className="img" />
              <span id="kategori">Kategori</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transaksi"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={receipt_long} alt="" className="img" />
              <span id="transaksi">Transaksi</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/promo"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={local_activity} alt="" className="img" />
              <span id="promo">Promo</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/artikel"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={article} alt="" className="img" />
              <span id="artikel">Artikel</span>
            </NavLink>
          </li>
          <hr className={`${styles.garis}`} />
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} nav-link d-flex align-item-center gap-3 ${styles.active}`
                  : `${styles.navLink} nav-link d-flex align-item-center gap-3`
              }
            >
              <img src={home} alt="" className="img" />
              <span id="profile">Profile</span>
            </NavLink>
          </li>
        </ul>
        <div className="exit">
          <Link
            to="#"
            className="d-flex align-item-center gap-3 text-decoration-none"
            onClick={() => setModalLogoutIsOpen(true)}
          >
            <img src={logout} alt="" className="img" />
            <span className="text-danger" id="keluar">
              Keluar
            </span>
          </Link>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalLogoutIsOpen}
          style={customStyles}
          contentLabel="Logout Modal"
          onRequestClose={() => setModalLogoutIsOpen(false)}
        >
          {" "}
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
                Apakah anda yakin untuk Logout?
              </h4>
              <p className="body-small-regular text-center">
                Jika anda logout maka semua data yang ada disini akan hilang dan
                tidak dapat dikembalikan lagi
              </p>
              <p className="body-small-regular text-center">
                Apakah anda tetap ingin Logout?
              </p>
              <div className="d-flex gap-5 justify-content-center mt-32">
                <div className="d-grid col-6">
                  <Button
                    id="modalLogoutYesButton"
                    label="Yes"
                    color="white"
                    icon={check}
                    onClick={() => handleLogout()}
                  />
                </div>
                <div className="d-grid col-6">
                  <Button
                    id="modalLogoutCancelButton"
                    label="Cancel"
                    color="brown"
                    icon={close}
                    onClick={() => setModalLogoutIsOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>{" "}
        </Modal>
      </div>
    </div>
  );
};

export default Sidebar;
