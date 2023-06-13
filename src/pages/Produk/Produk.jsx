import TableProduk from "../../components/Table/TableProduk/TableProduk";
import useApi from "../../api/useApi";
import React, { useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import EmptyTable from "../../components/EmptyTable/EmptyTable";

const Produk = () => {
  const { response: produk, loading, error, get } = useApi();

  useEffect(() => {
    get("/produk").catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  console.log(produk);
  console.log(error);
  console.log(loading);
  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : produk?.data?.data?.length === 0 ? (
          <EmptyTable />
        ) : (
          <TableProduk data={produk?.data?.data} />
        )}
      </div>
    </div>
  );
};

export default Produk;
