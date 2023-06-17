import React, { useEffect, useContext } from "react";
import TablePromo from "../../components/Table/TablePromo/TablePromo";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";

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
          <ErrorDisplay errorMessage={error.message} />
        ) : (
          <TablePromo data={promo?.data?.data} />
        )}
      </div>
    </div>
  );
};

export default Promo;