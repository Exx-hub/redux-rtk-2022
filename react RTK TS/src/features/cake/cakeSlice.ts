import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfCakes: number
}

const initialState: InitialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    orderCake: (state, action: PayloadAction<number>) => {
      state.numOfCakes = state.numOfCakes - action.payload;
    },
    restockCake: (state, action: PayloadAction<number>) => {
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
