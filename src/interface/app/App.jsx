import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const WelcomePage = lazy(() => import("./components/public/WelcomePage"));
const AboutPage = lazy(() => import("./components/public/AboutPage"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Settings = lazy(() => import("./components/settings/Settings"));
const Session = lazy(() => import("./components/session/Session"));
const Login = lazy(() => import("./components/auth/Login"));
const Logout = lazy(() => import("./components/auth/Logout"));
const Register = lazy(() => import("./components/auth/Register"));

import PrivateRoute from "./PrivateRoute";

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
    element: (
      <Suspense fallback={<div>Cargando...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<div>Cargando...</div>}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/Logout",
    element: (
      <Suspense fallback={<div>Cargando...</div>}>
        <Logout />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Cargando...</div>}>
          <Dashboard />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/settings",
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Cargando...</div>}>
          <Settings />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/session",
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Cargando...</div>}>
          <Session />
        </Suspense>
      </PrivateRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
