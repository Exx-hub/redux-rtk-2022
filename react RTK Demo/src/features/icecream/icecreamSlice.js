import { createSlice } from "@reduxjs/toolkit";
import { orderCake } from "../cake/cakeSlice";

const initialState = {
  numOfIcecream: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIceCream: (state, action) => {
      state.numOfIcecream -= action.payload;
    },
    restockIceCream: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/orderCake"]: (state, action) => {
  //       state.numOfIcecream -= action.payload;
  //     },
  //   },
  // extraReducers: (builder) => {
  //   builder.addCase(orderCake, (state, action) => {
  //     state.numOfIcecream -= action.payload;
  //   });
  // },
});

export default iceCreamSlice.reducer;
export const { orderIceCream, restockIceCream } = iceCreamSlice.actions;
// export const iceCreamActions = iceCreamSlice.actions;

// module.exports = iceCreamSlice.reducer;
// module.exports.iceCreamActions = iceCreamSlice.actions;
