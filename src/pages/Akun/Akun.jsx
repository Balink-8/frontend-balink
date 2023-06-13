import React, { useEffect } from "react";
import TableAkun from "../../components/Table/TableAkun/TableAkun";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";

const Akun = () => {
  const { response, error, loading, get } = useApi();

  useEffect(() => {
    get("/user").catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  console.log(response?.data?.data);
  console.log(error);
  console.log(loading);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <TableAkun userData={response?.data?.data} />
        )}
      </div>
    </div>
  );
};

export default Akun;
