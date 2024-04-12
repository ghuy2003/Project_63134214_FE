import CartItem from "@components/CartItem/CartItem";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    imgSrc: "img/vegetable-item-3.png",
    name: "Big Banana",
    price: "2.99",
    count: 1,
  },
  {
    id: 2,
    imgSrc: "img/vegetable-item-5.jpg",
    name: "Potatoes",
    price: "2.99",
    count: 1,
  },
  {
    id: 3,
    imgSrc: "img/vegetable-item-2.jpg",
    name: "Awesome Brocoli",
    price: "2.99",
    count: 1,
  },
];

const CardItemList = () => {
  const [productList, setProductList] = useState([...products]);

  const handleIncreaseQuantity = (id) => {
    const updatedProductList = productList.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count + 1,
        };
      } else {
        return product;
      }
    });

    setProductList(updatedProductList);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedProductList = productList.map((product) => {
      if (product.id === id) {
        return product.count > 1
          ? {
              ...product,
              count: product.count - 1,
            }
          : product;
      } else {
        return product;
      }
    });

    console.log("run...");

    setProductList(updatedProductList);
  };

  const handleDeletedCartItem = (id) => {
    setProductList([...productList.filter((product) => product.id !== id)]);
  };

  return (
    <>
      <tbody>
        {productList.map((product, index) => (
          <CartItem
            key={product.id}
            id={product.id}
            imgSrc={product.imgSrc}
            name={product.name}
            price={product.price}
            count={product.count}
            onIncreaQuality={handleIncreaseQuantity}
            onDecreaQuality={handleDecreaseQuantity}
            onDeletedCartItem={handleDeletedCartItem}
          />
        ))}
      </tbody>
    </>
  );
};

export default CardItemList;
