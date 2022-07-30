import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   numOfCakes: 10,
// };

const cakeSlice = createSlice({
  name: "cake",
  initialState: { numOfCakes: 10 },
  reducers: {
    orderCake: (state, action) => {
      state.numOfCakes = state.numOfCakes - action.payload;
    },
    restockCake: (state, action) => {
      state.numOfCakes = state.numOfCakes + action.payload;
    },
  },
});

// const reducer = cakeSlice.reducer
// const cakeActions = cakeSlice.actions

// module.exports = { reducer, cakeActions }

export default cakeSlice.reducer;
export const { orderCake, restockCake } = cakeSlice.actions;

// console.log(initialState);
