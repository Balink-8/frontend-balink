import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";

function PrivateRoute() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
