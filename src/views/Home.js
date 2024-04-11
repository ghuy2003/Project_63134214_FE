import React, { useEffect, useState } from "react";
import useTranslate from "@lang";
import useListener from "@store/useListener";

import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import FruitsShop from "./components/FruitsShop/FruitsShop";
import FruitsList from "./components/FruitsList/FruitsList";
import VesitableShop from "./components/VesitableShop/VesitableShop";
import Banner from "./components/Banner/Banner";

const Home = () => {
  const t = useTranslate();
  const { subscriber } = useListener();
  useEffect(() => {
    console.log(subscriber);
  }, [subscriber]);
  return (
    <>
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
