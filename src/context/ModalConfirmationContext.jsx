import React, { createContext, useState } from "react";

const ModalConfirmationContext = createContext();

const ModalConfirmationContextProvider = ({ children }) => {
  const [showModalConfirmation, setShowModalConfirmation] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const closeModalConfirmation = () => {
    setShowModalConfirmation(false);
  };

  const openModalConfirmation = () => {
    setShowModalConfirmation(true);
  };

  return (
    <ModalConfirmationContext.Provider
      value={{
        showModalConfirmation,
        closeModalConfirmation,
        openModalConfirmation,
        selectedId,
        setSelectedId,
      }}
    >
      {children}
    </ModalConfirmationContext.Provider>
  );
};

export { ModalConfirmationContextProvider, ModalConfirmationContext };
