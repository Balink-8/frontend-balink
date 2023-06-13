import React, { useState, useEffect } from "react";
import styles from "./TambahKategori.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import save from "../../assets/icons/save.svg";
import cancel from "../../assets/icons/cancel.svg";
import Button from "../../elements/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../api/useApi";

const EditKategori = () => {
  const navigate = useNavigate();
  const { response: kategori, loading, error, get, put } = useApi();
  const [values, setValues] = useState ({
      namaKategori: "",
      deskripsiKategori: "",  
  });

  const { id } = useParams();

  useEffect(() => {
    get(
      `https://6486e617beba6297278f6c94.mockapi.io/kategori/${id}`
    ).catch((error) => {
      // Handle error
      console.error(error);
    });
    }, []);

  useEffect(() => {
    if (kategori) {
        setValues({
            namaKategori: kategori.namaKategori,
            deskripsiKategori: kategori.deskripsiKategori,
      });
    }
  }, [kategori]);

  const paragraphs = values.deskripsiKategori.split("\n\n");

  const onSubmit = () => {
        put(
          `https://6486e617beba6297278f6c94.mockapi.io/kategori/${id}`,
          values
        );
        navigate(-1);
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

 


  return (
    <div className={styles.tambahEventContainer}>
      <h1 className="headline-small-semibold">Edit Kategori</h1>

      <div className="row">
        <div className="mt-5">
          <div className={styles.sideTopParent}>
            <h2 className="title-large-semibold">Nama Kategori</h2>
            <p className={styles.info}>Wajib</p>
          </div>
          <div>
            <p className="body-small-regular">
              Ketik nama promo maksimal 20 kata dengan kalimat yang menarik agar Admin 
              dapat dengan mudah memilih kategori berdasarkan barang yg dibuat.
            </p>
            <Input
              type={"text"}
              className={styles.input}
              id={"namaKategori"}
              name={"namaKategori"}
              value={values.namaKategori}
              onChange={handleOnChange}
              label={"Nama Kategori"}
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
              membantu admin mengetahui kategori yang anda buat dipakai untuk barang apa saja. 
            </p>
            <div className={styles.inputBox}>
              <Textarea
                rows={3}
                className={styles.input}
                id={"deskripsiKategori"}
                name={"deskripsiKategori"}
                value={values.deskripsiKategori}
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
            <Button 
            label="Batal" 
            color="white" 
            icon={cancel} 
            onClick={onCancel}/>
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

export default EditKategori;
