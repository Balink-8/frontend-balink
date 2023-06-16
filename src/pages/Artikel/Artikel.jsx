import React, { useEffect } from "react";
import TableArtikel from "../../components/Table/TableArtikel/TableArtikel";
import useApi from "../../api/useApi";

const Artikel = () => {
  const { response: artikel, loading, error, get } = useApi();

  useEffect(() => {
    get("https://647ca813c0bae2880ad10a5f.mockapi.io/balink/article").catch(
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }, []);

  console.log(artikel);
  console.log(error);
  console.log(loading);

  return (
    <div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <TableArtikel data={artikel} />
        )}
      </div>
    </div>
  );
};

export default Artikel;
