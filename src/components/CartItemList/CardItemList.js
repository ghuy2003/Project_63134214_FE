import CartItem from "@components/CartItem/CartItem";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const products = [
  {
    id: 1,
    imgSrc: "img/vegetable-item-3.png",
    name: "Big Banana",
    price: 2.99,
    count: 1,
  },
  {
    id: 2,
    imgSrc: "img/vegetable-item-5.jpg",
    name: "Potatoes",
    price: 2.99,
    count: 1,
  },
  {
    id: 3,
    imgSrc: "img/vegetable-item-2.jpg",
    name: "Awesome Brocoli",
    price: 2.99,
    count: 1,
  },
];

const CardItemList = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products.productList);

  return (
    <>
      <tbody>
        {productList.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            imgSrc={product.imgSrc}
            name={product.name}
            price={product.price}
            count={product.count}
          />
        ))}
      </tbody>
    </>
  );
};

export default CardItemList;
