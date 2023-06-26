import styles from "./EditProduk.module.css";
import Input from "../../elements/Input/Input";
import Gunung from "../../assets/icons/plain-triangle.png";
import Cancel from "../../assets/icons/cancel.svg";
import save from "../../assets/icons/save.svg";
import Button from "../../elements/Button/Button";
import useApi from "../../api/useApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import ModalSuksesLogo from "../../assets/images/ModalSuksesLogo.png";
import ModalGagalLogo from "../../assets/images/ModalGagalLogo.png";
import Modal from "react-modal";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import Khas from '../../assets/images/Khas.jpg'

const EditProduk = () => {
  const [modalSuksesIsOpen, setModalSuksesIsOpen] = useState(false);
  const [modalGagalIsOpen, setModalGagalIsOpen] = useState(false);

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

  const { response: produk, loading, error, get, put } = useApi();
  const {
    response: kategoriProduk,
    loading: kategoriLoading,
    error: kategoriError,
    get: getArtikel,
  } = useApi();
  const [values, setValues] = useState({
    foto: "",
    nama: "",
    deskripsi: "",
    kategori_id: "",
    harga: 0,
    stok: 0,
  });

  const [file, setFile] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    get(`/produk/${id}`).catch((error) => {
      // Handle error
      console.error(error); 
    });
    getArtikel(`/kategori_produk`).catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);
  console.log(kategoriProduk);

  useEffect(() => {
    if (produk) {
      setValues({
        foto: produk?.data.foto,
        nama: produk?.data.nama,
        deskripsi: produk?.data.deskripsi,
        kategori_id:produk?.data.kategori_id,
        harga: produk?.data.harga,
        stok: produk?.data.stok,
      });
    }
  }, [produk]);

  console.log(values);

  const onSubmit = () => {
    const harga = parseInt(values.harga)
    const stok = parseInt(values.stok)
    put(`/produk/${id}`, {
      ...values,
      harga: harga,
      stok: stok
    })
      .then(() => {
        openModalSukses();
      })
      .catch((error) => {
        openModalGagal();
        console.error(error);
      });
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

  const openModalSukses = () => {
    setModalSuksesIsOpen(true);
    setTimeout(() => {
      closeModalSukses();
      navigate("/produk");
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
        <form className={styles.wrapper}>
          <div className={styles.produkBaru}>
            <h1 className="headline-small-semibold">Edit Produk</h1>
            <div className={styles.rowTambahProduk}>
              <div className={styles.sideTop}>
                <h2 className="title-large-semibold">Foto Produk</h2>
                <p className="body-small-regular">
                  Foto Produk menggunakan format, Jpg, Jpeg & Png dengan ukuran
                  maksimal 2 Mb.Pilih foto produk min 3 foto dan maksimal 5
                  foto. Pilih foto anda yang menarik agar pembeli lebih tertarik{" "}
                </p>
              </div>
              <div className={styles.sideGambar}> 
                <div className={styles.boxImage}>
                  <img src={!file ? Khas : file} className={styles.imageProduk} />           
                </div>
                <div className={styles.boxImage}>
                   <img src={!file ? Khas : file} className={styles.imageProduk} />                 
                </div>
                <div className={styles.boxImage}>
                   <img src={!file ? Khas : file} className={styles.imageProduk} />               
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
                    name={"foto"}
                    value={values.foto}
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
                    value={values.nama}
                    name="nama"
                    id="nama"
                    className={`body-medium-regular ${styles.namaProduk}`}
                    label={"Nama Produk"}
                    onChange={handleOnChange}
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
                  Tuliskan deskripsi produkmu untuk disajikan dalam bentuk
                  penjelasn yang lebih rinci.{" "}
                </p>
              </div>
              <div className={styles.sideRight}>
                <div className={styles.parentInput}>
                  <Input
                    label={"Deskripsi Produk"}
                    type="text"
                    value={values.deskripsi}
                    name="deskripsi"
                    id="deskripsi"
                    onChange={handleOnChange}
                    className={`body-medium-regular ${styles.deskripsiProduk}`}
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
                    id="kategori_id"
                    name="kategori_id"
                    value={values.kategori_id}
                    className={styles.kategoriProduk}
                    label={"Kategori Produk"}
                    onChange={handleOnChange}
                  >
                    <option defaultValue={null} hidden></option>
                    {/* <option value="Alat Masak">Pakaian</option>
                    <option value="Alat Mandi">Perhiasan</option>
                    <option value="Sport">Kerajinan Tangan</option>
                    <option value="Souvenir">Aksesoris</option> */}
                    {kategoriProduk?.data.data.map((kategori) => (
                      <option value={kategori.ID}>{kategori.nama}</option>
                    ))}
                  </select>
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
                    value={values.harga}
                    name="harga"
                    id="harga"
                    className={`body-medium-regular ${styles.hargaProduk}`}
                    label={"Harga Produk"}
                    onChange={handleOnChange}
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
                    type="text"
                    value={values.stok}
                    name="stok"
                    id="stok"
                    onChange={handleOnChange}
                    className={`body-medium-regular ${styles.stokProduk}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center gap-3 pt-5">
            <div className="d-grid col-3 ">
              <Button
                label="Batal"
                color="white"
                icon={Cancel}
                onClick={onCancel}
              />
            </div>
            <div className="d-grid col-3 ">
              <Button
                label="Simpan"
                color="brown"
                icon={save}
                onClick={onSubmit}
              />
            </div>
          </div>
        </form>
      )}
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
            <h4 id="modalSuksesTitle" className="title-large-semibold mb-16">
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
  );
};
export default EditProduk;
