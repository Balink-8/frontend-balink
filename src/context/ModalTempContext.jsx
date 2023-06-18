import React, { createContext, useState } from "react";

const ModalTempContext = createContext();

const ModalTempContextProvider = ({ children }) => {
  const [showModalTemp, setShowModalTemp] = useState(false);

  const closeModalTemp = () => {
    setShowModalTemp(false);
  };

  const openModalTemp = () => {
    setShowModalTemp(true);
    setTimeout(closeModalTemp, 1500);
  };

  return (
    <ModalTempContext.Provider
      value={{
        showModalTemp,
        closeModalTemp,
        openModalTemp,
      }}
    >
      {children}
    </ModalTempContext.Provider>
  );
};

export { ModalTempContextProvider, ModalTempContext };
