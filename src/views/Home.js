import React, { useEffect, useState } from "react";
import useTranslate from "@lang";
import useListener from "@store/useListener";
import { Row, Col } from "antd";
import {
  ComposedChart,
  Tooltip,
  Legend,
  Area,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import FruitsShop from "./components/FruitsShop/FruitsShop";
import FruitsList from "./components/FruitsList/FruitsList";
import VesitableShop from "./components/VesitableShop/VesitableShop";
import Banner from "./components/Banner/Banner";
// import { Socket } from 'socket.io-client'

const Home = () => {
  const t = useTranslate();
  const { subscriber } = useListener();
  useEffect(() => {
    console.log(subscriber);
  }, [subscriber]);
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <FruitsShop />
      <FruitsList />
      <VesitableShop />
      <Banner />
    </>
  );
};

export default Home;
