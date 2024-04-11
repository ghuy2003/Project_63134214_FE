import CardItemList from "@components/CartItemList/CardItemList";
import CartTotal from "@components/CartTotal/CartTotal";
import CouponInput from "@components/CouponInput/CouponInput";
import React from "react";

const products = [
  {
    id: 1,
    imgSrc: "img/vegetable-item-3.png",
    name: "Big Banana",
    price: "2.99 $",
  },
  {
    id: 2,
    imgSrc: "img/vegetable-item-5.jpg",
    name: "Potatoes",
    price: "2.99 $",
  },
  {
    id: 3,
    imgSrc: "img/vegetable-item-2.jpg",
    name: "Awesome Brocoli",
    price: "2.99 $",
  },
];

const Cart = () => {
  return (
    <>
      <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6">Cart</h1>
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li class="breadcrumb-item active text-white">Cart</li>
        </ol>
      </div>

      <div class="container-fluid py-5">
        <div class="container py-5">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <CardItemList products={products} />
            </table>
          </div>

          <CouponInput />

          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default Cart;