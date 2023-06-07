import React, { useState } from "react";
import styles from "./Promo.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import Button from "../../elements/Button/Button";
import restart from "../../assets/icons/restart_alt.svg";
import save from "../../assets/icons/save.svg";

const TambahPromo = () => {
  const [values, setValues] = useState({
    namaPromo: "",
    deskripsiPromo: "",
    kodePromo: "",
    potonganHarga: "",
  });

  const [errors, setErrors] = useState({
    namaPromo: false,
    deskripsiPromo: false,
    kodePromo: false,
    potonganHarga: false,
  });

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
      setValues({
        namaPromo: "",
        deskripsiPromo: "",
        kodePromo: "",
        potonganHarga: "",
      });

      console.log(values);
    }
  };
  const onReset = (e) => {
    setValues({
      namaPromo: "",
      deskripsiPromo: "",
      kodePromo: "",
      potonganHarga: "",
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
    <div className={`${styles.autoLayoutTambah}`}>
      <div className={`${styles.layoutTambah}`}>
        <p className="headline-small-semibold">Tambah Promo Baru</p>
        <div className={`${styles.input}`} id="namaPromo">
          <div className={`${styles.title}`}>
            <div>
              <p className="title-large-semibold">Nama Promo</p>
            </div>
            <div>
              <p className={`${styles.titleRight}`}>Wajib</p>
            </div>
          </div>

          <p className="body-small-regular">
            Ketik nama promo maksimal 70 kata dengan kalimat yang menarik agar
            pembeli dapat menemukan promo dari nama promo, kode promo, merek dan
            Deskripsi promo.
          </p>

          <div>
            <Input
              type={"text"}
              id={"addNamaPromo"}
              label={"Nama Promo"}
              placeholder={"Masukkan Nama Promo"}
              name={"namaPromo"}
              value={values.namaPromo}
              onChange={handleOnChange}
              error={errors.namaPromo}
            />
            <br />
          </div>
        </div>

        <div className={`${styles.input}`} id="deskripsiPromo">
          <div className={`${styles.title}`}>
            <div>
              <p className="title-large-semibold">Deskripsi Promo</p>
            </div>
            <div>
              <p className={`${styles.titleRight}`}>Wajib</p>
            </div>
          </div>

          <p className={`body-small-regular ${styles.descPromo}`}>
            Tuliskan deskripsi promomu untuk disajikan dalam bentuk penjelasn
            yang lebih rinci.
          </p>

          <div className={styles.inputBox}>
            <Textarea
              rows={4}
              required={"required"}
              placeholder={"Masukkan Deskripsi Promo"}
              className={
                errors.deskripsiPromo
                  ? `${styles.errorInput} ${styles.textArea}`
                  : styles.textArea
              }
              id={"addDeskripsiPromo"}
              name={"deskripsiPromo"}
              value={values.deskripsiPromo}
              onChange={handleOnChange}
            />
            <label
              className={
                errors.deskripsiPromo
                  ? `${styles.errorTitle} ${styles.inputTitle}`
                  : styles.inputTitle
              }
            >
              Deskripsi Promo
            </label>
          </div>
        </div>

        <div className={`${styles.input}`} id="kodePromo">
          <div className={`${styles.title}`}>
            <div>
              <p className="title-large-semibold">Kode Promo</p>
            </div>
            <div>
              <p className={`${styles.titleRight}`}>Wajib</p>
            </div>
          </div>

          <p className="body-small-regular">
            Kode promo digunakan untuk memudahkan bagi pengguna dari promo yang
            sedang berlangsung.
          </p>

          <div>
            <Input
              type={"text"}
              id={"addKodePromo"}
              label={"Kode Promo"}
              placeholder={"Masukkan Kode Promo"}
              name={"kodePromo"}
              value={values.kodePromo}
              onChange={handleOnChange}
              error={errors.kodePromo}
            />
            <br />
          </div>
        </div>

        <div className={`${styles.input}`} id="potonganHarga">
          <div className={`${styles.title}`}>
            <div>
              <p className="title-large-semibold">Potongan Harga</p>
            </div>
            <div>
              <p className={`${styles.titleRight}`}>Wajib</p>
            </div>
          </div>

          <div className="desc">
            <p className="body-small-regular">
              Potongan Harga menunjukkan bahwa promo yang sedang berlangsung
              dengan potongan harga yang sudah di tentukan.
            </p>
          </div>

          <div>
            <Input
              type={"number"}
              id={"addPotonganHarga"}
              label={"Potongan Harga"}
              placeholder={"Rp. 0"}
              name={"potonganHarga"}
              value={values.potonganHarga}
              onChange={handleOnChange}
              error={errors.potonganHarga}
            />
            <br />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end gap-3 pt-5">
        <div className="d-grid col-3">
          <Button
            label="Reset"
            color="white"
            icon={restart}
            onClick={onReset}
          />
        </div>
        <div className="d-grid col-3">
          <Button label="Simpan" color="brown" icon={save} onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default TambahPromo;
