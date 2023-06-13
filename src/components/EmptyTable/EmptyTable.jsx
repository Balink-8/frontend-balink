import React from "react";
import EmptyTableImg from "../../assets/images/EmptyTableImg.svg";

const EmptyTable = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={EmptyTableImg} alt="empty-img" className="w-50" />
      <h4 className="headline-large-bold">No Data Found</h4>
    </div>
  );
};

export default EmptyTable;
