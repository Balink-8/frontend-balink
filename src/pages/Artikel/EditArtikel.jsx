import React, { useState } from "react";
import styles from "./TambahArtikel.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import save from "../../assets/icons/save.svg";
import Filefoto from "../../assets/icons/drive_folder_upload.svg";
import Button from "../../elements/Button/Button";
import cancel from "../../assets/icons/cancel.svg";
import bg from "../../assets/images/bg.jpg";
import { useNavigate } from "react-router-dom";

const EditArtikel = () => {
  const [values, setValues] = useState({
    fotoArtikel: bg,
    judulArtikel: "Tari Kecak",
    deskripsiArtikel:
      "Tari Kecak menjadi salah satu jenis tari kolosal yang melibatkan 50 sampai 150 orang penari. Jalan cerita Tari Kecak diambil dari tradisi Sanghyang dan bagian cerita Ramayana. Gerak penari Kecak akan diawali dengan masuknya para penari pria yang duduk membentuk lingkaran.Kemudian dilanjutkan dengan drama tari tentang perjuangan Rama, pasukan Hanoman dan burung Garuda untuk menyelamatkan Shinta dari sosok Rahwana. \n\nDalam setiap pergantian penari di tiap adegan, para penari yang duduk membentuk lingkaran akan mengangkat kedua tangan dan menyerukan “cak cak ke cak cak ke” yang kemudian menjadi asal nama tarian ini. Dalam buku Keanekaragaman Seni Tari Nusantara (2012) oleh Resi Septiana Dewi dijelaskan bahwa gerakan penari Kecak tidak harus mengikuti pakem-pakem karena dalam tarian ini yang diutamakan adalah jalan cerita dan perpaduan suaranya.",
  });
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const paragraphs = values.deskripsiArtikel.split("\n\n");
  const onSubmit = () => {
    console.log(values);
    setValues({
      fotoArtikel: "",
      judulArtikel: "",
      deskripsiArtikel: "",
    });
    setFile("");
  };

  const onCancel = () => {
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

  return (
    <div id="editArtikelContainer" className={styles.tambahEventContainer}>
      <h1 id="editArtikelTitle" className="headline-small-semibold">
        Edit Artikel
      </h1>

      <div className="row">
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {/* upload foto */}
            <div className={styles.containerEvent}>
              <div className={styles.imgArea}>
                <img
                  id="uploadedImage"
                  src={file ? file : values.fotoArtikel}
                />
              </div>
              <div className="d-flex justify-content-center">
                <label htmlFor="fotoArtikel">
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
                  id="fotoArtikel"
                  className={styles.inputPhoto}
                  type="file"
                  name="fotoArtikel"
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
                type="text"
                placeholder="Masukkan judul artikel"
                className={styles.input}
                id="judulArtikel"
                name="judulArtikel"
                value={values.judulArtikel}
                onChange={handleOnChange}
                label="Judul Artikel"
              />
            </div>
          </div>

          <div className="mt-3">
            <div className={styles.inputBox}>
              <Textarea
                rows={12}
                placeholder="Masukkan deskripsi artikel"
                className={styles.input}
                id="deskripsiArtikel"
                name="deskripsiArtikel"
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
        <div className="d-grid col-3">
          <Button
            id="cancelButton"
            label="Batal"
            color="white"
            icon={cancel}
            onClick={onCancel}
          />
        </div>
        <div className="d-grid col-3">
          <Button
            id="saveButton"
            label="Simpan"
            color="brown"
            icon={save}
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default EditArtikel;
