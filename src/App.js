import React, { useEffect, useState, useCallback } from "react";
import useUser from "@store/useUser";
import useRoutes from "@configs/useRoutes.config";
import { isArray } from "@utils/checkType";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import AppContext from "@context/AppContext";
import { create, createStore } from "zustand";
import Home from "@views/Home";
import "../src/css/style.css";
import "../src/css/bootstrap.min.css";
import Header from "@views/layouts/Header";
import Footer from "@views/layouts/Footer";
import ScrollToTopButton from "@components/ScrollToTopButton/ScrollToTopButton";
import ProductDetail from "@views/components/ProductDetail/ProductDetail";
import Shop from "@views/Shop";
import Contact from "@views/Contact";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";
import Cart from "@views/Cart";
import Login from "@views/components/Login/Login";
import Register from "@views/components/Login/Register";
import Dashboard from "@views/components/Dashboard/Dashboard";
// import "./scss copy/bootstrap/scss/bootstrap.scss";
const App = () => {
  const navigate = useNavigate();
  const { routes, privateRoutes } = useRoutes();
  const { token } = useUser();
  const [ready, setReady] = useState(false); // set after
  const renderRoute = (routes) => (
    <Routes>

      {routes.map((route) =>
        "children" in route ? (
          <Route key={route.key} {...route}>
            {renderRoute(route.children)}
          </Route>
        ) : (
          <Route key={route.key} {...route} />
        )
      )}
    </Routes>
  );


  const renderRoutePrivate = (routes) => (
    <Routes>
      {routes.map((route) =>
        "children" in route ? (
          <Route key={route.key} {...route}>
            {renderRoute(route.children)}
          </Route>
        ) : (
          <Route key={route.key} {...route} />
        )
      )}
    </Routes>
  );

  useEffect(() => {
  	token ? setReady(true) : setReady(false);
  }, [])
  return (
    <>
      <ScrollToTop />
      {renderRoute(routes)}
      <ScrollToTopButton />
    </>
  );
};

export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
