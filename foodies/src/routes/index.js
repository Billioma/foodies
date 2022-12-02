import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";

const Wrapper = () => {
  const routes = useRoutes(ROUTES);
  return routes;
};

const Pages = () => {
  const location = useLocation();

  return <Wrapper key={location.pathname} />;
};

export default Pages;
