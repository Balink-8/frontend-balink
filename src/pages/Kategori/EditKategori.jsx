import React, { useState, useEffect } from "react";
import styles from "./TambahKategori.module.css";
import Input from "../../elements/Input/Input";
import Textarea from "../../elements/Textarea/Textarea";
import save from "../../assets/icons/save.svg";
import cancel from "../../assets/icons/cancel.svg";
import Button from "../../elements/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import ModalSuksesLogo from "../../assets/images/ModalSuksesLogo.png";
import ModalGagalLogo from "../../assets/images/ModalGagalLogo.png";
import Modal from "react-modal";

const EditKategori = () => {
  const navigate = useNavigate();
  const { response: kategori_produk, loading, error, get, put } = useApi();
  const [values, setValues] = useState ({
      nama: "",
      deskripsi: "",  
  });

  const { id } = useParams();

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

  useEffect(() => {
    get(`/kategori_produk/${id}`).catch(
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }, []);

  useEffect(() => {
    if (kategori_produk) {
        setValues({
            nama: kategori_produk.nama,
            deskripsi: kategori_produk.deskripsi,
      });
    }
  }, [kategori_produk]);

  const onSubmit = () => {
    put(`/kategori_produk/${id}`, values)
      .then(() => {
        openModalSukses();
      })
      .catch((error) => {
        openModalGagal();
        console.error(error);
      });
  };


  const onCancel = () => {
    navigate("/kategori");
  };
  

  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const openModalSukses = () => {
    setModalSuksesIsOpen(true);
    setTimeout(() => {
      closeModalSukses();
      navigate("/kategori");
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
    <div id="editKategoriContainer" className={styles.tambahEventContainer}>
      <h1 id="editKategoriTitle" className="headline-small-semibold">Edit Kategori</h1>

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
              id={"edit-nama"}
              name={"nama"}
              value={values.nama}
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
                id={"edit-deskripsi"}
                name={"deskripsi"}
                value={values.deskripsi}
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
            id="cancel"
            label="Batal" 
            color="white" 
            icon={cancel} 
            onClick={onCancel}/>
        </div>
        <div className="d-grid col-3 ">
            <Button 
            id="save"
            label="Simpan" 
            color="brown" 
            icon={save} 
            onClick={onSubmit} />
        </div>
      </div>
  

       {/* Modal */}
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
             Data yang anda uba sudah berhasil disimpan
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
             Data yang anda ubah Gagal disimpan
           </p>
         </div>
       </div>
     </Modal>
       </div>

      )}
    </div>
  );
};

export default EditKategori;
