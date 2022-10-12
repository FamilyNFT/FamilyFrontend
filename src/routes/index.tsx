import { Routes, Route } from "react-router-dom";
import pathUtils from "../utils/pathUtils";
import Dashboard from "pages/Dashboard";

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
