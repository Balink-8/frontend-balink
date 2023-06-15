import React, { useEffect, useContext } from "react";
import styles from "./DetailArtikel.module.css";
import useApi from "../../api/useApi";
import { useParams } from "react-router-dom";
import Button from "../../elements/Button/Button";
import hapus from "../../assets/icons/delete.svg";
import edit from "../../assets/icons/edit_square_white.svg";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import ModalKonfirmasi from "../../components/Modal/ModalKonfirmasi/ModalKonfirmasi";
import ModalTerhapus from "../../components/Modal/ModalTerhapus/ModalTerhapus";
import { ModalConfirmationContext } from "../../context/ModalConfirmationContext";
import { ModalTempContext } from "../../context/ModalTempContext";

const DetailArtikel = () => {
  const { id } = useParams();
  const { response: artikel, loading, error, get, del } = useApi();
  const navigate = useNavigate();
  const { showModalConfirmation, openModalConfirmation, selectedId } =
    useContext(ModalConfirmationContext);
  const { showModalTemp } = useContext(ModalTempContext);
  useEffect(() => {
    get(`/artikel/${id}`).catch((error) => {
      // Handle error
      console.error(error);
    });
  }, [id]);

  const handleDeleteArtikel = (selectedId) => {
    del(`/artikel/${selectedId}`).catch((error) => {
      // Handle error
      // console.error(error);
    });
  };

  const paragraph = artikel?.data?.isi?.split("\n\n");
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage={error.message} />
      ) : (
        <div id="detailArtikelContainer">
          <div id="detailArtikelContentContainer" className={styles.container}>
            <h1
              id="detailArtikelTitle"
              className="headline-small-semibold mb-16"
            >
              Detail Artikel
            </h1>
            <div className="d-flex justify-content-center align-items-center mb-24">
              <img
                id="articleImage"
                src={artikel?.data?.gambar}
                alt="article-img"
                className={`${styles.imgArticle} w-25`}
              />
            </div>
            <h4 id="articleTitle" className="title-large-semibold mb-24">
              {artikel?.data?.judul}
            </h4>
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
          <div className="d-flex justify-content-end gap-3 pt-3">
            <div className="d-grid col-3">
              <Button
                label="Hapus"
                color="white"
                icon={hapus}
                onClick={() => openModalConfirmation(id)}
                id="hapusButton"
              />
            </div>
            <div className="d-grid col-3">
              <Button
                label="Edit"
                color="brown"
                icon={edit}
                onClick={() => navigate(`/artikel/edit/${id}`)}
                id="editButton"
              />
            </div>
          </div>
        </div>
      )}
      {showModalConfirmation && (
        <ModalKonfirmasi
          onClick={() => handleDeleteArtikel(selectedId)}
          path={"artikel"}
        />
      )}
      {showModalTemp && <ModalTerhapus />}
    </div>
  );
};

export default DetailArtikel;
