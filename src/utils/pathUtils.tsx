import React from "react";
import Dashboard from "pages/Dashboard";
import Inventory from "pages/Inventory";
import MarketPlace from "pages/Marketplace";
import Store from "pages/Store";
import Trade from "pages/Trade";
import ProductDetail from "pages/ProductDetail";
import Order from "pages/Order";
import InventoryDetail from "pages/InventoryDetail";

import { OFFLINE_FOR_EDITS } from "../constants/constants";

interface PathInterFace {
  path: string;
  title: string | null;
  element: React.ReactNode;
}

const routesForEdits: PathInterFace[] = [
  { path: "/", title: "Dashboard", element: <Dashboard /> },
];

const routesForOnline: PathInterFace[] = [
  { path: "/marketplace", title: "MarketPlace", element: <MarketPlace /> },
  {
    path: "/marketplace/:id",
    title: null,
    element: <ProductDetail />,
  },
  { path: "/trade", title: "Trade", element: <Trade /> },
  { path: "/store", title: "Store", element: <Store /> },
  { path: "/order", title: null, element: <Order /> },
  { path: "/inventory", title: "Inventory", element: <Inventory /> },
  {
    path: "inventory/:address/:id",
    title: null,
    element: <InventoryDetail />,
  },
  { path: "/create", title: "Create", element: <Dashboard /> },
];

const routes = OFFLINE_FOR_EDITS ? routesForEdits : routesForOnline;

export default routes;
