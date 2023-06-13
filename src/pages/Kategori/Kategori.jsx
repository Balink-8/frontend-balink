import React, { useEffect } from "react";
import TableKategori from "../../components/Table/TableKategori/TableKategori";
import useApi from "../../api/useApi";

const Kategori = () => {
  const { response: kategori, loading, error, get } = useApi();

  useEffect(() => {
      get("https://6486e617beba6297278f6c94.mockapi.io/kategori").catch(
          (error) => {
              // Handle error
              console.error(error);
          } 
      );
  }, []);

  return (
      <div>
          <div>
              {loading ? (
                  <p>Loading...</p>
              ) : error ? (
                  <p>Error: {error}</p>
              ) : (
                  <TableKategori data={kategori} />
              )}
          </div>
      </div>
  )
};

export default Kategori;
