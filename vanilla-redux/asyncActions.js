const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require("redux-thunk").default;
const axios = require("axios");
const logger = require("./logger");

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCESSFUL = "FETCH_USERS_SUCCESSFUL";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchSucess = (users) => {
  return {
    type: FETCH_USERS_SUCCESSFUL,
    payload: users,
  };
};

const fetchUsersFailed = (err) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: err,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// async Actions creator - from thunk
const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequested());

    axios
      .get("http://jsonplaceholder.typicode.com/usersasd")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchSucess(users));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchUsersFailed(errMsg));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

const unsubscribe = store.subscribe(() => {});

store.dispatch(fetchUsers());

unsubscribe();
