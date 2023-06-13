import React, { useEffect } from "react";
import TableEvent from "../../components/Table/TableEvent/TableEvent";
import useApi from "../../api/useApi";
import Spinner from "../../components/Spinner/Spinner";
import EmptyTable from "../../components/EmptyTable/EmptyTable";

const Event = () => {
  const { response: event, loading, error, get } = useApi();

  useEffect(() => {
    get("/event").catch((error) => {
      // Handle error
      console.error(error);
    });
  }, []);

  console.log(event?.data?.data);
  console.log(error);
  console.log(loading);

  return (
    <div>
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p>Error: {error}</p>
        ) : event?.data?.data.length === 0 ? (
          <EmptyTable />
        ) : (
          <TableEvent data={event?.data?.data} />
        )}
      </div>
    </div>
  );
};

export default Event;
