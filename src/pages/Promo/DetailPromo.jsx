import React, { useEffect, useContext } from "react";
import styles from "./Promo.module.css";
import Button from "../../elements/Button/Button";
import edit from "../../assets/icons/edit_square_white.svg";
import hapus from "../../assets/icons/delete.svg";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import ModalKonfirmasi from "../../components/Modal/ModalKonfirmasi/ModalKonfirmasi";
import ModalTerhapus from "../../components/Modal/ModalTerhapus/ModalTerhapus";
import { ModalConfirmationContext } from "../../context/ModalConfirmationContext";
import { ModalTempContext } from "../../context/ModalTempContext";

const DetailPromo = () => {
  const navigate = useNavigate();
  const { response: promo, error, loading, get, del } = useApi();
  const { id } = useParams();

  const { showModalConfirmation, openModalConfirmation, selectedId } =
    useContext(ModalConfirmationContext);
  const { showModalTemp } = useContext(ModalTempContext);
  useEffect(() => {
    get(`/promo/${id}`).catch((error) => {
      // Handle error
      console.error(error);
    });
  }, [id]);

  const handleDeletePromo = (selectedId) => {
    del(`/promo/${selectedId}`).catch((error) => {
      // Handle error
      // console.error(error);
    });
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorDisplay errorMessage={error.message} />
      ) : (
        <div className={`${styles.autoLayoutDetail}`}>
          <div className={`${styles.layoutDetail}`}>
            <p className="headline-small-semibold">Detail Promo</p>

            <div id="namaPromo">
              <p className="title-medium-semibold">{promo?.data?.nama}</p>
              <p className="body-medium-regular">{promo?.data?.deskripsi}</p>
            </div>

            <div id="kodePromo">
              <p className="body-small-regular">Kode Promo</p>
              <p className="body-medium-semibold">{promo?.data?.kode}</p>
            </div>

            <div id="potonganHarga">
              <p className="body-small-regular">Potongan Harga</p>
              <p className="body-medium-semibold">{promo?.data?.potongan_harga}</p>
            </div>
          </div>

          <div className="d-flex justify-content-end gap-3 pt-5">
            <div className="d-grid col-3">
              <Button
                label="Hapus"
                color="white"
                icon={hapus}
                onClick={() => openModalConfirmation(id)}
              />
            </div>
            <div className="d-grid col-3">
              <Button
                label="Edit"
                color="brown"
                icon={edit}
                onClick={() => navigate(`/promo/edit/${id}`)}
              />
            </div>
          </div>
        </div>
      )}
      {showModalConfirmation && (
        <ModalKonfirmasi
          onClick={() => handleDeletePromo(selectedId)}
          path={"promo"}
        />
      )}
      {showModalTemp && <ModalTerhapus />}
    </div>
  );
};

export default DetailPromo;
