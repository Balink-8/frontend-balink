import React, { useEffect } from "react";
import TablePromo from "../../components/Table/TablePromo/TablePromo";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import EmptyTable from "../../components/EmptyTable/EmptyTable";

const Promo = () => {
  const { response: promo, loading, error, get } = useApi();

  useEffect(() => {
    get("/promo").catch((error) => {
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
          <p>Error: {error.message}</p>
        ) : promo?.data?.data?.length === 0 ? (
          <EmptyTable />
        ) : (
          <TablePromo data={promo?.data?.data} />
        )}
      </div>
    </div>
  );
};

export default Promo;
