import React, { useEffect, useContext } from "react";
import TablePromo from "../../components/Table/TablePromo/TablePromo";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ModalTerhapus from "../../components/Modal/ModalTerhapus/ModalTerhapus";
import { ModalTempContext } from "../../context/ModalTempContext";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";

const Promo = () => {
  const { response: promo, loading, error, get } = useApi();
  const { showModalTemp, openModalTemp } = useContext(ModalTempContext);

  useEffect(() => {
    get("/promo").catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorDisplay errorMessage={error.message} />
        ) : (
          <TablePromo data={promo?.data?.data} />
        )}
      </div>
      {showModalTemp && <ModalTerhapus />}
    </div>
  );
};

export default Promo;