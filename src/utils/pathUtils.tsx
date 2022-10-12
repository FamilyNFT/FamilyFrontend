import Dashboard from "pages/Dashboard";
import React from "react";

interface PathInterFace {
  path: string;
  title: string;
  element: React.ReactNode;
}

const routes: PathInterFace[] = [
  { path: "/create", title: "Create", element: <Dashboard /> },
  { path: "/inventory", title: "Inventory", element: <Dashboard /> },
  { path: "/marketplace", title: "MarketPlace", element: <Dashboard /> },
  { path: "/trade", title: "Trade", element: <Dashboard /> },
  { path: "/store", title: "Store", element: <Dashboard /> },
];

export default routes;
