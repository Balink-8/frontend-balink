import React, { useEffect, useState } from "react";
import TableAkun from "../../components/Table/TableAkun/TableAkun";
import useApi from "../../api/useApi";

const Akun = () => {
  const { response, error, loading, get } = useApi();

  console.log(response);
  console.log(error);
  console.log(loading);

  useEffect(() => {
    get("https://647ca813c0bae2880ad10a5f.mockapi.io/balink/user").catch(
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
          <TableAkun userData={response} />
        )}
      </div>
    </div>
  );
};

export default Akun;
