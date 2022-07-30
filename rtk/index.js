const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/icecream/icecreamSlice");
const { todoActions } = require("./features/todos/todoSlice");
const { fetchUsers } = require("./features/user/userSlice");

console.log("initial state:", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state:", store.getState())
);

store.dispatch(cakeActions.orderCake(2));
// store.dispatch(iceCreamActions.orderIceCream(1));
// store.dispatch(iceCreamActions.orderIceCream(1));
store.dispatch(cakeActions.restockCake(1));
// store.dispatch(iceCreamActions.restockIceCream(12));

// store.dispatch(
//   todoActions.addTodo({ title: "read book", text: "todo description" })
// );
// store.dispatch(
//   todoActions.addTodo({ title: "play", text: "todo description" })
// );

// store.dispatch(todoActions.deleteTodo("play"));
// store.dispatch(todoActions.deleteTodo("read book"));

// store.dispatch(fetchUsers());

// unsubscribe();
