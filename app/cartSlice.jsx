import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem ("cart") || "[]"),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push({ ...action.payload, qty: 1 });
      localStorage.setItem("cart" , JSON.stringify (state.cart))
    },
    increase: (state, action) => {
      state.cart = state.cart?.map((el) => {
        if (el.id === action.payload) {
          return { ...el, qty: el.qty + 1 };
        } else {
          return el;
        }
      });
       localStorage.setItem("cart" , JSON.stringify (state.cart))
    },

    decrease: (state, action) => {
      const item = state.cart.find((el) => el.id === action.payload);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          state.cart = state.cart.filter((el) => el.id !== action.payload);
        }
      }else {
        state.cart = state.cart((el) => el.id !== action.payload)
      }
       localStorage.setItem("cart" , JSON.stringify (state.cart))
    },

   
        removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (el) => el.id !== action.payload
      );
        localStorage.setItem("cart" , JSON.stringify (state.cart))
    },

    clearCart: (state) => {
      state.cart = [];
    }
    }
  }
);

export const { addToCart, increase, decrease , removeFromCart , clearCart } = cartSlice.actions;
export default cartSlice.reducer;
