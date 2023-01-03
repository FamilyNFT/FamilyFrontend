import React from "react";
import Dashboard from "pages/Dashboard";
import Inventory from "pages/Inventory";
import MarketPlace from "pages/Marketplace";
import Store from "pages/Store";
import Trade from "pages/Trade";
import ProductDetail from "pages/ProductDetail";
import Order from "pages/Order";

interface PathInterFace {
  path: string;
  title: string | null;
  element: React.ReactNode;
}

const routes: PathInterFace[] = [
  { path: "/marketplace", title: "MarketPlace", element: <MarketPlace /> },
  {
    path: "/marketplace/:id",
    title: null,
    element: <ProductDetail />,
  },
  { path: "/trade", title: "Trade", element: <Trade /> },
  { path: "/store", title: "Store", element: <Store /> },
  { path: "/order", title: "Order", element: <Order /> },
  { path: "/inventory", title: "Inventory", element: <Inventory /> },
  { path: "/create", title: "Create", element: <Dashboard /> },
];

export default routes;
