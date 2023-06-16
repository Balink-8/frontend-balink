import React, { useEffect, useContext } from "react";
import TableArtikel from "../../components/Table/TableArtikel/TableArtikel";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ModalTerhapus from "../../components/Modal/ModalTerhapus/ModalTerhapus";
import { ModalTempContext } from "../../context/ModalTempContext";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";

const Artikel = () => {
  const { response: artikel, loading, error, get } = useApi();
  const { showModalTemp, openModalTemp } = useContext(ModalTempContext);

  useEffect(() => {
    get("/artikel").catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  console.log(artikel);
  console.log(error);
  console.log(loading);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorDisplay errorMessage={error.message} />
        ) : (
          <TableArtikel data={artikel?.data?.data} />
        )}
      </div>
      {showModalTemp && <ModalTerhapus />}
    </div>
  );
};

export default Artikel;
