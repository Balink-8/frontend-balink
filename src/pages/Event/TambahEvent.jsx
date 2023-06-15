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
import { useNavigate } from "react-router";

const TambahEvent = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    artikel_id: "2",
    gambar: "",
    nama: "",
    deskripsi: "",
    lokasi: "",
    link_lokasi: "",
    waktu_mulai: "",
    waktu_selesai: "",
    tanggal_mulai: "12 Desember 2023",
    tanggal_selesai: "12 Desember 2023",
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

  const { response: event, loading, error, post } = useApi();

  const [toggle, setToggle] = useState(false);
  const [file, setFile] = useState();

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
    console.log(toggle);
  };

  const onSubmit = (e) => {
    const newErrors = {};

    Object.keys(values).forEach((key) => {
      if (values[key].trim() === "") {
        newErrors[key] = true;
      } else {
        newErrors[key] = false;
      }
    });

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

    // if (!Object.values(newErrors).some((error) => error)) {
    //   setValues({
    //     artikel_id: "2",
    //     gambar: "",
    //     nama: "",
    //     deskripsi: "",
    //     lokasi: "",
    //     link_lokasi: "",
    //     waktu_mulai: "",
    //     waktu_selesai: "",
    //     tanggal_mulai: "12 Desember 2023",
    //     tanggal_selesai: "12 Desember 2023",
    //     harga_tiket: "",
    //     stok_tiket: "",
    //   });

    //   setFile("");
    //   console.log(values);
    // }

    if (!Object.values(newErrors).some((error) => error)) {
      post("/event", values);
      navigate(-1);
      setFile("");
    }
  };

  const onReset = (e) => {
    setValues({
      // artikel_id: "",
      gambar: "",
      nama: "",
      deskripsi: "",
      lokasi: "",
      link_lokasi: "",
      waktu_mulai: "",
      waktu_selesai: "",
      // tanggal_mulai: "12 Desember 2023",
      // tanggal_selesai: "12 Desember 2023",
      harga_tiket: "",
      stok_tiket: "",
    });
    setFile("");
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

  const getFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
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
                  value={values.gambar}
                  onChange={getFile}
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
                  <Button label="Tambah Artikel" color="brown" icon={add} />
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
                      label={"Google Maps"}
                      error={errors.link_lokasi}
                    />
                  </div>
                </div>

                <div className="mt-24">
                  <div className={styles.inputBox}>
                    <Input
                      type={"text"}
                      placeholder={"Masukkan waktu mulai"}
                      className={styles.input}
                      id="waktu_mulai"
                      name="waktu_mulai"
                      value={values.waktu_mulai}
                      onChange={handleOnChange}
                      label={"Waktu Mulai"}
                      error={errors.waktu_mulai}
                    />
                  </div>
                </div>

                <div className="mt-24">
                  <div className={styles.inputBox}>
                    <Input
                      type={"text"}
                      placeholder={"Masukkan waktu selesai"}
                      className={styles.input}
                      id="waktu_selesai"
                      name="waktu_selesai"
                      value={values.waktu_selesai}
                      onChange={handleOnChange}
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
                        id="harga_tiket"
                        name="harga_tiket"
                        value={values.harga_tiket}
                        onChange={handleOnChange}
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
          <Button label="Reset" color="white" icon={reset} onClick={onReset} />
        </div>
        <div className="d-grid col-3 ">
          <Button label="Simpan" color="brown" icon={save} onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default TambahEvent;
