
const initialState = {
  balance: 1200343245,
};


function reducer(state = initialState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload*1 };
    case "WITHDRAWL":
      return { balance: state.balance - action.payload };
    default:
      return state;
  }
}

export default reducer;
