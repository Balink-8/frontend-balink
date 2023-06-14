import React from "react";
import EmptyTableImg from "../../assets/images/EmptyTableImg.svg";

const EmptyTable = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      id="empty-table-container"
    >
      <img
        src={EmptyTableImg}
        alt="empty-img"
        style={{ width: "40%" }}
        id="empty-table-image"
      />
      <h4 className="headline-large-bold" id="empty-table-text">
        No Data Found
      </h4>
    </div>
  );
};

export default EmptyTable;
