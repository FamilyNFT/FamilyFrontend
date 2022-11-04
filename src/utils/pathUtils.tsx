import React from "react";
import Dashboard from "pages/Dashboard";
import Inventory from "pages/Inventory";
import Trade from "pages/Trade";

interface PathInterFace {
  path: string;
  title: string;
  element: React.ReactNode;
}

const routes: PathInterFace[] = [
  { path: "/create", title: "Create", element: <Dashboard /> },
  { path: "/inventory", title: "Inventory", element: <Inventory /> },
  { path: "/marketplace", title: "MarketPlace", element: <Dashboard /> },
  { path: "/trade", title: "Trade", element: <Trade /> },
  { path: "/store", title: "Store", element: <Dashboard /> },
];

export default routes;
