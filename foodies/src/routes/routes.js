import { lazy } from "react";
import WithSuspense from "../components/Loaders/WithSuspense";
import { PATHS } from "./constants";
import { Navigate } from "react-router-dom";

const { DASHBOARD } = PATHS;

const Dashboard = WithSuspense(
  lazy(() => import("../pages/Dashboard/Dashboard"))
);

export const ROUTES = [
  { path: DASHBOARD, element: <Dashboard /> },
  { path: "*", element: <Navigate to="/dashboard" replace /> },
];
