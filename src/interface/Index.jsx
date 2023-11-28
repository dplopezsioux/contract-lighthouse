import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./css/global.css";
import { AuthProvider } from "./app/components/auth/AuthContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
