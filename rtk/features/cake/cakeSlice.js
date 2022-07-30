const createSlice = require("@reduxjs/toolkit").createSlice;

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

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;

// console.log(initialState);
