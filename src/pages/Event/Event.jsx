import React, { useContext, useEffect } from "react";
import TableEvent from "../../components/Table/TableEvent/TableEvent";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ModalTerhapus from "../../components/Modal/ModalTerhapus/ModalTerhapus";
import { ModalTempContext } from "../../context/ModalTempContext";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";

const Event = () => {
  const { response: event, loading, error, get } = useApi();
  const { showModalTemp, openModalTemp } = useContext(ModalTempContext);


  useEffect(() => {
    get("/event").catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  console.log(event);
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
          <TableEvent data={event?.data?.data} />
        )}
      </div>
      {showModalTemp && <ModalTerhapus />}
    </div>
  );
};

export default Event;
