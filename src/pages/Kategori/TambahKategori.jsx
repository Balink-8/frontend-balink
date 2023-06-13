import React, { useState } from "react";
import styles from "./TambahKategori.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import reset from "../../assets/icons/restart_alt.svg";
import save from "../../assets/icons/save.svg";
import Button from "../../elements/Button/Button";
import useApi from "../../api/useApi";
import { useNavigate } from "react-router-dom";

const TambahKategori = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    namaKategori: "",
    deskripsiKategori: "",
  });

  const [errors, setErrors] = useState({
    namaKategori: false,
    deskripsiKategori: false,
  });

  const { response: kategori, loading, error, post } = useApi();

  const onSubmit = () => {
    const newErrors = {};
    Object.keys(values).forEach((key) => {
      if (values[key].trim() === "") {
        newErrors[key] = true;
      } else {
        newErrors[key] = false;
      }
    });

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      post(
        "https://6486e617beba6297278f6c94.mockapi.io/kategori",
        values
      );
      console.log(values)
      navigate(-1);
    }
  };

  const onReset = (e) => {
    setValues({
      namaKategori: "",
      deskripsiKategori: "",
    });
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

  return (
    <div className={styles.tambahEventContainer}>
      <h1 className="headline-small-semibold">Tambah Kategori Baru</h1>

      <div className="row">
        <div className="mt-5">
          <div className={styles.sideTopParent}>
            <h2 className="title-large-semibold">Nama Kategori</h2>
            <p className={styles.info}>Wajib</p>
          </div>
          <div>
            <p className="body-small-regular">
              Ketik nama promo maksimal 20 kata dengan kalimat yang menarik agar
              Admin dapat dengan mudah memilih kategori berdasarkan barang yg
              dibuat.
            </p>
            <Input
              type={"text"}
              placeholder={"Masukkan nama kategori"}
              className={styles.input}
              id={"namaKategori"}
              name={"namaKategori"}
              value={values.namaKategori}
              onChange={handleOnChange}
              label={"Nama Kategori"}
              error={errors.namaKategori}
            />
          </div>
        </div>

        <div className="mt-5">
          <div className={styles.sideTopParent}>
            <h2 className="title-large-semibold">Deskripsi Kategori</h2>
            <p className={styles.info}>Wajib</p>
          </div>
          <div>
            <p className="body-small-regular">
              Tuliskan deskripsi Kategori yang kamu buat untuk untuk lebih
              membantu admin mengetahui kategori yang anda buat dipakai untuk
              barang apa saja.
            </p>
            <div className={styles.inputBox}>
              <Textarea
                rows={3}
                placeholder={"Masukkan deskripsi kategori"}
                className={
                  errors.deskripsiKategori
                    ? `${styles.errorInput} ${styles.input}`
                    : styles.input
                }
                id={"deskripsiKategori"}
                name={"deskripsiKategori"}
                value={values.deskripsiKategori}
                onChange={handleOnChange}
              />
              <label
                className={
                  errors.deskripsiKategori
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

      {/* button */}
      <div className="d-flex justify-content-end align-items-center gap-3 pt-5">
        <div className="d-grid col-3 ">
          <Button 
          label="Reset" 
          color="white" 
          icon={reset} 
          onClick={onReset} />
        </div>
        <div className="d-grid col-3 ">
          <Button 
          label="Simpan" 
          color="brown" 
          icon={save} 
          onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default TambahKategori;
