import React, { useEffect, useContext } from "react";
import TableArtikel from "../../components/Table/TableArtikel/TableArtikel";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";

const Artikel = () => {
  const { response: artikel, loading, error, get } = useApi();

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
    </div>
  );
};

export default Artikel;
