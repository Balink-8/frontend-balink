import React, { useEffect } from "react";
import TableKategori from "../../components/Table/TableKategori/TableKategori";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import EmptyTable from "../../components/EmptyTable/EmptyTable";

const Kategori = () => {
  const { response: kategori, loading, error, get } = useApi();

  useEffect(() => {
    get("/kategori_produk").catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  console.log(error);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : kategori?.data?.data?.length === 0 ? (
          <EmptyTable />
        ) : (
          <TableKategori data={kategori?.data?.data} />
        )}
      </div>
    </div>
  );
};

export default Kategori;
