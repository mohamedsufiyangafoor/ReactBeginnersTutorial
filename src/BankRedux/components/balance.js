import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Balance() {
  const balance = useSelector((state) => state.reducer.balance);
  const loanResponse = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();
  const loanHandle = () => {
    if (!loanResponse) {
      dispatch({ type: "needed", payload: true });
    } else {
      dispatch({ type: "not needed", payload: false });
    }
  };
  return (
    <div className="box">
      <h1>Balance</h1>
      <h3>
        <span>remaining amount : </span>
        {balance}
      </h3>
      
      <button onClick={loanHandle} disabled={loanResponse ? true : false}>
      {loanResponse ? "Loan Applied" : "Apply for Loan"}
      </button>
    </div>
  );
}

export default Balance;
