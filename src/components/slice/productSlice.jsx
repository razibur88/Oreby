import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "name",
  initialState: {
    value: 0,
    subtotal: 0,
  },
  reducers: {
    ami: (state) => {
      state.value += 1;
    },
    minus: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    tumi: (state, action) => {
      state.subtotal = state.value * action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ami, tumi, minus } = counterSlice.actions;

export default counterSlice.reducer;
