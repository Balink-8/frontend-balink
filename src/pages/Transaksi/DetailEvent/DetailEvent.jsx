import React from "react";
import DetailTransaksiEvent from "../../../components/DetailTransaksi/DetailTransaksiEvent/DetailTransaksiEvent";

const DetailEvent = () => {
  return (
    <DetailTransaksiEvent
      userDataDetailEvent={userDataDetailEvent}
      userDataEventStatus={userDataEventStatus}
    />
  );
};

export default DetailEvent;
