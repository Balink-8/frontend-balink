import React, { createContext, useState } from "react";
const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setTimeout(closeModal, 1500);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModalLogout = () => {
    setShowModal(true);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, openModal, closeModal, openModalLogout }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
