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
import Shop from "@views/Shop";
import Cart from "@views/Cart";
import Register from "@views/components/Login/Register";
import Contact from "@views/Contact";
import Dashboard from "@views/components/Dashboard/Dashboard";
import Checkout from "@views/components/Checkout/Checkout";
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
      key: "/shop",
      label: t("product").toCapitalize(),
      path: "/shop",
      element: (
        <LayoutClient>
          <Shop />
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
    {
      key: "/product:id",
      label: t("product").toCapitalize(),
      path: "/product:id",
      element: (
        <LayoutClient>
          <ProductDetail />
        </LayoutClient>
      ),
    },

    {
      key: "/cart",
      label: t("product").toCapitalize(),
      path: "/cart",
      element: (
        <LayoutClient>
          <Cart />
        </LayoutClient>
      ),
    },
    {
      key: "/cart",
      label: t("cart").toCapitalize(),
      path: "/cart",
      element: (
        <LayoutClient>
          <Contact />
        </LayoutClient>
      ),
    },
    {
      key: "/login",
      label: t("login").toCapitalize(),
      path: "/login",
      element: (
        <LayoutClient>
          <Login />
        </LayoutClient>
      ),
    },
    {
      key: "/register",
      label: t("register").toCapitalize(),
      path: "/register",
      element: (
        <LayoutClient>
          <Register />
        </LayoutClient>
      ),
    },

    {
      key: "/contact",
      label: t("contact").toCapitalize(),
      path: "/contact",
      element: (
        <LayoutClient>
          <Contact />
        </LayoutClient>
      ),
    },

    {
      key: "/dashboard",
      label: t("dashboard").toCapitalize(),
      path: "/dashboard",
      element: (
        // <LayoutClient>
        //   <Dashboard />
        // </LayoutClient>
        <Dashboard />
      ),
    },

    {
      key: "/checkout",
      label: t("checkout").toCapitalize(),
      path: "/checkout",
      element: (
        <LayoutClient>
          <Checkout />
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
