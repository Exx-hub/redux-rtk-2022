const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/icecreamSlice");
const todoReducer = require("../features/todos/todoSlice");
const userReducer = require("../features/user/userSlice");

const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cakeState: cakeReducer,
    // iceCreamState: iceCreamReducer,
    // todoState: todoReducer,
    // userState: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
