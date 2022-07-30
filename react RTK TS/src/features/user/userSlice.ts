import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


type User = {
  id: number
  name: string
}

type InitialState = {
  loading: boolean,
  users: User[]
  err: string 
}

const initialState: InitialState = {
  loading: false,
  users: [],
  err: "",
};

// generates pending , fulfilled or rejected action types
// here is async logic

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

// const userCallback = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/usersasd"
//   );
//   return response.data;
// };

// export const fetchUsers = createAsyncThunk("user/fetchUsers", userCallback);

//create fetch one user
export const fetchOneUser = createAsyncThunk("user/fetchOneUser", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        console.log("eto ang action ng pending:", action);
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        console.log("eto ang action ng fulfilled:", action);
        state.loading = false;
        state.users = action.payload;
        state.err = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log("eto ang action ng rejected:", action);
        state.loading = false;
        state.users = [];
        state.err = action.error.message || "Someting went wrong"
      });
    builder
      .addCase(fetchOneUser.pending, (state) => {
        state.loading = true;
        state.users = [];
        state.err = "";
      })
      .addCase(fetchOneUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [action.payload];
        state.err = "";
      })
      .addCase(fetchOneUser.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.err = action.error.message || "Something went wrong";
      });
  },
});

export default userSlice.reducer;

// module.exports = userSlice.reducer;
// module.exports.fetchUsers = fetchUsers;
