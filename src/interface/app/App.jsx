import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./components/public/WelcomePage";
import AboutPage from "./components/public/AboutPage";
import Dashboard from "./components/dashboard/Dashboard";
import Settings from "./components/settings/Settings";
import Session from "./components/session/Session";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Logout",
    element: <Logout />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/settings",
    element: (
      <PrivateRoute>
        <Settings />
      </PrivateRoute>
    ),
  },
  {
    path: "/session",
    element: (
      <PrivateRoute>
        <Session />
      </PrivateRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
