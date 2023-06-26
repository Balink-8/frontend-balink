import React, { useState } from "react";
import styles from "./LandingPage.module.css";
import balink from "../../assets/assetsLandingPage/balink.svg";
import whatsapp from "../../assets/assetsLandingPage/whatsapp.svg";
import instagram from "../../assets/assetsLandingPage/instagram.svg";
import email from "../../assets/assetsLandingPage/email.svg";
import gps from "../../assets/assetsLandingPage/gps.svg";
import call from "../../assets/assetsLandingPage/call.svg";
import at from "../../assets/assetsLandingPage/at_email.svg";
import maps from "../../assets/assetsLandingPage/maps.svg";
import { HashLink as Link } from "react-router-hash-link";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";

const HubungiKami = () => {
  const [values, setValues] = useState({
    namaDepan: "",
    namaBelakang: "",
    email: "",
    pesan: "",
  });

  const onSubmit = (e) => {
    setValues({
      namaDepan: "",
      namaBelakang: "",
      email: "",
      pesan: "",
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
      {/* header */}
      <header className={styles.navbarLandingpage}>
        <img
          className={styles.logo}
          src={balink}
          alt="logo"
          weight="155.71"
          height={50}
        />
        <nav className={styles.navbarLink}>
          <ul className="title-medium-regular">
            <li className="mx-8">
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li className="mx-8">
              <Link to="/" className={styles.link} smooth>
                Tentang Kami
              </Link>
            </li>
            <li className="mx-8">
              <Link to="/" className={styles.link} smooth>
                Download
              </Link>
            </li>
            <li className="mx-8">
              <Link to="#" className={styles.link}>
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* jumbotron */}
      <div className={styles.bgContact}>
        <div className="container py-5">
          <div className="px-4 py-5 my-5 text-center">
            <h1 className={`display-large-semibold ${styles.textJumbotron}`}>
              Hubungi Kami
            </h1>
          </div>
        </div>
      </div>

      {/* hubungikami */}
      <div className="card-group">
        <div className="card">
          <img src={maps} alt="maps" />
        </div>

        <div className="card">
          <div className={styles.bgTemui}>
            <div className="px-4 py-5 my-5 text-center">
              <h5 className="pt-5 display-small-semibold">Temui Kami</h5>
              <div className="py-5">
                <p className="body-large-regular">
                  {" "}
                  <img src={call} alt="call" /> +62 81234567891
                </p>
                <p className="body-large-regular">
                  {" "}
                  <img src={at} alt="at_email" />
                  Balink@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="ps-4 my-5">
            <h5 className="display-small-semibold"> Lemparkan Kami </h5>
            <form className="needs-validation" noValidate="">
              <div className="col-11 mt-3">
                <div className={styles.inputBox}>
                  <Input
                    type={"text"}
                    placeholder={"Masukkan nama depan"}
                    className={styles.input}
                    id={"namaDepan"}
                    name={"namaDepan"}
                    value={values.namaDepan}
                    onChange={handleOnChange}
                    label={"Nama Depan"}
                  />
                </div>
              </div>

              <div className="col-11 mt-3">
                <div className={styles.inputBox}>
                  <Input
                    type={"text"}
                    placeholder={"Masukkan nama belakang"}
                    className={styles.input}
                    id={"namaBelakang"}
                    name={"namaBelakang"}
                    value={values.namaBelakang}
                    onChange={handleOnChange}
                    label={"Nama Belakang"}
                  />
                </div>
              </div>

              <div className="col-11 mt-3">
                <div className={styles.inputBox}>
                  <Input
                    type={"email"}
                    placeholder={"Masukkan email"}
                    className={styles.input}
                    id={"email"}
                    name={"email"}
                    value={values.email}
                    onChange={handleOnChange}
                    label={"Email"}
                  />
                </div>
              </div>

              <div className="col-11 mt-3">
                <div className={styles.inputBox}>
                  <label className={styles.inputTitle}> Pesan </label>
                  <Textarea
                    rows={2}
                    placeholder={"Tuliskan Pesan"}
                    className={styles.input}
                    id={"pesan"}
                    name={"pesan"}
                    value={values.pesan}
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className="mt-3">
                <button
                  type="button"
                  onClick={onSubmit}
                  className={styles.buttonKirim}
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className={`${styles.bgFooter} ${styles.textFooter}`}>
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-lg-5">
              <img
                className={styles.logo}
                src={balink}
                alt="logo"
                weight="155.71"
                height={50}
              />
              <div className="col-sm-6 my-3">
                <p className="label-medium-regular">
                  Desa Tukadmungga, Kec. Buleleng, Kabupaten Buleleng, Bali
                  81119
                </p>
              </div>
            </div>

            <div className="col-lg-2">
              <ul className="list-unstyled mb-0 body-large-regular">
                <li>
                  <Link to="#" className={styles.link}>
                    Nearby
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    Filter
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    Report
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2">
              <ul className="list-unstyled mb-0 body-large-regular">
                <li>
                  <Link to="#" className={styles.link}>
                    Showcase
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    Widget Kit
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3">
              <ul className="list-unstyled mb-0 body-large-regular">
                <li>
                  <Link to="#" className={styles.link}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    GetStarted
                  </Link>
                </li>
                <li>
                  <Link to="#" className={styles.link}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className="text-center">
          <div>
            <a className="btn" href="#!" role="button">
              <img src={whatsapp} alt="whatsapp" width={25} height={25} />
            </a>
            <a className="btn" href="#!" role="button">
              <img src={instagram} alt="instagram" width={25} height={25} />
            </a>
            <a className="btn" href="#!" role="button">
              <img src={email} alt="email" width={25} height={25} />
            </a>
            <a className="btn" href="#!" role="button">
              <img src={gps} alt="gps" width={25} height={25} />
            </a>
          </div>
          <div className="body-large-regular p-3">Copyright 2023</div>
        </div>
      </footer>
    </div>
  );
};

export default HubungiKami;
