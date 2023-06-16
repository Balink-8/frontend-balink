import React, { useState, useEffect } from "react";
import styles from "./EditProfil.module.css";
import Logo from "../../assets/images/Balink 1.png";
import Button from "../../elements/Button/Button";
import Cancel from "../../assets/icons/cancel.svg";
import Simpan from "../../assets/icons/save.svg";
import File from "../../assets/icons/drive_folder_upload.svg";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import Spinner from "../../components/Spinner/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import useApi from "../../api/useApi";
import { useNavigate } from "react-router-dom";

const EditProfil = () => {
  const [form, setForm] = useState({
    nama: "",
    deskripsi: "",
    email: "",
    foto_profile: "",
    no_telepon: "",
    whatsapp: "",
    instagram: "",
    facebook: "",
    alamat: "",
    negara: "",
    kode_pos: "",
    rekening_bca: "",
    rekening_bni: "",
    rekening_bri: "",
    rekening_mandiri: "",
    rekening_btn: "",
    rekening_seabank: "",
    rekening_bpd_bali: "",
  });

  const [errors, setErrors] = useState({
    nama: false,
    deskripsi: false,
    email: false,
    foto_profile: false,
    no_telepon: false,
    whatsapp: false,
    instagram: false,
    facebook: false,
    alamat: false,
    negara: false,
    kode_pos: false,
  });
  const [file, setFile] = useState();
  const [isApiCall, setIsApiCall] = useState(false);

  const { response: profil, loading, error, get, put } = useApi();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

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

  const handleSubmit = () => {
    const newErrors = {};

    Object.keys(form).forEach((key) => {
      if (
        form[key].trim() === "" &&
        ![
          "rekening_bca",
          "rekening_bni",
          "rekening_bri",
          "rekening_mandiri",
          "rekening_btn",
          "rekening_seabank",
          "rekening_bpd_bali",
        ].includes(key)
      ) {
        newErrors[key] = true;
      } else {
        newErrors[key] = false;
      }
    });

    setErrors(newErrors);
    console.log(form);
    console.log(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log(form);
      put(`/admin`, form)
        .then(() => {
          navigate("/profile");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  const getFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    get(`/admin`)
      .then(() => {
        setIsApiCall(true);
        setForm({
          nama: profil?.data.nama,
          deskripsi: profil?.data.deskripsi,
          email: profil?.data.email,
          foto_profile: profil?.data.foto_profile,
          no_telepon: profil?.data.no_telepon,
          whatsapp: profil?.data.whatsapp,
          instagram: profil?.data.instagram,
          facebook: profil?.data.facebook,
          alamat: profil?.data.alamat,
          negara: profil?.data.negara,
          kode_pos: profil?.data.kode_pos,
          rekening_bca: profil?.data.rekening_bca,
          rekening_bni: profil?.data.rekening_bni,
          rekening_bri: profil?.data.rekening_bri,
          rekening_mandiri: profil?.data.rekening_mandiri,
          rekening_btn: profil?.data.rekening_btn,
          rekening_seabank: profil?.data.rekening_seabank,
          rekening_bpd_bali: profil?.data.rekening_bpd_bali,
        });
      })
      .catch((error) => {
        setIsApiCall(false);
        console.error(error);
      });
    console.log(`profil : ${profil}`);
  }, [isApiCall]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage={error.message} />
      ) : (
        <div className={styles.wrapper}>
          {/* Judul */}
          <div className={styles.judul}>
            <div className={styles.sideLeft}>
              <img
                src={file ? file : form.foto_profile}
                className={styles.logo}
              />
              <div className={styles.parentBoxFile}>
                <span className="me-2">
                  <img src={File} alt="" />
                </span>
                <label htmlFor="boxFile" className={styles.AddBoxImage}>
                  Pilih Foto
                </label>
                <input
                  className={styles.boxFile}
                  id="boxFile"
                  type="file"
                  name="foto_profile"
                  onChange={getFile}
                />
              </div>
              <p className="body-small-regular text-center mt-2">
                Select Your Photo Profil max 2mb.
              </p>
            </div>
            <div className={styles.sideRight}>
              <div className={styles.nama}>
                <Input
                  type="text"
                  label="Nama Perusahaan"
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  error={errors.nama}
                />
              </div>
              <div className={`${styles.deskripsi} mt-3`}>
                <Textarea
                  type="text"
                  label="Deskripsi Perusahaan"
                  value={form.deskripsi}
                  className={`w-100 p-2 title-small-regular ${
                    errors.deskripsi
                      ? `${styles.error} ${styles.inputTextArea}`
                      : `${styles.inputTextArea}`
                  } `}
                  rows="7"
                  onChange={handleChange}
                  name="deskripsi"
                />
                <div className={styles.parentDeskripsi}>
                  <span
                    className={`w-100 p-2 title-small-regular ${
                      errors.deskripsi
                        ? `${styles.errorDeskripsi} ${styles.deskripsiText}`
                        : `${styles.deskripsiText}`
                    } `}
                  >
                    Deskripsi Perusahaan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Informasi */}
          <div className={styles.informasi}>
            <h2 className="title-medium-bold">Informasi Perusahaan</h2>
            <div className={styles.parentInformasi}>
              <div className={styles.sideLeftInformasi}>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>

                <div className={styles.input}>
                  <Input
                    type="text"
                    label="No Telephone"
                    name="no_telepon"
                    value={form.no_telepon}
                    onChange={handleChange}
                    error={errors.no_telepon}
                  />
                </div>
              </div>
              <div className={styles.sideRightInformasi}>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Whatsapp"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    error={errors.whatsapp}
                  />
                </div>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Instagram"
                    name="instagram"
                    value={form.instagram}
                    onChange={handleChange}
                    error={errors.instagram}
                  />
                </div>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Facebook"
                    name="facebook"
                    value={form.facebook}
                    onChange={handleChange}
                    error={errors.facebook}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.informasi}>
            <h2 className="title-medium-bold">Alamat Perusahaan</h2>
            <div className={styles.parentInformasi}>
              <div className={styles.sideLeftInformasi}>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Negara"
                    name="negara"
                    value={form.negara}
                    onChange={handleChange}
                    error={errors.negara}
                  />
                </div>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Kode Pos"
                    name="kode_pos"
                    value={form.kode_pos}
                    onChange={handleChange}
                    error={errors.kode_pos}
                  />
                </div>
              </div>
              <div className={styles.sideRightInformasi}>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Alamat"
                    name="alamat"
                    value={form.alamat}
                    onChange={handleChange}
                    error={errors.alamat}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.informasi}>
            <h2 className="title-medium-bold">Rekening Perusahaan</h2>
            <div className={styles.parentInformasi}>
              <div className={styles.sideInformasi}>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Bank Central Asia (BCA)"
                    name="rekening_bca"
                    value={form.rekening_bca}
                    onChange={handleChange}
                    placeholder={
                      form.rekening_bca
                        ? form.rekening_bca
                        : "Isi Nomor Rekening Anda"
                    }
                  />
                </div>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Bank Mandiri"
                    name="rekening_mandiri"
                    value={form.rekening_mandiri}
                    onChange={handleChange}
                    placeholder={
                      form.rekening_mandiri
                        ? form.rekening_mandiri
                        : "Isi Nomor Rekening Anda"
                    }
                  />
                </div>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Bank Rakyat Indonesia"
                    name="rekening_bri"
                    value={form.rekening_bri}
                    onChange={handleChange}
                    placeholder={
                      form.rekening_bri
                        ? form.rekening_bri
                        : "Isi Nomor Rekening Anda"
                    }
                  />
                </div>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Bank Nasional Indonesia"
                    name="rekening_bni"
                    value={form.rekening_bni}
                    onChange={handleChange}
                    placeholder={
                      form.rekening_bni
                        ? form.rekening_bni
                        : "Isi Nomor Rekening Anda"
                    }
                  />
                </div>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Bank Tabungan Negara"
                    name="rekening_btn"
                    value={form.rekening_btn}
                    onChange={handleChange}
                    placeholder={
                      form.rekening_btn
                        ? form.rekening_btn
                        : "Isi Nomor Rekening Anda"
                    }
                  />
                </div>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="SeaBank"
                    name="rekening_seabank"
                    value={form.rekening_seabank}
                    onChange={handleChange}
                    placeholder={
                      form.rekening_seabank
                        ? form.rekening_seabank
                        : "Isi Nomor Rekening Anda"
                    }
                  />
                </div>
                <div className={styles.input}>
                  <Input
                    type="text"
                    label="Bank BPD Bali"
                    name="rekening_bpd_bali"
                    value={form.rekening_bpd_bali}
                    onChange={handleChange}
                    placeholder={
                      form.rekening_bpd_bali
                        ? form.rekening_bpd_bali
                        : "Isi Nomor Rekening Anda"
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end align-items-center gap-3 pt-4">
            <div className="d-grid col-3 ">
              <Button
                label="Batal"
                color="white"
                icon={Cancel}
                onClick={handleCancel}
              />
            </div>
            <div className="d-grid col-3 ">
              <Button
                label="Simpan"
                color="brown"
                icon={Simpan}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfil;
