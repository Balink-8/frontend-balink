import styles from "./TambahProduk.module.css";
import Gunung from "../../assets/icons/plain-triangle.png"
import Input from "../../elements/Input/Input";
import Undo from "../../assets/icons/undo.png";
import save from "../../assets/icons/save.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../elements/Button/Button";
import useApi from "../../api/useApi";

const TambahProduk = () => {
   const navigate = useNavigate();
   const [file, setFile] = useState();

  const [values, setValues] = useState({
    fotoProduk: "",
    namaProduk: "",
    deskripsiProduk: "",
    kategoriProduk: "",
    hargaProduk: "",
    stokProduk: "",
  });
  const [errors, setErrors] = useState({
    fotoProduk: false,
    namaProduk: false,
    deskripsiProduk: false,
    kategoriProduk: false,
    hargaProduk: false,
    stokProduk: false
  });

  const { response: produk, loading, error, post } = useApi();

  const onSubmit = (e) => {
    e.preventDefault()
    const newErrors = {};


    Object.keys(values).forEach((key) => {
      if (values[key].trim() === "") {
        newErrors[key] = true;
      } else {
        newErrors[key] = false;
      }
    }); 

    setErrors(newErrors);

     console.log(newErrors)
    if (!Object.values(newErrors).some((error) => error)) {
      console.log(values)
      post(
        "https://64328e2b3e05ff8b3728907e.mockapi.io/products/products",
        values
      );
      navigate(-1);
      setFile("");
      
    }
  };



 const onReset = () => {
    setValues({
    fotoProduk: "",
    namaProduk: "",
    deskripsiProduk: "",
    kategoriProduk: "",
    hargaProduk: "",
    stokProduk: ""
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
    console.log("random")
    setFile(URL.createObjectURL(e.target.files[0]));
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <div className={styles.produkBaru}>
        <h1 className="headline-small-semibold">Buat Produk Baru</h1>
        <div className={styles.rowTambahProduk}>
          <div className={styles.sideTop}>
            <h2 className="title-large-semibold">Foto Produk</h2>
            <p className="body-small-regular">
              Foto Produk menggunakan format, Jpg, Jpeg & Png dengan ukuran
              maksimal 2 Mb.Pilih foto produk min 3 foto dan maksimal 5 foto.
              Pilih foto anda yang menarik agar pembeli lebih tertarik{" "}
            </p>
          </div>
          <div className={styles.sideGambar}>
            <div className={styles.boxImage}>
              <img src={file} className={styles.imageProduk} />
              <div className={styles.gunung}>
                <img src={!file ? Gunung : ""} className={styles.imgGunung}/>
              </div>
            </div>
            <div className={styles.boxImage}>
              <img src={file} className={styles.imageProduk} />
              <div className={styles.gunung}>
                <img src={!file ? Gunung : ""} className={styles.imgGunung}/>
              </div>
            </div>
            <div className={styles.boxImage}>
              <img src={file} className={styles.imageProduk} />
              <div className={styles.gunung}>
                <img src={!file ? Gunung : ""} className={styles.imgGunung}/>
              </div>
            </div>

            <div className={styles.parentBoxFile}>
              <label htmlFor="boxFile" className={styles.AddBoxImage}>
                {" "}
                +{" "}
              </label>
              <input
                className={styles.boxFile}
                id="boxFile"
                type="file"
                name={"fotoProduk"}
                value={values.fotoProduk}
                onChange={getFile}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainProduk}>
        <div className={styles.rowTambahProduk}>
          <div className={styles.sideLeft}>
            <div className={styles.sideTopParent}>
              <div className={styles.sideTopLeft}>
                <h2 className="title-large-semibold">Nama Produk</h2>
              </div>
              <div className={styles.sideTopRigt}>
                <p className={styles.info}>Wajib</p>
              </div>
            </div>
            <p className="body-small-regular">
              Ketik nama produk maksimal 70 kata dengan kalimat yang menarik
              agar pembeli dapat menemukan produk dari nama produk, jenis
              produk, merek dan keterangan warna, bahan dll.{" "}
            </p>
          </div>
          <div className={styles.sideRight}>
            <div className={styles.parentInput}>
              <Input
                type="text"
                placeholder="Masukan nama produk"
                name="namaProduk"
                id="namaProduk"
                onChange={handleOnChange}
                className={`body-medium-regular ${styles.namaProduk}`}
                label={"Nama Produk"}
                error={errors.namaProduk}
                value={values.namaProduk}
              />
            </div>
          </div>
        </div>

        <div className={styles.rowTambahProduk}>
          <div className={styles.sideLeft}>
            <div className={styles.sideTopParent}>
              <div className={styles.sideTopLeft}>
                <h2 className="title-large-semibold">Deskripsi Produk</h2>
              </div>
              <div className={styles.sideTopRigt}>
                <p className={styles.info}>Wajib</p>
              </div>
            </div>
            <p className="body-small-regular">
              Tuliskan deskripsi produkmu untuk disajikan dalam bentuk penjelasn
              yang lebih rinci.{" "}
            </p>
          </div>
          <div className={styles.sideRight}>
            <div className={styles.parentInput}>
              <Input
                label={"Deskripsi Produk"}
                type="text"
                placeholder="Masukan Deskripsi produk"
                value={values.deskripsiProduk}
                name="deskripsiProduk"
                id="deskripsiProduk"
                onChange={handleOnChange}
                className={`body-medium-regular ${styles.deskripsiProduk}`}
                error={errors.deskripsiProduk}
              />
            </div>
          </div>
        </div>

        <div className={styles.rowTambahProduk}>
          <div className={styles.sideLeft}>
            <div className={styles.sideTopParent}>
              <div className={styles.sideTopLeft}>
                <h2 className="title-large-semibold">Kategori Produk</h2>
              </div>
              <div className={styles.sideTopRigt}>
                <p className={styles.info}>Wajib</p>
              </div>
            </div>
            <p className="body-small-regular">
              Kategori untuk menemukan barang yang sudah di cari dengan kosa
              kata kunci yang sudah menjadi layanan dari Balink.
            </p>
          </div>
          <div className={styles.sideRight}>
            <div className={styles.parentInput}>
              <select
                type="select"
                id="kategoriProduk"
                name="kategoriProduk"
                value={values.kategoriProduk}
                onChange={handleOnChange}
                placeholder="masukan kategori produk"
                className={`${styles.kategoriProduk}`}
              >
                <option defaultValue={null} hidden></option>
                <option value="Pakaian">Pakaian</option>
                <option value="Perhiasan">Perhiasan</option>
                <option value="Kerajinan Tangan">Kerajinan Tangan</option>
                <option value="Aksesori">Aksesoris</option>
              </select>
              <div className={styles.kategori}>
                <span style={{fontSize: "11px"}}>Kategori Produk</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rowTambahProduk}>
          <div className={styles.sideLeft}>
            <div className={styles.sideTopParent}>
              <div className={styles.sideTopLeft}>
                <h2 className="title-large-semibold">Harga Produk</h2>
              </div>
              <div className={styles.sideTopRigt}>
                <p className={styles.info}>Wajib</p>
              </div>
            </div>
            <p className="body-small-regular">
              Kategori untuk menemukan barang yang sudah di cari dengan kosa
              kata kunci yang sudah menjadi layanan dari Balink.
            </p>
          </div>
          <div className={styles.sideRight}>
            <div className={styles.parentInput}>
              <Input
                type="number"
                placeholder="Rp. 120000"
                name="hargaProduk"
                id="hargaProduk"
                value={values.hargaProduk}
                className={`body-medium-regular ${styles.hargaProduk}`}
                label={"Harga Produk"}
                onChange={handleOnChange}
                error={errors.hargaProduk}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.rowTambahProduk} mb-48`}>
          <div className={styles.sideLeft}>
            <div className={styles.sideTopParent}>
              <div className={styles.sideTopLeft}>
                <h2 className="title-large-semibold">Stok Produk</h2>
              </div>
              <div className={styles.sideTopRight}>
                <p className={styles.info}>Wajib</p>
              </div>
            </div>
            <p className="body-small-regular">
              Kategori untuk menemukan barang yang sudah di cari dengan kosa
              kata kunci yang sudah menjadi layanan dari Balink.
            </p>
          </div>
          <div className={styles.sideRight}>
            <div className={styles.parentInput}>
              <Input
                label={"Stok Produk"}
                type="number"
                placeholder="190"
                name="stokProduk"
                id="stokProduk"
                value={values.stokProduk}
                onChange={handleOnChange}
                className={`body-medium-regular ${styles.stokProduk}`}
                error={errors.stokProduk}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center gap-3 pt-5">
        <div className="d-grid col-3 ">
          <Button label="Reset" color="white" icon={Undo} onClick={onReset}/>
        </div>
        <div className="d-grid col-3 ">
          <Button label="Simpan" color="brown" icon={save} onClick={onSubmit}/>
        </div>
      </div>
    </form>
  );
};
export default TambahProduk;
