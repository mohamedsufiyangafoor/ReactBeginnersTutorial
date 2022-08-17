import React, { useReducer } from "react";

function ReducerDemo() {
  const init = {
    count: 0,
  };
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFunction,init);

  const plusOne = () => {
    dispatch({ type: "INCREMENT" });
  };

  const minusOne = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Reducer Demo</h1>
      <p>Count : {state.count}</p>
      <button onClick={plusOne}>+</button>
      <button onClick={minusOne}>-</button>
    </div>
  );
}

export default ReducerDemo;
