import React, { useState, useEffect } from "react";
import young_bearded_man_with_striped_shirt1 from "../../../assets/images/young_bearded_man_with_striped_shirt1.png";
import styles from "./DetailTransaksiEvent.module.css";
import bukti from "../../../assets/images/bukti.png";
import Button from "../../../elements/Button/Button";
import visibility from "../../../assets/icons/visibility.svg";
import Modal from "react-modal";
import buktiFull from "../../../assets/images/buktiFull.png";
import close_black from "../../../assets/icons/close_black.svg";
import close from "../../../assets/icons/close.svg";
import check from "../../../assets/icons/check.svg";
import konfirmasi from "../../../assets/images/konfirmasi.png";
import axios from "axios";
import { formatCurrency } from "../../../utils/CurrencyFormatter";
import { useNavigate, useParams } from "react-router";
import Spinner from "../../Spinner/Spinner";
import ErrorDisplay from "../../ErrorDisplay/ErrorDisplay";

const DetailTransaksiEvent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [modalBuktiIsOpen, setModalBuktiIsOpen] = useState(false);
  const [modalKonfirmasiIsOpen, setModalKonfirmasiIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const date = new Date(data?.createdAt).toLocaleDateString();
  const time = new Date(data?.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://647ca813c0bae2880ad10a5f.mockapi.io/balink/transaksiProduk/${id}`
      );

      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

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

  const closeBuktiModal = () => {
    setModalBuktiIsOpen(false);
  };

  const openBuktiModal = () => {
    setModalBuktiIsOpen(true);
  };

  const closeKonfirmasiModal = () => {
    setModalKonfirmasiIsOpen(false);
  };

  const openKonfirmasiModal = () => {
    setModalKonfirmasiIsOpen(true);
  };

  const konfirmasiPesanan = async () => {
    try {
      const response = await axios.put(
        `https://647ca813c0bae2880ad10a5f.mockapi.io/balink/transaksiProduk/${id}`,
        { status: "Sukses" }
      );
      alert("Pesanan berhasil dikonfirmasi");
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage={error.message} />
      ) : (
        <div>
          <div className={`${styles.row} row mb-3`} id="row">
            <div className="col-1">
              <img
                src={young_bearded_man_with_striped_shirt1}
                alt=""
                className="p-3"
              />
            </div>

            <div className="col-5  d-flex align-items-center pt-2">
              <div className="ps-1 ">
                <span className="body-large-semibold p-1">
                  {data?.username}
                </span>
              </div>

              <div className="body-small-regular ps-5" id="textcontact">
                <span className="p-1">{data?.email}</span>
                <p className="p-1">{data?.phone}</p>
              </div>
            </div>

            <div className="col-6 p-1 d-flex justify-content-start align-items-center">
              <span className="body-small-bold">Alamat</span>
              <span className="ps-3 body-small-regular ">{data?.address}</span>
            </div>
          </div>

          <div className={`p-4 mb-3  ${styles.container}`} id="container">
            <p className="title-medium-semibold">Data Transaksi</p>
            <div className="row mt-4 text-center ">
              <div className="col-12 p-0 ">
                <div className="table-responsive">
                  <table
                    className={` ${styles.tabledata} table`}
                    id="tabledata"
                  >
                    {/* Render data pada halaman saat ini */}
                    <thead
                      className={`${styles.thead} body-medium-semibold`}
                      id="thead"
                    >
                      <tr id="tr-table">
                        <th
                          className={`p-3 ${styles.roundedLeftTop} ${styles.tableHeadRow}`}
                          id="th-kodetransaksi"
                        >
                          Kode Transaksi
                        </th>
                        <th
                          className={`p-3 ${styles.tableHeadRow} `}
                          id="th-namaproduk"
                        >
                          Nama Produk
                        </th>
                        <th
                          className={`p-3 ${styles.tableHeadRow}`}
                          id="th-hargaproduk"
                        >
                          Harga Produk
                        </th>
                        <th
                          className={`p-3 ${styles.tableHeadRow}`}
                          id="th-jumlah"
                        >
                          Jumlah
                        </th>
                        <th
                          className={`p-3 ${styles.tableHeadRow}`}
                          id="th-total"
                        >
                          Total
                        </th>
                        <th
                          className={`p-3 ${styles.roundedRightTop} ${styles.tableHeadRow} `}
                        ></th>
                      </tr>
                    </thead>
                    <tbody className={styles.tbody} id="tbody">
                      <tr className={`${styles.tableRow} body-medium-regular`}>
                        <td
                          className={`p-3 ${styles.tableHeadRowBody}`}
                          id="td-kodetransaksi"
                        >
                          {data?.kodeTransaksi}
                        </td>
                        <td
                          className={`p-3 ${styles.tableHeadRowBody}`}
                          id="td-namaproduk"
                        >
                          {data?.namaProduct}
                        </td>
                        <td
                          className={`p-3 ${styles.tableHeadRowBody}`}
                          id="td-hargaproduk"
                        >
                          {formatCurrency(data?.harga)}
                        </td>
                        <td
                          className={`p-3 ${styles.tableHeadRowBody}`}
                          id="td-jumlah"
                        >
                          {data?.jumlah}
                        </td>
                        <td
                          className={`p-3 ${styles.tableHeadRowBody}`}
                          id="td-total"
                        >
                          {formatCurrency(data?.total)}
                        </td>
                        <td className={`p-3 ${styles.tableHeadRowBody}`}></td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    className={`${styles.rowtransaksi} row  mx-3 p-2`}
                    id="rowtransaksi"
                  >
                    <div className="col-2 d-flex justify-content-end pe-5">
                      <span className="body-medium-semibold">Total</span>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2"></div>
                    <div className="col-2"></div>
                    <div className="col-4   ps-4">
                      <span className="ps-5 body-large-semibold">
                        {formatCurrency(data?.grandTotal)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-4 mb-3 ${styles.container}`} id="container">
            <p className="title-medium-semibold">Status Transaksi</p>
            <div className="row mt-4 text-center ">
              <div className="col-12 p-0 ">
                <div className="table-responsive">
                  <table
                    className={`${styles.tablestatus} table`}
                    id="tablestatus"
                  >
                    {/* Render data pada halaman saat ini */}
                    <thead
                      className={`${styles.thead} body-medium-semibold`}
                      id="thead"
                    >
                      <tr id="tr-table">
                        <th
                          className={`p-3 ${styles.tableHeadRow}  ${styles.roundedLeftTop} `}
                        >
                          Tanggal{" "}
                        </th>
                        <th className={`p-3 ${styles.tableHeadRow}`}>Jam</th>
                        <th
                          className={`p-3 ${styles.tableHeadRow}  ${styles.roundedRightTop}`}
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className={styles.tbody} id="tbody">
                      <tr className={` ${styles.tableRow} body-medium-regular`}>
                        <td
                          className={`p-3 ${styles.tableHeadRowBody}  ${styles.roundedLeftBot}`}
                        >
                          {date}
                        </td>
                        <td className={`p-3 ${styles.tableHeadRowBody}`}>
                          {time}
                        </td>
                        <td
                          className={`p-3 title-small-semibold ${
                            styles.tableHeadRowBody
                          } ${styles.roundedRightBot} ${
                            data?.status === "Sukses" ? styles.success : ""
                          } 
${data?.status === "Dipesan" ? styles.order : ""}
${data?.status === "Dibatalkan" ? styles.cancel : ""}
${data?.status === "Menunggu" ? styles.waiting : ""}`}
                        >
                          {data?.status}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {data?.status === "Dipesan" && (
            <div>{/* Content for "Dipesan" status */}</div>
          )}

          {data?.status === "Menunggu" && (
            <div className={`p-4 ${styles.container}`} id="container">
              <p className="title-medium-semibold">Bukti Transaksi</p>
              <div className="d-flex gap-5 align-items-center justify-content-between">
                <ol className="w-50">
                  <li>
                    Periksa kembali nomor transaksi dan rincian pembayaran yang
                    tertera pada gambar.
                  </li>
                  <li>
                    Pastikan bahwa jumlah yang tertera pada bukti pembayaran
                    sesuai dengan jumlah yang tercatat dalam sistem.
                  </li>
                  <li>
                    Periksa keaslian bukti pembayaran dengan memperhatikan
                    elemen keamanan seperti cap, tanda tangan, atau kode unik
                    (jika ada).
                  </li>
                </ol>
                <img
                  src={bukti}
                  alt=""
                  style={{ width: "205px", height: "165px" }}
                />
                <div className="d-flex flex-column  gap-3">
                  <div className="d-grid">
                    <Button
                      label="Lihat Bukti Transaksi"
                      color="brown"
                      icon={visibility}
                      id="lihatBuktiButton"
                      onClick={openBuktiModal}
                    />
                  </div>
                  <div className="d-grid">
                    <Button
                      label="Konfirmasi Pesanan"
                      color="white"
                      icon={check}
                      id="konfirmasiPesananButton"
                      onClick={openKonfirmasiModal}
                    />
                  </div>
                </div>
              </div>

              {data?.status === "Dipesan" && (
                <div>{/* Content for "Dipesan" status */}</div>
              )}

              {data?.status === "Menunggu" && (
                <div>{/* Content for "Menunggu" status */}</div>
              )}

              {data?.status === "Dibatalkan" && (
                <div>{/* Content for "Dibatalkan" status */}</div>
              )}
            </div>
          )}

          {data?.status === "Dibatalkan" && (
            <div>{/* Content for "Dibatalkan" status */}</div>
          )}

          {data?.status === "Sukses" && (
            <div className={`p-4 ${styles.container}`} id="container">
              <p className="title-medium-semibold">Bukti Transaksi</p>

              <div className="d-flex gap-5 align-items-center justify-content-between">
                <ol className="w-50">
                  <li>
                    Periksa kembali nomor transaksi dan rincian pembayaran yang
                    tertera pada gambar.
                  </li>
                  <li>
                    Pastikan bahwa jumlah yang tertera pada bukti pembayaran
                    sesuai dengan jumlah yang tercatat dalam sistem.
                  </li>
                  <li>
                    Periksa keaslian bukti pembayaran dengan memperhatikan
                    elemen keamanan seperti cap, tanda tangan, atau kode unik
                    (jika ada).
                  </li>
                </ol>
                <img
                  src={bukti}
                  alt=""
                  style={{ width: "205px", height: "165px" }}
                />
                <div className="d-flex flex-column  gap-3">
                  <div className="d-grid">
                    <Button
                      label="Lihat Bukti Transaksi"
                      color="brown"
                      icon={visibility}
                      id="lihatBuktiButton"
                      onClick={openBuktiModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <Modal
            isOpen={modalBuktiIsOpen}
            onRequestClose={closeBuktiModal}
            contentLabel="Bukti Modal"
            style={customStylesConfirmation}
            id="modalBukti"
          >
            <div
              id="modalKonfirmasiContainer"
              className={`d-flex justify-content-center align-items-center`}
            >
              <div
                id="modalKonfirmasiContent"
                className={`d-flex flex-column justify-content-center align-items-end`}
              >
                <img
                  src={close_black}
                  alt=""
                  className="mb-8"
                  style={{ cursor: "pointer" }}
                  onClick={closeBuktiModal}
                />
                <img id="buktiFull" src={buktiFull} alt="bukti-img" />
              </div>
            </div>
          </Modal>
          <Modal
            isOpen={modalKonfirmasiIsOpen}
            onRequestClose={closeKonfirmasiModal}
            contentLabel="Confirmation Modal"
            style={customStylesConfirmation}
            id="modalKonfirmasi"
          >
            <div
              id="modalKonfirmasiContainer"
              className={`d-flex justify-content-center align-items-center`}
            >
              <div
                id="modalKonfirmasiContent"
                className={`d-flex flex-column justify-content-center align-items-center w-75`}
              >
                <img
                  id="modalKonfirmasiImage"
                  src={konfirmasi}
                  alt="konfirmasi-img"
                  className="mb-16"
                />
                <h4
                  id="modalKonfirmasiTitle"
                  className="title-large-semibold mb-32 text-center"
                >
                  Apakah anda ingin mengonfirmasi transaksi ini?
                </h4>
                <p
                  id="modalKonfirmasiText1"
                  className="body-small-regular text-center"
                >
                  Pastikan anda sudah mengecek bukti pembayaran yang dikirimkan
                  user Data yang sudah dikonfirmasi tidak dapat dikembalikan
                  lagi
                </p>
                <p
                  id="modalKonfirmasiText2"
                  className="body-small-regular mb-32 text-center"
                >
                  Apakah anda yakin?
                </p>
                <div className="d-flex gap-5 justify-content-center">
                  <div className="d-grid col-6">
                    <Button
                      id="modalKonfirmasiYesButton"
                      label="Yes"
                      color="white"
                      icon={check}
                      onClick={konfirmasiPesanan}
                    />
                  </div>
                  <div className="d-grid col-6">
                    <Button
                      id="modalKonfirmasiCancelButton"
                      label="Cancel"
                      color="brown"
                      icon={close}
                      onClick={closeKonfirmasiModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default DetailTransaksiEvent;
