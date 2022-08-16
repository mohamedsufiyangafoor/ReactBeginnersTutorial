const initialState = {
  loan: false,
};

function loanReducer(state = initialState, action) {
  switch (action.type) {
    case "needed":
      return { loan: action.payload };
    case "not needed":
      return { loan: action.payload };
    default:
      return state;
  }
}


export default loanReducer