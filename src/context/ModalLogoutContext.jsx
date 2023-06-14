import React, { createContext, useState } from "react";

const ModalLogoutContext = createContext();

const ModalLogoutContextProvider = ({ children }) => {
  const [showModalLogout, setShowModalLogout] = useState(false);

  const closeModalLogout = () => {
    setShowModalLogout(false);
  };

  const openModalLogout = () => {
    setShowModalLogout(true);
  };

  return (
    <ModalLogoutContext.Provider
      value={{
        showModalLogout,
        closeModalLogout,
        openModalLogout,
      }}
    >
      {children}
    </ModalLogoutContext.Provider>
  );
};

export { ModalLogoutContextProvider, ModalLogoutContext };
