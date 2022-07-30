import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderIceCream, restockIceCream } from "./icecreamSlice";

export const IcecreamView = () => {
  const iceCreams = useSelector((state) => state.iceCreamState.numOfIcecream);
  const dispatch = useDispatch();

  const [restockInput, setRestockInput] = useState(1);
  return (
    <div>
      <h2>Number of Icecreams - {iceCreams} </h2>
      <button onClick={() => dispatch(orderIceCream(1))}>Order Icecream</button>
      <input
        type="number"
        placeholder="Amount to restock"
        value={restockInput}
        onChange={(e) => setRestockInput(+e.target.value)}
      />
      <button onClick={() => dispatch(restockIceCream(restockInput))}>
        Restock Icecreams
      </button>
    </div>
  );
};
