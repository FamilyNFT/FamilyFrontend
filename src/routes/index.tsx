import { Routes, Route } from "react-router-dom";
import pathUtils from "../utils/pathUtils";
import Dashboard from "pages/Dashboard";
import React from "react";

import Layout from "components/Layout";

const Application: React.FC = () => {
  return (
    <Routes>
      <Route element={<Dashboard />} path="/" />
      {pathUtils.map((route, index: number) => (
        <Route key={index} element={route.element} path={route.path} />
      ))}
    </Routes>
  );
};

export default Application;
