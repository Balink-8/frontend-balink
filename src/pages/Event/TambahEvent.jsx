import React, { useState } from "react";
import styles from "./TambahEvent.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import Filefoto from "../../assets/icons/drive_folder_upload.svg";
import info from "../../assets/icons/language.svg";
import reset from "../../assets/icons/restart_alt.svg";
import save from "../../assets/icons/save.svg";
import add from "../../assets/icons/add.svg";
import { Switch } from "antd";
import Button from "../../elements/Button/Button";
import useApi from "../../api/useApi";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import ModalSuksesLogo from "../../assets/images/ModalSuksesLogo.png";
import ModalGagalLogo from "../../assets/images/ModalGagalLogo.png";

const TambahEvent = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    artikel_id: "",
    gambar: "",
    nama: "",
    deskripsi: "",
    lokasi: "",
    link_lokasi: "",
    waktu_mulai: "",
    waktu_selesai: "",
    tanggal_mulai: "",
    tanggal_selesai: "",
    harga_tiket: "",
    stok_tiket: "",
  });

  const [errors, setErrors] = useState({
    gambar: false,
    nama: false,
    deskripsi: false,
    lokasi: false,
    link_lokasi: false,
    waktu_mulai: false,
    waktu_selesai: false,
    tanggal_mulai: false,
    tanggal_selesai: false,
    harga_tiket: false,
    stok_tiket: false,
  });

  useEffect(() => {
    setValues({
      artikel_id: localStorage.getItem("artikel_id"),
      gambar: localStorage.getItem("gambar"),
      nama: localStorage.getItem("nama"),
      deskripsi: localStorage.getItem("deskripsi"),
      lokasi: localStorage.getItem("lokasi"),
      link_lokasi: localStorage.getItem("link_lokasi"),
      waktu_mulai: localStorage.getItem("waktu_mulai"),
      waktu_selesai: localStorage.getItem("waktu_selesai"),
      tanggal_mulai: localStorage.getItem("tanggal_mulai"),
      tanggal_selesai: localStorage.getItem("tanggal_selesai"),
      harga_tiket: localStorage.getItem("harga_tiket"),
      stok_tiket: localStorage.getItem("stok_tiket"),
    });
  }, []);

  const { response: event, loading, error, post } = useApi();

  const [toggle, setToggle] = useState(false);
  const [file, setFile] = useState();

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
    console.log(toggle);
  };

  const onSubmit = (e) => {
    const newErrors = {};

    if (values.artikel_id.trim() === "") {
      newErrors.artikel_id = true;
    } else {
      newErrors.artikel_id = false;
    }

    if (values.gambar.trim() === "") {
      newErrors.gambar = true;
    } else {
      newErrors.gambar = false;
    }

    if (values.nama.trim() === "") {
      newErrors.nama = true;
    } else {
      newErrors.nama = false;
    }

    if (values.deskripsi.trim() === "") {
      newErrors.deskripsi = true;
    } else {
      newErrors.deskripsi = false;
    }

    if (values.lokasi.trim() === "") {
      newErrors.lokasi = true;
    } else {
      newErrors.lokasi = false;
    }

    if (values.link_lokasi.trim() === "") {
      newErrors.link_lokasi = true;
    } else {
      newErrors.link_lokasi = false;
    }

    if (values.waktu_mulai.trim() === "") {
      newErrors.waktu_mulai = true;
    } else {
      newErrors.waktu_mulai = false;
    }

    if (values.waktu_selesai.trim() === "") {
      newErrors.waktu_selesai = true;
    } else {
      newErrors.waktu_selesai = false;
    }

    if (values.tanggal_mulai.trim() === "") {
      newErrors.tanggal_mulai = true;
    } else {
      newErrors.tanggal_mulai = false;
    }

    if (values.tanggal_selesai.trim() === "") {
      newErrors.tanggal_selesai = true;
    } else {
      newErrors.tanggal_selesai = false;
    }
    setErrors(newErrors);

    if (toggle) {
      if (values.harga_tiket.trim() === "") {
        newErrors.harga_tiket = true;
      }
      if (values.stok_tiket.trim() === "") {
        newErrors.stok_tiket = true;
      }
      setErrors(newErrors);
    } else {
      newErrors.harga_tiket = false;
      newErrors.stok_tiket = false;
      setErrors(newErrors);
    }

    if (!Object.values(newErrors).some((error) => error)) {
      const harga_tiket = parseInt(values.harga_tiket, 10);
      const stok_tiket = parseInt(values.stok_tiket, 10);
      post("/event", {
        ...values,
        harga_tiket: harga_tiket,
        stok_tiket: stok_tiket,
      })
        .then(() => {
          openModalSukses();
        })
        .catch((error) => {
          openModalGagal();
          console.error(error);
        });
      console.log(values);
    }

    localStorage.removeItem("artikel_id", values.artikel_id);
    localStorage.removeItem("gambar", values.gambar);
    localStorage.removeItem("nama", values.nama);
    localStorage.removeItem("deskripsi", values.deskripsi);
    localStorage.removeItem("lokasi", values.lokasi);
    localStorage.removeItem("link_lokasi", values.link_lokasi);
    localStorage.removeItem("waktu_mulai", values.waktu_mulai);
    localStorage.removeItem("waktu_selesai", values.waktu_selesai);
    localStorage.removeItem("tanggal_mulai", values.tanggal_mulai);
    localStorage.removeItem("tanggal_selesai", values.tanggal_selesai);
    localStorage.removeItem("harga_tiket", values.harga_tiket);
    localStorage.removeItem("stok_tiket", values.stok_tiket);
  };

  const onReset = (e) => {
    localStorage.removeItem("artikel_id", values.artikel_id);
    localStorage.removeItem("gambar", values.gambar);
    localStorage.removeItem("nama", values.nama);
    localStorage.removeItem("deskripsi", values.deskripsi);
    localStorage.removeItem("lokasi", values.lokasi);
    localStorage.removeItem("link_lokasi", values.link_lokasi);
    localStorage.removeItem("waktu_mulai", values.waktu_mulai);
    localStorage.removeItem("waktu_selesai", values.waktu_selesai);
    localStorage.removeItem("tanggal_mulai", values.tanggal_mulai);
    localStorage.removeItem("tanggal_selesai", values.tanggal_selesai);
    localStorage.removeItem("harga_tiket", values.harga_tiket);
    localStorage.removeItem("stok_tiket", values.stok_tiket);

    setValues({
      artikel_id: "",
      gambar: "",
      nama: "",
      deskripsi: "",
      lokasi: "",
      link_lokasi: "",
      waktu_mulai: "",
      waktu_selesai: "",
      tanggal_mulai: "",
      tanggal_selesai: "",
      harga_tiket: 0,
      stok_tiket: 0,
    });
    setFile("");
  };

  const onArtikel = (e) => {
    navigate("/tentang-artikel");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: true,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleOnKeyUp = (e) => {
    localStorage.setItem(e.target.name, values[e.target.name]);
  };

  const getFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    const reader = new FileReader();

    // reader.onloadend = () => {
    //   const base64String = reader.result;
    //   localStorage.setItem("gambar", base64String);
    // };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    localStorage.setItem(e.target.name, e.target.files[0]);
    console.log(e.target.files)
  };

  // get artikel
  const {
    response: artikel,
    loading: loadingartikel,
    error: errorartikel,
    get,
  } = useApi();

  useEffect(() => {
    get(`/artikel/${localStorage.getItem("artikel_id")}`)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }, [localStorage.getItem("artikel_id")]);

  console.log(localStorage.getItem("artikel_id"));
  const paragraph = artikel?.data?.deskripsi?.split("\n\n");

  // modal
  const [modalSuksesIsOpen, setModalSuksesIsOpen] = useState(false);
  const [modalGagalIsOpen, setModalGagalIsOpen] = useState(false);

  const customStylesConfirmation = {
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

  const openModalSukses = () => {
    setModalSuksesIsOpen(true);
    setTimeout(() => {
      closeModalSukses();
      navigate("/event");
    }, 1500);
  };

  const closeModalSukses = () => {
    setModalSuksesIsOpen(false);
  };

  const openModalGagal = () => {
    setModalGagalIsOpen(true);
    setTimeout(() => {
      closeModalGagal();
    }, 1500);
  };

  const closeModalGagal = () => {
    setModalGagalIsOpen(false);
  };

  return (
    <div className={styles.tambahEventContainer}>
      <h1 className="headline-small-semibold">Buat event baru</h1>

      <div className="row pb-4">
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {/* upload foto */}
            <div className={styles.containerEvent}>
              <div className={styles.imgArea}>
                <img id="uploadedImage" src={values.gambar} />
                <img id="uploadedImage" src={file} />
              </div>
              <div className="d-flex justify-content-center">
                <label htmlFor="gambar">
                  <Button
                    id="pilihFotoButton"
                    label="Pilih Foto"
                    icon={Filefoto}
                    color="brown"
                    onClick={() => document.getElementById("gambar").click()}
                  />
                </label>
                <input
                  id="gambar"
                  className={styles.inputPhoto}
                  type="file"
                  name="gambar"
                  // value={values.gambar}
                  onChange={getFile}
                  onKeyUp={handleOnKeyUp}
                />
              </div>
              <div className="d-flex justify-content-center mt-3">
                <p> select Your Photo Profile max 2mb.</p>
              </div>
            </div>
          </div>
        </div>
        {/* title + desc */}
        <div className="col">
          <div className="mt-3">
            <div className={styles.inputBox}>
              <Input
                type={"text"}
                placeholder={"Masukkan judul event"}
                className={styles.input}
                id="nama"
                name="nama"
                value={values.nama}
                onChange={handleOnChange}
                onKeyUp={handleOnKeyUp}
                label={"Judul Event"}
                error={errors.nama}
              />
            </div>
          </div>

          <div className="mt-3">
            <div className={styles.inputBox}>
              <Textarea
                rows={12}
                placeholder={"Masukkan deskripsi event"}
                className={
                  errors.deskripsi
                    ? `${styles.errorInput} ${styles.input}`
                    : styles.input
                }
                id="deskripsi"
                name={"deskripsi"}
                value={values.deskripsi}
                onChange={handleOnChange}
                onKeyUp={handleOnKeyUp}
              />
              <label
                className={
                  errors.deskripsi
                    ? `${styles.errorTitle} ${styles.inputTitle}`
                    : styles.inputTitle
                }
              >
                Deskripsi
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* detail event */}
      <div className="pb-4">
        <div className={styles.containerEvent}>
          <div className="container">
            <h1 className="body-large-semibold">Detail Event</h1>

            <div className="row py-3">
              <div className="col-lg-6">
                <img src={info} alt="info" />
                <span className="body-medium-semibold"> Info Lengkap</span>
                <div className="d-grid col-12 ">
                  {artikel ? (
                    <div>
                      <div className={`my-3 ${styles.layoutInfo}`}>
                        <div>
                          <img src={artikel?.data?.gambar} alt="" />
                        </div>
                        <div>
                          <p className="body-medium-semibold">
                            {artikel?.data?.judul}
                          </p>
                          {paragraph?.map((text, index) => (
                            <p
                              key={index}
                              id={`articleDescription${index}`}
                              className="body-small-regular"
                            >
                              {text}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="w-100">
                        <div className="d-grid">
                          <Button
                            label="Ganti Artikel"
                            color="brown"
                            icon={add}
                            onClick={onArtikel}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Button
                      label="Tambah Artikel"
                      color="brown"
                      icon={add}
                      onClick={onArtikel}
                    />
                  )}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mt-24">
                  <div className={styles.inputBox}>
                    <Input
                      type={"text"}
                      placeholder={"Masukkan alamat lokasi"}
                      className={styles.input}
                      id="lokasi"
                      name="lokasi"
                      value={values.lokasi}
                      onChange={handleOnChange}
                      onKeyUp={handleOnKeyUp}
                      label={"Lokasi"}
                      error={errors.lokasi}
                    />
                  </div>
                </div>

                <div className="mt-24">
                  <div className={styles.inputBox}>
                    <Input
                      type={"text"}
                      placeholder={"Masukkan link Google Maps lokasi"}
                      className={styles.input}
                      id="link_lokasi"
                      name="link_lokasi"
                      value={values.link_lokasi}
                      onChange={handleOnChange}
                      onKeyUp={handleOnKeyUp}
                      label={"Google Maps"}
                      error={errors.link_lokasi}
                    />
                  </div>
                </div>

                <div className="row g-2">
                  <div className="mt-24 col-md-6">
                    <div className={styles.inputBox}>
                      <Input
                        type={"text"}
                        placeholder={"Masukkan tanggal mulai"}
                        className={styles.input}
                        id="tanggal_mulai"
                        name="tanggal_mulai"
                        value={values.tanggal_mulai}
                        onChange={handleOnChange}
                        onKeyUp={handleOnKeyUp}
                        label={"Tanggal event mulai"}
                        error={errors.tanggal_mulai}
                      />
                    </div>
                  </div>

                  <div className="mt-24 col-md-6">
                    <div className={styles.inputBox}>
                      <Input
                        type={"text"}
                        placeholder={"Masukkan tanggal selesai"}
                        className={styles.input}
                        id="tanggal_selesai"
                        name="tanggal_selesai"
                        value={values.tanggal_selesai}
                        onChange={handleOnChange}
                        onKeyUp={handleOnKeyUp}
                        label={"Tanggal event selesai"}
                        error={errors.tanggal_selesai}
                      />
                    </div>
                  </div>
                </div>

                <div className="row g-2">
                  <div className="mt-24 col-md-6">
                    <div className={styles.inputBox}>
                      <Input
                        type={"text"}
                        placeholder={"Masukkan waktu mulai"}
                        className={styles.input}
                        id="waktu_mulai"
                        name="waktu_mulai"
                        value={values.waktu_mulai}
                        onChange={handleOnChange}
                        onKeyUp={handleOnKeyUp}
                        label={"Waktu Mulai"}
                        error={errors.waktu_mulai}
                      />
                    </div>
                  </div>

                  <div className="mt-24 col-md-6">
                    <div className={styles.inputBox}>
                      <Input
                        type={"text"}
                        placeholder={"Masukkan waktu selesai"}
                        className={styles.input}
                        id="waktu_selesai"
                        name="waktu_selesai"
                        value={values.waktu_selesai}
                        onChange={handleOnChange}
                        onKeyUp={handleOnKeyUp}
                        label={"Waktu Selesai"}
                        error={errors.waktu_selesai}
                      />
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* berbayar */}
      <div className="pb-4">
        <div className={styles.containerEvent}>
          <div className="container">
            <h1 className="body-large-semibold">Ticket Berbayar</h1>

            <div className="row">
              <div className="col-lg-6">
                <p className="body-smaill-regular">
                  Harga ticket aktif dan non aktif
                </p>
              </div>

              <div className="col-lg-6">
                <div className="d-flex justify-content-end">
                  <Switch onClick={toggler} id="switch" />
                </div>
              </div>
            </div>
            {toggle && (
              <div className="row py-3">
                <div className="col-lg-6">
                  <div className="m-2">
                    <div className={styles.inputBox}>
                      <Input
                        type={"number"}
                        placeholder={"masukkan harga jenis"}
                        className={styles.input}
                        id="harga_tiket"
                        name="harga_tiket"
                        value={values.harga_tiket}
                        onChange={handleOnChange}
                        onKeyUp={handleOnKeyUp}
                        label={"Harga"}
                        error={toggle ? errors.harga_tiket : false}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="m-2">
                    <div className={styles.inputBox}>
                      <Input
                        type={"number"}
                        placeholder={"masukkan jumlah"}
                        className={styles.input}
                        id={"stok_tiket"}
                        name={"stok_tiket"}
                        value={values.stok_tiket}
                        onChange={handleOnChange}
                        onKeyUp={handleOnKeyUp}
                        label={"Jumlah"}
                        error={toggle ? errors.stok_tiket : false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* button */}
      <div className="d-flex justify-content-end align-items-center gap-3 pt-5">
        <div className="d-grid col-3 ">
          <Button
            id="reset"
            label="Reset"
            color="white"
            icon={reset}
            onClick={onReset}
          />
        </div>
        <div className="d-grid col-3 ">
          <Button
            id="submitButton"
            label="Simpan"
            color="brown"
            icon={save}
            onClick={onSubmit}
          />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalSuksesIsOpen}
        onRequestClose={closeModalSukses}
        contentLabel="Success Modal"
        style={customStylesConfirmation}
        id="modalSukses"
      >
        <div
          id="modalSuksesContainer"
          className={`d-flex justify-content-center align-items-center`}
        >
          <div
            id="modalSuksesContent"
            className={`d-flex flex-column justify-content-center align-items-center`}
          >
            <img
              id="modalSuksesLogo"
              src={ModalSuksesLogo}
              alt="success"
              className="mb-16"
            />
            <h4 id="modalSuksesTitle" className="title-large-semibold mb-16">
              Berhasil Disimpan
            </h4>
            <p id="modalSuksesMessage" className="body-small-regular mb-16">
              Data yang anda buat sudah berhasil disimpan
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalGagalIsOpen}
        onRequestClose={closeModalGagal}
        contentLabel="Fail Modal"
        style={customStylesConfirmation}
      >
        <div
          id="modalGagalContainer"
          className={`d-flex justify-content-center align-items-center`}
        >
          <div
            id="modalGagalContent"
            className={`d-flex flex-column justify-content-center align-items-center`}
          >
            <img
              id="modalGagalLogo"
              src={ModalGagalLogo}
              alt="success"
              className="mb-16"
            />
            <h4 id="modalGagalTitle" className="title-large-semibold mb-16">
              Gagal Disimpan
            </h4>
            <p id="modalGagalText" className="body-small-regular mb-16">
              Data yang anda buat Gagal disimpan
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TambahEvent;
