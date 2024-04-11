import React from "react";
import useTranslate from "@lang";
import Layout from "@views/layouts/Layout";
import Login from "@views/components/Login/Login";
import Home from "@views/Home";
import {
  ContainerOutlined,
  PieChartOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import ProductDetail from "@views/components/ProductDetail/ProductDetail";
import LayoutClient from "@views/layouts/LayoutClient";
const ICON_SIZE = "15px";

const useRoutes = () => {
  const t = useTranslate();
  function getItem(label, key, path, icon, element, type) {
    return {
      label,
      key,
      icon,
      path,
      element,
      type,
    };
  }
  const publicRoutes = [
    {
      key: "/dashboard",
      label: t("dashboard").toCapitalize(),
      path: "/",
      element: (
        <LayoutClient>
          <Home />
        </LayoutClient>
      ),
    },
    {
      key: "/product",
      label: t("product").toCapitalize(),
      path: "/product",
      element: (
        <LayoutClient>
          <ProductDetail />
        </LayoutClient>
      ),
    },
  ];

  const privateRoutes = [
    {
      key: "/login",
      label: "login",
      path: "/login",
      element: <Login />,
    },
    {
      key: "/devices",
      label: "devices",
      path: "/devices",
      element: <Login />,
    },
  ];

  return {
    publicRoutes,
    privateRoutes,
    routes: [...publicRoutes, ...privateRoutes],
  };
};

export default useRoutes;
