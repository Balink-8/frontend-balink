import React, { useEffect } from "react";
import TableArtikel from "../../components/Table/TableArtikel/TableArtikel";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import EmptyTable from "../../components/EmptyTable/EmptyTable";

const Artikel = () => {
  const { response: artikel, loading, error, get } = useApi();

  useEffect(() => {
    get("/artikel").catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  console.log(artikel?.data?.data);
  console.log(error);
  console.log(loading);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>Error: {error}</p>
        ) : artikel?.data?.data?.length === 0 ? (
          <EmptyTable />
        ) : (
          <TableArtikel data={artikel} />
        )}
      </div>
    </div>
  );
};

export default Artikel;
