import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    updateProductAddOne: (state, action) => {
      state.products = state.products.map((product) => {
        if (product._id === action.payload._id) {
          return { ...product, quantity: action.payload.quantity };
        } else {
          return product;
        }
      });
      state.total += action.payload.price;
    },
    updateProductSubtractOne: (state, action) => {
      state.products = state.products
        .map((product) => {
          if (product._id === action.payload._id) {
            return { ...product, quantity: action.payload.quantity };
          } else {
            return product;
          }
        })
        .filter((product) => product.quantity !== 0);
      state.total -= action.payload.price;
      state.quantity = state.products.length;
    },
  },
});

export const { addProduct, updateProductAddOne, updateProductSubtractOne } =
  cartSlice.actions;
export default cartSlice.reducer;
