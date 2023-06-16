import React, { useState, useEffect } from "react";
import styles from "./TambahArtikel.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import save from "../../assets/icons/save.svg";
import Filefoto from "../../assets/icons/drive_folder_upload.svg";
import Button from "../../elements/Button/Button";
import cancel from "../../assets/icons/cancel.svg";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";

const EditArtikel = () => {
  const { response: artikel, loading, error, get, put } = useApi();
  const [values, setValues] = useState({
    gambar: "",
    judul: "",
    isi: "",
  });
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    get(`/artikel/${id}`).catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  console.log(artikel?.data);

  useEffect(() => {
    if (artikel) {
      setValues({
        gambar: artikel?.data.gambar,
        judul: artikel?.data.judul,
        isi: artikel?.data.isi,
      });
    }
  }, [artikel]);

  const onSubmit = () => {
    put(`/artikel/${id}`, values);
    navigate(-1);
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
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage={error.message} />
      ) : (
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
                    <img id="uploadedImage" src={file ? file : values.gambar} />
                  </div>
                  <div className="d-flex justify-content-center">
                    <label htmlFor="gambar">
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
                      id="gambar"
                      className={styles.inputPhoto}
                      type="file"
                      name="gambar"
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
                    id="judul"
                    name="judul"
                    value={values.judul}
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
                    id="isi"
                    name="isi"
                    value={values.isi}
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
      )}
    </div>
  );
};

export default EditArtikel;
