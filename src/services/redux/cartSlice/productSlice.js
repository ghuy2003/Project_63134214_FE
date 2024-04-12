import { createSlice } from "@reduxjs/toolkit";
import { calculateTotalCost } from "@utils/calculateTotalCost";
const products = [
  {
    id: 1,
    imgSrc: "img/vegetable-item-3.png",
    name: "Big Banana",
    price: 2.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    count: 1,
  },
  {
    id: 2,
    imgSrc: "img/vegetable-item-5.jpg",
    name: "Potatoes",
    price: 2.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    count: 1,
  },
  {
    id: 3,
    imgSrc: "img/vegetable-item-2.jpg",
    name: "Awesome Brocoli",
    price: 2.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    count: 1,
  },
];

const l = [
  {
    id: 1,
    imgSrc: "img/fruite-item-5.jpg",
    name: "Grapes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: 4.99,
  },
  {
    id: 2,
    imgSrc: "img/fruite-item-2.jpg",
    name: "Raspberries",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: 3.99,
  },
  {
    id: 3,
    imgSrc: "img/fruite-item-4.jpg",
    name: "Apricots",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: 2.49,
  },
];

const initialState = {
  productList: [...products],
  coupon: "",
  totalCost: calculateTotalCost(products, ""),
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initializeProducts: (state, action) => {
      state.productList = action.payload;
    },

    increaseQuantity: (state, action) => {
      const { id } = action.payload;

      const productToUpdate = state.productList.find(
        (product) => product.id === id
      );

      if (productToUpdate) {
        productToUpdate.count += 1;
      }

      state.totalCost = calculateTotalCost(state.productList, state.coupon);
    },

    decreaseQuantity: (state, action) => {
      const { id } = action.payload;

      const productToUpdate = state.productList.find(
        (product) => product.id === id
      );

      if (productToUpdate && productToUpdate.count > 1) {
        productToUpdate.count -= 1;
      }

      state.totalCost = calculateTotalCost(state.productList, state.coupon);
    },

    addProductToCart: (state, action) => {
      const product = state.productList.find(
        (prod) => prod.id === action.payload.id
      );

      if (!product) {
        state.productList.push(action.payload);
      } else {
        product.count += 1;
      }

      state.totalCost = calculateTotalCost(state.productList, state.coupon);

      console.log(state.productList, state.totalCost);
    },

    deleteProductFromCart: (state, action) => {
      const { id } = action.payload;

      console.log(state.productList);

      const isProduct = state.productList.find((product) => product.id === id);

      if (isProduct) {
        state.productList.filter((product) => product.id !== isProduct.id);
      }
      console.log(state.productList);
      state.totalCost = calculateTotalCost(state.productList, state.coupon);
    },
    applyCoupon: (state, action) => {
      const { coupon } = action.payload;
      state.coupon = coupon;
      state.totalCost = calculateTotalCost(state.productList, state.coupon);
    },
  },
});

export const {
  productList,
  coupon,
  totalCost,
  increaseQuantity,
  decreaseQuantity,
  addProductToCart,
  deleteProductFromCart,
  applyCoupon,
} = productSlice.actions;

export default productSlice.reducer;
