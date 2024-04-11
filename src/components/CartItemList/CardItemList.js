import CartItem from "@components/CartItem/CartItem";
import React from "react";

const CardItemList = ({ products }) => {
  return (
    <>
      <tbody>
        {products.map((product, index) => (
          <CartItem
            key={index}
            imgSrc={product.imgSrc}
            name={product.name}
            price={product.price}
          />
        ))}
      </tbody>
    </>
  );
};

export default CardItemList;
