import React, { useEffect } from "react";
import TableAkun from "../../components/Table/TableAkun/TableAkun";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import EmptyTable from "../../components/EmptyTable/EmptyTable";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";

const Akun = () => {
  const { response, error, loading, get } = useApi();

  useEffect(() => {
    get("/user").catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorDisplay errorMessage={error.message} />
        ) : response?.data?.data?.length === 0 ? (
          <EmptyTable />
        ) : (
          <TableAkun userData={response?.data?.data} />
        )}
      </div>
    </div>
  );
};

export default Akun;
