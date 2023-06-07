import styles from "./TambahProduk.module.css";
import Input from "../../elements/Input/Input";
import Gambar1 from "../../assets/assetsLandingPage/wisata.svg";
import Gambar2 from "../../assets/assetsLandingPage/wisata.svg";
import Gambar3 from "../../assets/assetsLandingPage/wisata.svg";
import Undo from "../../assets/icons/undo.png";
import save from "../../assets/icons/save.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../elements/Button/Button";

const TambahProduk = () => {
  const [url, setUrl] = useState("");
  const [namaProduk, setNamaProduk] = useState("");
  const [deskripsiProduk, setDeskripsiProduk] = useState("");
  const [kategoriProduk, setKategoriProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [namaProdukError, setNamaProdukError] = useState(false);
  const [deskripsiProdukError, setDeskripsiProdukError] = useState(false);
  const [kategoriProdukError, setKategoriProdukError] = useState(false);
  const [hargaError, setHargaError] = useState(false);
  const [stokError, setStokError] = useState(false);

  const navigate = useNavigate();

  const handleChangeUrl = (e) => {
    setUrl(e.target.value);
    setUrlError(e.target.value.trim() === "");
  };

  const handleChangeNama = (e) => {
    setNamaProduk(e.target.value);
    setNamaProdukError(e.target.value.trim() === "");
  };

  const handleDeskripsiProduk = (e) => {
    setDeskripsiProduk(e.target.value);
    setDeskripsiProdukError(e.target.value.trim() === "");
  };

  const handleKategoriProduk = (e) => {
    setKategoriProduk(e.target.value);
    setKategoriProdukError(e.target.value.trim() === "");
  };

  const handleStok = (e) => {
    setStok(e.target.value);
    setStokError(e.target.value.trim() === "");
  };

  const handleHarga = (e) => {
    setHarga(e.target.value);
    setHargaError(e.target.value.trim() === "");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Reset previous error values
    setUrlError(false);
    setNamaProdukError(false);
    setDeskripsiProdukError(false);
    setKategoriProdukError(false);
    setHargaError(false);
    setStokError(false);

    // Perform validation
    if (url.trim() === "") {
      setUrlError(true);
    }

    if (namaProduk.trim() === "") {
      setNamaProdukError(true);
    }

    if (deskripsiProduk.trim() === "") {
      setDeskripsiProdukError(true);
    }

    if (kategoriProduk === "") {
      setKategoriProdukError(true);
    }

    if (harga.trim() === "") {
      setHargaError(true);
    }

    if (stok.trim() === "") {
      setStokError(true);
    }

    // Continue with form submission if there are no errors
    if (
      !urlError &&
      !namaProdukError &&
      !deskripsiProdukError &&
      !kategoriProdukError &&
      !hargaError &&
      !stokError
    ) {
      const variables = {
        image: url,
        nama_produk: namaProduk,
        deskripsi_produk: deskripsiProduk,
        kategori_produk: kategoriProduk,
        harga: harga,
        stok: stok,
        id: Math.random().toString(),
      };
      console.log(variables);
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={submitHandler}>
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
              <img src={Gambar1} className={styles.imageProduk} />
            </div>
            <div className={styles.boxImage}>
              <img src={Gambar2} className={styles.imageProduk} />
            </div>
            <div className={styles.boxImage}>
              <img src={Gambar3} className={styles.imageProduk} />
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
                onChange={handleChangeUrl}
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
                onChange={handleChangeNama}
                className={`body-medium-regular ${styles.namaProduk}`}
                label={"Nama Produk"}
                error={namaProdukError}
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
                name="deskripsiProduk"
                id="deskripsiProduk"
                onChange={handleDeskripsiProduk}
                className={`body-medium-regular ${styles.deskripsiProduk}`}
                error={deskripsiProdukError}
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
                onChange={handleKategoriProduk}
                placeholder="masukan kategori produk"
                className={`${styles.kategoriProduk} ${
                  kategoriProdukError ? styles.error : ""
                }`}
                label={"Kategori Produk"}
              >
                <option defaultValue={null} hidden></option>
                <option value="Pakaian">Pakaian</option>
                <option value="Perhiasan">Perhiasan</option>
                <option value="Kerajinan Tangan">Kerajinan Tangan</option>
                <option value="Aksesori">Aksesoris</option>
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
                placeholder="Rp. 120000"
                name="hargaProduk"
                id="hargaProduk"
                className={`body-medium-regular ${styles.hargaProduk}`}
                label={"Harga Produk"}
                onChange={handleHarga}
                error={hargaError}
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
                onChange={handleStok}
                className={`body-medium-regular ${styles.stokProduk}`}
                error={stokError}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center gap-3 pt-5">
        <div className="d-grid col-3 ">
          <Button label="Reset" color="white" icon={Undo} />
        </div>
        <div className="d-grid col-3 ">
          <Button label="Simpan" color="brown" icon={save} />
        </div>
      </div>
    </form>
  );
};
export default TambahProduk;
