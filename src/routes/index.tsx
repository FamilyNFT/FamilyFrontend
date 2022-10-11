import { Routes, Route, Navigate } from "react-router-dom";
import pathUtils from "../utils/pathUtils";

import Dashboard from "../pages/Dashboard";

const routes = [
  {
    path: pathUtils.DASHBOARD,
    element: <Dashboard />,
  },
];

const Application: React.FC = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  );
};

export default Application;
