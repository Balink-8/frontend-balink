import React, { createContext, useState, useContext } from "react";
import { ModalAkunContext } from "./ModalAkunContext";
const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalTemp, setShowModalTemp] = useState(false);
  const { closeModalAkun } = useContext(ModalAkunContext);

  const openModalTemp = () => {
    setShowModalTemp(true);
    setTimeout(closeModalTemp, 1500);
  };

  const closeModalTemp = () => {
    setShowModalTemp(false);
    setShowModal(false);
    closeModalAkun();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        openModalTemp,
        closeModal,
        openModal,
        closeModalTemp,
        showModalTemp,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
