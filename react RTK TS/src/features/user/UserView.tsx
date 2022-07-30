import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { useDispatch, useSelector } from "react-redux";

import { fetchUsers, fetchOneUser } from "./userSlice";

export const UserView = () => {
  const userState = useAppSelector((state) => state.userState);

  const dispatch = useAppDispatch();

  console.log("rendered");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {userState.loading && <h2>LOADING....</h2>}
      {userState.err && <h2>Error: {userState.err}</h2>}

      {userState.users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <button onClick={() => dispatch(fetchOneUser())}>Fetch First User</button>
    </div>
  );
};
