import React from 'react'
import { useSelector } from "react-redux";

function Balance() {
    const balance = useSelector(state => state.balance);
  return (
    <div className="box">
        <h1>Balance</h1>
        <h3><span>remaining amount : </span>{balance}</h3>
    </div>
  )
}

export default Balance;