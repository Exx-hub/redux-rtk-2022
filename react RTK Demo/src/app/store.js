import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/icecreamSlice";
import todoReducer from "../features/todos/todoSlice";
import userReducer from "../features/user/userSlice";

// import { createLogger } from "redux-logger";

// const logger = createLogger();

const store = configureStore({
  reducer: {
    cakeState: cakeReducer,
    iceCreamState: iceCreamReducer,
    // todoState: todoReducer,
    userState: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
