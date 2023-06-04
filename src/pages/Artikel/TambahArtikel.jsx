import React, { useState } from "react";
import styles from "./TambahArtikel.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import reset from "../../assets/icons/restart_alt.svg";
import save from "../../assets/icons/save.svg";
import Filefoto from "../../assets/icons/drive_folder_upload.svg";
import Button from "../../elements/Button/Button";

const TambahArtikel = () => {
  const [values, setValues] = useState({
    fotoArtikel: "",
    judulArtikel: "",
    deskripsiArtikel: "",
  });
  const [file, setFile] = useState();

  const onSubmit = () => {
    console.log(values);
    setValues({
      fotoArtikel: "",
      judulArtikel: "",
      deskripsiArtikel: "",
    });
    setFile("");
  };

  const onReset = () => {
    setValues({
      fotoArtikel: "",
      judulArtikel: "",
      deskripsiArtikel: "",
    });
    setFile("");
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

  return (
    <div className={styles.tambahEventContainer}>
      <h1 className="headline-small-semibold">Tambah Artikel</h1>

      <div className="row">
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {/* upload foto */}
            <div className={styles.containerEvent}>
              <div className={styles.imgArea}>
                <img src={file} />
              </div>
              <div className="d-flex justify-content-center">
                <label htmlFor={"fotoArtikel"}>
                  <Button
                    label="Pilih Foto"
                    icon={Filefoto}
                    color="brown"
                    onClick={() =>
                      document.getElementById("fotoArtikel").click()
                    }
                  />
                </label>
                <input
                  id={"fotoArtikel"}
                  className={styles.inputPhoto}
                  type={"file"}
                  name={"fotoArtikel"}
                  value={values.fotoArtikel}
                  onChange={getFile}
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
                placeholder={"Masukkan judul artikel"}
                className={styles.input}
                id={"judulArtikel"}
                name={"judulArtikel"}
                value={values.judulArtikel}
                onChange={handleOnChange}
                label={"Judul Artikel"}
              />
            </div>
          </div>

          <div className="mt-3">
            <div className={styles.inputBox}>
              <Textarea
                rows={12}
                placeholder={"Masukkan deskripsi artikel"}
                className={styles.input}
                id={"deskripsiArtikel"}
                name={"deskripsiArtikel"}
                value={values.deskripsiArtikel}
                onChange={handleOnChange}
              />
              <label className={styles.inputTitle}>Deskripsi</label>
            </div>
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

export default TambahArtikel;