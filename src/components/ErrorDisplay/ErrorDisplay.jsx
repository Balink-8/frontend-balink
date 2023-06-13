import React from "react";
import errorComputer from "../../assets/images/errorComputer.svg";

const ErrorDisplay = ({ errorMessage }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={errorComputer} alt="empty-img" style={{ width: "45%" }} />
      <h4 className="headline-large-bold">Something went wrong</h4>
      <p className="body-large-regular">{errorMessage}</p>
    </div>
  );
};

export default ErrorDisplay;
