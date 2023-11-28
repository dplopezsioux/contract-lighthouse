import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Lógica de autenticación
  return localStorage.getItem("token") !== null;
  // return true;
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
