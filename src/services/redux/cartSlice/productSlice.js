import { createSlice } from "@reduxjs/toolkit";
import { calculatorTotalQuanlity } from "@utils/calculateToTalQuanlity";
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

const initialState = {
  productList: [...products],
  coupon: "",
  totalCost: calculateTotalCost(products, ""),
  totalQuantity: calculatorTotalQuanlity(products),
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
      state.totalQuantity = calculatorTotalQuanlity(state.productList);
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
      state.totalQuantity = calculatorTotalQuanlity(state.productList);
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

      state.totalQuantity = calculatorTotalQuanlity(state.productList);
    },

    deleteProductFromCart: (state, action) => {
      const { id } = action.payload;

      const isProduct = state.productList.find((product) => product.id === id);

      if (isProduct) {
        state.productList = state.productList.filter(
          (product) => product.id !== isProduct.id
        );
      }

      state.totalCost = calculateTotalCost(state.productList, state.coupon);
      state.totalQuantity = calculatorTotalQuanlity(state.productList);
    },
    applyCoupon: (state, action) => {
      const { coupon } = action.payload;
      state.coupon = coupon;
      state.totalCost = calculateTotalCost(state.productList, state.coupon);
      state.totalQuantity = calculatorTotalQuanlity(state.productList);
    },
  },
});

export const {
  productList,
  coupon,
  totalCost,
  totalQuantity,
  increaseQuantity,
  decreaseQuantity,
  addProductToCart,
  deleteProductFromCart,
  applyCoupon,
  totalQuanlity,
} = productSlice.actions;

export default productSlice.reducer;
