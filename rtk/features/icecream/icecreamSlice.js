const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
  extraReducers: (builder) => {
    builder.addCase(cakeActions.orderCake, (state, action) => {
      state.numOfIcecream -= action.payload;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
