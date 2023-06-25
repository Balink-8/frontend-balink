import React, { useEffect, useState } from "react";
import styles from "./TambahEvent.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import Filefoto from "../../assets/icons/drive_folder_upload.svg";
import info from "../../assets/icons/language.svg";
import cancel from "../../assets/icons/cancel.svg";
import save from "../../assets/icons/save.svg";
import edit from "../../assets/icons/edit_square_white.svg";
import Button from "../../elements/Button/Button";
import { Switch } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../utils/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import Modal from "react-modal";
import ModalSuksesLogo from "../../assets/images/ModalSuksesLogo.png";
import ModalGagalLogo from "../../assets/images/ModalGagalLogo.png";
import add from "../../assets/icons/add.svg";
import wisata from "../../assets/images/wisata.svg";

const EditEvent = () => {
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
    harga_tiket: 0,
    stok_tiket: 0,
  });
  const [toggle, setToggle] = useState(false);
  const [file, setFile] = useState();
  // modal
  const [modalSuksesIsOpen, setModalSuksesIsOpen] = useState(false);
  const [modalGagalIsOpen, setModalGagalIsOpen] = useState(false);

  const { response: event, loading, error, get, put } = useApi();
  const {
    response: artikel,
    loading: loadingartikel,
    error: errorartikel,
    get: getartikel,
    put: putartikel,
  } = useApi();

  const navigate = useNavigate();
  const { id } = useParams();

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

  const paragraphsArtikel = artikel?.data.deskripsi?.split("\n\n");

  useEffect(() => {
    get(`/event/${id}`).catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  // get artikel
  useEffect(() => {
    if (event?.data.artikel_id) {
      getartikel(
        `/artikel/${
          localStorage.getItem("artikel_id")
            ? localStorage.getItem("artikel_id")
            : event?.data.artikel_id
        }`
      ).catch((error) => {
        // Handle error
        console.error(error);
      });
    }
  }, [event?.data.artikel_id, localStorage.getItem("artikel_id")]);

  useEffect(() => {
    setValues({
      artikel_id: localStorage.getItem("artikel_id"),
      gambar: localStorage.getItem("gambar"),
      nama: localStorage.getItem("nama")
        ? localStorage.getItem("nama")
        : event?.data.nama,
      deskripsi: localStorage.getItem("deskripsi")
        ? localStorage.getItem("deskripsi")
        : event?.data.deskripsi,
      lokasi: localStorage.getItem("lokasi")
        ? localStorage.getItem("lokasi")
        : event?.data.lokasi,
      link_lokasi: localStorage.getItem("link_lokasi")
        ? localStorage.getItem("link_lokasi")
        : event?.data.link_lokasi,
      waktu_mulai: localStorage.getItem("waktu_mulai")
        ? localStorage.getItem("waktu_mulai")
        : event?.data.waktu_mulai,
      waktu_selesai: localStorage.getItem("waktu_selesai")
        ? localStorage.getItem("waktu_selesai")
        : event?.data.waktu_selesai,
      tanggal_mulai: localStorage.getItem("tanggal_mulai")
        ? localStorage.getItem("tanggal_mulai")
        : event?.data.tanggal_mulai,
      tanggal_selesai: localStorage.getItem("tanggal_selesai")
        ? localStorage.getItem("tanggal_selesai")
        : event?.data.tanggal_selesai,
      harga_tiket: localStorage.getItem("harga_tiket")
        ? localStorage.getItem("harga_tiket")
        : event?.data.harga_tiket,
      stok_tiket: localStorage.getItem("stok_tiket")
        ? localStorage.getItem("stok_tiket")
        : event?.data.stok_tiket,
    });
  }, [event]);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const onSubmit = () => {
    localStorage.removeItem("artikel_id", values.artikel_id);
    localStorage.removeItem("gambar", values.gambar);
    localStorage.removeItem("nama", values.nama);
    localStorage.removeItem("deskripsi", values.deskripsi);
    localStorage.removeItem("lokasi", values.lokasi);
    localStorage.removeItem("link_lokasi", values.nama);
    localStorage.removeItem("waktu_mulai", values.waktu_mulai);
    localStorage.removeItem("waktu_selesai", values.waktu_selesai);
    localStorage.removeItem("tanggal_mulai", values.tanggal_mulai);
    localStorage.removeItem("tanggal_selesai", values.tanggal_selesai);
    localStorage.removeItem("harga_tiket", values.harga_tiket);
    localStorage.removeItem("stok_tiket", values.stok_tiket);

    const harga_tiket = parseInt(values.harga_tiket);
    const stok_tiket = parseInt(values.stok_tiket);
    put(`/event/${id}`, {
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
  };

  const onCancel = (e) => {
    navigate(-1);
  };

  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const getFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onArtikel = (e) => {
    navigate("/tentang-artikel");
  };

  const handleOnKeyUp = (e) => {
    localStorage.setItem(e.target.name, values[e.target.name]);
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
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage={error.message} />
      ) : (
        <div className={styles.tambahEventContainer}>
          <h1 className="headline-small-semibold">Edit Event</h1>

          <div className="row pb-4">
            <div className="col-4">
              <div className="d-flex justify-content-center">
                {/* upload foto */}
                <div className={styles.containerEvent}>
                  <div className={styles.imgArea}>
                    {values.gambar ? (
                      <img
                        id="uploadedImage"
                        src={file ? file : values.gambar}
                      />
                    ) : (
                      <img id="uploadedImage" src={wisata} />
                    )}
                  </div>
                  <div className="d-flex justify-content-center">
                    <label htmlFor={"gambar"}>
                      <Button
                        label="Pilih Foto"
                        icon={Filefoto}
                        color="brown"
                        onClick={() =>
                          document.getElementById("gambar").click()
                        }
                      />
                    </label>
                    <input
                      id={"gambar"}
                      className={styles.inputPhoto}
                      type={"file"}
                      name={"gambar"}
                      onChange={getFile}
                      onKeyUp={handleOnKeyUp}
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <p> select Your Photo max 2mb.</p>
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
                    id={"nama"}
                    name={"nama"}
                    value={values.nama}
                    onChange={handleOnChange}
                    onKeyUp={handleOnKeyUp}
                    label={"Judul Event"}
                  />
                </div>
              </div>

              <div className="mt-3">
                <div className={styles.inputBox}>
                  <Textarea
                    rows={12}
                    placeholder={"Masukkan deskripsi event"}
                    className={styles.input}
                    id={"deskripsi"}
                    name={"deskripsi"}
                    value={values.deskripsi}
                    onChange={handleOnChange}
                    onKeyUp={handleOnKeyUp}
                  />
                  <label className={styles.inputTitle}>Deskripsi</label>
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
                              {paragraphsArtikel?.map((text, index) => (
                                <p
                                  key={index}
                                  id={`articleDescription${index}`}
                                  className="body-small-regular"
                                  style={{
                                    maxWidth: "400px",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
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
                          id={"lokasi"}
                          name={"lokasi"}
                          value={values.lokasi}
                          onChange={handleOnChange}
                          onKeyUp={handleOnKeyUp}
                          label={"Lokasi"}
                        />
                      </div>
                    </div>

                    <div className="mt-24">
                      <div className={styles.inputBox}>
                        <Input
                          type={"text"}
                          placeholder={"Masukkan link Google Maps lokasi"}
                          className={styles.input}
                          id={"link_lokasi"}
                          name={"link_lokasi"}
                          value={values.link_lokasi}
                          onChange={handleOnChange}
                          onKeyUp={handleOnKeyUp}
                          label={"Google Maps"}
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
                            id={"tanggal_mulai"}
                            name={"tanggal_mulai"}
                            value={values.tanggal_mulai}
                            onChange={handleOnChange}
                            onKeyUp={handleOnKeyUp}
                            label={"Tanggal event mulai"}
                          />
                        </div>
                      </div>

                      <div className="mt-24 col-md-6">
                        <div className={styles.inputBox}>
                          <Input
                            type={"text"}
                            placeholder={"Masukkan tanggal selesai"}
                            className={styles.input}
                            id={"tanggal_selesai"}
                            name={"tanggal_selesai"}
                            value={values.tanggal_selesai}
                            onChange={handleOnChange}
                            onKeyUp={handleOnKeyUp}
                            label={"Tanggal event selesai"}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row g-2">
                      <div className="mt-24 col-md-6">
                        <div className={styles.inputBox}>
                          <Input
                            type={"text"}
                            placeholder={"Masukan waktu Mulai"}
                            className={styles.input}
                            id={"waktu_mulai"}
                            name={"waktu_mulai"}
                            value={values.waktu_mulai}
                            onChange={handleOnChange}
                            onKeyUp={handleOnKeyUp}
                            label={"Waktu Mulai"}
                          />
                        </div>
                      </div>

                      <div className="mt-24 col-md-6">
                        <div className={styles.inputBox}>
                          <Input
                            type={"text"}
                            placeholder={"Masukan waktu Selesai"}
                            className={styles.input}
                            id={"waktu_selesai"}
                            name={"waktu_selesai"}
                            value={values.waktu_selesai}
                            onChange={handleOnChange}
                            onKeyUp={handleOnKeyUp}
                            label={"Waktu Selesai"}
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
                      <Switch onClick={toggler} />
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
                            id={"harga_tiket"}
                            name={"harga_tiket"}
                            value={values.harga_tiket}
                            onChange={handleOnChange}
                            onKeyUp={handleOnKeyUp}
                            label={"Harga"}
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
                id="cancelButton"
                label="Batal"
                color="white"
                icon={cancel}
                onClick={onCancel}
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
                <h4
                  id="modalSuksesTitle"
                  className="title-large-semibold mb-16"
                >
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
      )}
    </div>
  );
};

export default EditEvent;
