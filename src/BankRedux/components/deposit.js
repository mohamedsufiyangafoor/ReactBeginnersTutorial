import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { depositAsync } from "../actions/balanceAction";

function Deposit() {
  const [amount, setamount] = useState(0);
  const balance = useSelector((state) => state.reducer.balance);
  const dispatch = useDispatch();
  const submitHandle = () => {
    // dispatch({ type: "DEPOSIT", payload: amount });
    dispatch(depositAsync(amount));
    setamount(0);
  };
  return (
    <div className="box">
      <h1>Deposit</h1>
      <h2>Balance : {balance}</h2>
      <input
        placeholder="Enter the deposit amount"
        type="number"
        onChange={(e) => setamount(e.target.value)}
        value={amount}
      />
      <input type="submit" onClick={submitHandle} />
    </div>
  );
}

export default Deposit;
