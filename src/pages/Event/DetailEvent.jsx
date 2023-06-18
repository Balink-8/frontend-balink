import { useEffect, useState } from "react";
import styles from "./DetailEvent.module.css";
import useApi from "../../api/useApi";
import { useNavigate, useParams } from "react-router-dom";
import info from "../../assets/icons/language.svg";
import lokasi from "../../assets/icons/location_on.svg";
import link from "../../assets/icons/link.svg";
import waktu from "../../assets/icons/alarm.svg";
import rectangle from "../../assets/images/Rectangle 333.png";
import edit from "../../assets/icons/edit_square_white.svg";
import hapus from "../../assets/icons/delete.svg";
import Button from "../../elements/Button/Button";
import { Switch } from "antd";
import Spinner from "../../components/Spinner/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import Modal from "react-modal";
import konfirmasi from "../../assets/images/konfirmasi.png";
import close from "../../assets/icons/close.svg";
import check from "../../assets/icons/check.svg";
import deleteImg from "../../assets/images/delete.png";

const DetailEvent = () => {
  const [modalKonfirmasiIsOpen, setModalKonfirmasiIsOpen] = useState(false);
  const [modalTerhapusIsOpen, setModalTerhapusIsOpen] = useState(false);

  const { response: event, loading, error, get, del } = useApi();
  
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const { id } = useParams();

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

  useEffect(() => {
    get(`/event/${id}`).catch((error) => {
      // Handle error
      console.error(error);
    });
  }, [id]);

  const handleDelete = (selectedId) => {
    del(`/event/${id}`)
    .then(() => {
      openTerhapusModal();
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const closeKonfirmasiModal = () => {
    setModalKonfirmasiIsOpen(false);
  };

  const openKonfirmasiModal = () => {
    setModalKonfirmasiIsOpen(true);
  };

  const openTerhapusModal = () => {
    setModalTerhapusIsOpen(true);
    setTimeout(() => {
      closeTerhapusModal();
      navigate(-1);
    }, 1500);
  };

  const closeTerhapusModal = () => {
    setModalTerhapusIsOpen(false);
  };

  const paragraph = event?.data?.deskripsi?.split("\n\n");

  const infoEvent = {
    imgInfo: rectangle,
    titleInfo: "Tari Kecak Daerah Bali",
    descInfo:
      "Tari kecak adalah saah satu tari khas bali yang menceritakan tentang bla bla bla bla...",
  };

  const [file, setFile] = useState();

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage={error.message} />
      ) : (
        <div className={styles.tambahEventContainer}>
          <h1 className="headline-small-semibold">Detail Event</h1>

          <div className="row pb-4">
            <div className="col-4">
              <div className="d-flex justify-content-center">
                {/* upload foto */}
                <div className={styles.containerEvent}>
                  <div className={styles.imgArea}>
                    <img
                      id="uploadedImage"
                      src={event?.data?.gambar}
                      alt="event-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* title + desc */}
            <div className="col">
              <div className="mt-3">
                <p className="title-large-semibold" id="nama">
                  {event?.data?.nama}
                </p>
              </div>

              <div className="mt-3">
                {paragraph?.map((text, index) => (
                  <p
                    key={index}
                    id={`articleDescription${index}`}
                    className="body-medium-regular"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* detail event */}
          <div className="pb-4">
            <div className={styles.containerEvent}>
              <div className="container">
                <h1 className="body-large-semibold">Detail Event</h1>

                <div className="row py-3">
                  <div className="col-lg-6">
                    <img src={info} alt="info" />
                    <span className="body-medium-semibold"> Info Lengkap</span>

                    <div className="d-grid col-12 mt-2">
                      <div className={`${styles.layoutInfo}`}>
                        <div>
                          <img src={infoEvent.imgInfo} alt="" />
                        </div>
                        <div>
                          <p className="body-medium-semibold">
                            {infoEvent.titleInfo}
                          </p>
                          <p className="body-small-regular">
                            {infoEvent.descInfo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mt-24">
                      <img src={lokasi} alt="lokasi" />
                      <span className="body-medium-semibold"> Lokasi</span>
                      <p className={`body-medium-regular`} id="lokasi"> 
                        {event?.data?.lokasi}
                      </p>
                    </div>

                    <div className="mt-24">
                      <img src={link} alt="link" />
                      <span className="body-medium-semibold">
                        Link Google Maps
                      </span>
                      <p className={`body-medium-regular`} id="linkLokasi">
                        {event?.data?.link_lokasi}
                      </p>
                    </div>

                    <div className="mt-24">
                      <img src={waktu} alt="waktu" />
                      <span className="body-medium-semibold"> Waktu Mulai</span>
                      <p className={`body-medium-regular`} id="waktuMulai">
                        {event?.data?.waktu_mulai}
                      </p>
                    </div>

                    <div className="mt-24">
                      <img src={waktu} alt="waktu" />
                      <span className="body-medium-semibold"> Waktu Selesai</span>
                      <p className={`body-medium-regular`} id="waktuSelesai">
                        {event?.data?.waktu_selesai}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* berbayar */}
          <div className="pb-4">
            <div className={styles.containerEvent}>
              <div className="container">
                <h1 className="body-large-semibold">Ticket Berbayar</h1>

                <div className="row">
                  <div className="col-lg-6">
                    <p className="body-smaill-regular">
                      Harga ticket aktif dan non aktif
                    </p>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex justify-content-end">
                      <Switch onClick={toggler} />
                    </div>
                  </div>
                </div>
                {toggle && (
                  <div className="row py-3">
                    <div className="col-lg-6">
                      <div className="m-2">
                        <span className="body-small-regular"> Harga</span>
                        <br />
                        <span className="body-medium-regular" id="hargaTiket">
                          {event?.data?.harga_tiket}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="m-2">
                        <span className="body-small-regular"> Jumlah</span>
                        <br />
                        <span className="body-medium-regular" id="stok_tiket">
                          {event?.data?.stok_tiket}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end gap-3 pt-5">
            <div className="d-grid col-3">
              <Button
                label="Hapus"
                color="white"
                icon={hapus}
                onClick={() => openKonfirmasiModal()}
                id="hapusButton"
              />
            </div>
            <div className="d-grid col-3">
              <Button
                label="Edit"
                color="brown"
                icon={edit}
                onClick={() => navigate(`/event/edit/${id}`)}
                id="editButton"
              />
            </div>
          </div>
        </div>
      )}
      {/* Modal */}
      <Modal
        isOpen={modalKonfirmasiIsOpen}
        onRequestClose={closeKonfirmasiModal}
        contentLabel="Confirmation Modal"
        style={customStylesConfirmation}
      >
        <div
          id="modalKonfirmasiContainer"
          className={`d-flex justify-content-center align-items-center`}
        >
          <div
            id="modalKonfirmasiContent"
            className={`d-flex flex-column justify-content-center align-items-center`}
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
              Apakah anda ingin menghapus data ini?
            </h4>
            <p id="modalKonfirmasiText1" className="body-small-regular">
              Data yang sudah dihapus tidak dapat dikembalikan lagi
            </p>
            <p id="modalKonfirmasiText2" className="body-small-regular mb-32">
              Apakah anda yakin?
            </p>
            <div className="d-flex gap-5 justify-content-center">
              <div className="d-grid col-6">
                <Button
                  id="modalKonfirmasiYesButton"
                  label="Yes"
                  color="white"
                  icon={check}
                  onClick={handleDelete}
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
      <Modal
        isOpen={modalTerhapusIsOpen}
        onRequestClose={closeTerhapusModal}
        contentLabel="Deleted Modal"
        style={customStylesConfirmation}
      >
        <div
          id="modal-terhapus-container"
          className={`d-flex justify-content-center align-items-center`}
        >
          <div
            id="modal-terhapus-content"
            className={`d-flex flex-column justify-content-center align-items-center`}
          >
            <img
              id="modal-terhapus-image"
              src={deleteImg}
              alt="success"
              className="mb-16"
            />
            <h4
              id="modal-terhapus-heading"
              className="title-large-semibold mb-16"
            >
              Berhasil Dihapus
            </h4>
            <p id="modal-terhapus-message" className="body-small-regular mb-16">
              Data telah berhasil dihapus
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailEvent;
