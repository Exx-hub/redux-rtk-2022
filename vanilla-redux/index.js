const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;

const logger = require("./logger");

// action type
const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCK_CAKE";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

// action creator
const orderCake = (qty = 1) => {
  // action
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: RESTOCK_CAKE,
    payload: qty,
  };
};

const orderIcecream = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
};

const restockIcecream = (qty = 1) => {
  return {
    type: RESTOCK_ICECREAM,
    payload: qty,
  };
};

// initial state
const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecream: 20,
};

// reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - action.payload,
      };
    case RESTOCK_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    case CAKE_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};

// use for multiple reducers. so able to pass multiple reducers in create store as one rootReducer
const rootReducer = combineReducers({
  cakeState: cakeReducer,
  icecreamState: iceCreamReducer,
});

// create store
const store = createStore(rootReducer);

console.log("initial state", store.getState());

// subscribe and unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log("updated state:", store.getState());
});

// console.log(
//   store.subscribe(() => console.log("updated state", store.getState()))
// );

// store.dispatch(orderOneCake());
// store.dispatch(orderOneCake());
// store.dispatch(orderOneCake());
// store.dispatch({ type: CAKE_ORDERED, payload: 2 });

// store.dispatch(restock(5));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);

actions.orderCake(1);
// actions.restockCake(4);
// actions.orderIcecream(1);
// actions.restockIcecream(1);

unsubscribe();
