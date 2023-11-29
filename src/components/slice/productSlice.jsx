import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    cartItem: JSON.parse(localStorage.getItem("cartItem"))
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProd = state.cartItem.findIndex(
        (item) => item.id == action.payload.id
      );
      if (findProd !== -1) {
        state.cartItem[findProd].qun += 1;
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      } else {
        state.cartItem = [...state.cartItem, action.payload];
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      }
    },

    removeToCart: (state, action) => {
      state.cartItem.splice(action.payload, 1);
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    qunatityUpdate: (state, action) => {
      state.cartItem[action.payload].qun += 1;
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    minsToCart: (state, action) => {
      if (state.cartItem[action.payload].qun > 1) {
        state.cartItem[action.payload].qun -= 1;
        localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, qunatityUpdate, minsToCart } =
  counterSlice.actions;

export default counterSlice.reducer;
