import React, { useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

function Withdraw() {
  const [amount, setamount] = useState(0);
  const balanceRef = useRef(null);
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const submitHandle = () => {
    dispatch({ type: "WITHDRAWL", payload: amount });
    setamount(0);
  };
  return (
    <div className="box">
      <h1>Withdraw</h1>
      <h2 ref={balanceRef}>Balance : {balance} </h2>
      <input
        placeholder="Enter the withdrawal amount"
        type="number"
        onChange={(e) => setamount(e.target.value)}
        value={amount}
      />
      <input type="submit" onClick={submitHandle} />
    </div>
  );
}

export default Withdraw;
