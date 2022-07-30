import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCake, restockCake } from "./cakeSlice";

export const CakeView = () => {
  const cakes = useSelector((state) => state.cakeState.numOfCakes);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes - {cakes}</h2>
      <button onClick={() => dispatch(orderCake(1))}>Order Cake</button>
      <button onClick={() => dispatch(restockCake(1))}>Restock Cakes</button>
    </div>
  );
};
