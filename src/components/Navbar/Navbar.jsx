import React from "react";
import avatar from "../../assets/images/avatar.png";
import notification from "../../assets/icons/notifications.svg";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router";

const Navbar = () => {
  const { pathname } = useLocation();

  const setTitle = (pathname) => {
    if (pathname === "/dashboard") {
      return "Dashboard";
    } else if (pathname.includes("akun")) {
      return "Akun";
    } else if (pathname.includes("transaksi/produk")) {
      return "Transaksi Produk";
    } else if (pathname.includes("transaksi/event")) {
      return "Transaksi Event";
    } else if (pathname.includes("transaksi")) {
      return "Transaksi";
    } else if (pathname.includes("event")) {
      return "Event";
    } else if (pathname.includes("tentang-artikel")) {
      return "Artikel tentang Event";
    } else if (pathname.includes("produk")) {
      return "Produk";
    } else if (pathname.includes("kategori")) {
      return "Kategori";
    } else if (pathname.includes("promo")) {
      return "Promo";
    } else if (pathname.includes("artikel")) {
      return "Artikel";
    } else if (pathname.includes("profile")) {
      return "Profile";
    } else {
      return "Dashboard";
    }
  };
  return (
    <nav id="navbar" className={`${styles.navbar} fixed-top offset-2`}>
      <div className="d-flex align-items-center justify-content-between">
        <a
          id="navbarBrand"
          className={`${styles.navbarBrand} headline-small-semibold`}
        >
          {setTitle(pathname)}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
