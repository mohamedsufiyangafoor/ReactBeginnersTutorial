// import { useDispatch } from "react-redux";

export function deposit(amount) {
  return { type: "DEPOSIT", payload: amount };
}
export function depositAsync(amount) {
  return dispatch => {
    setTimeout(() => {
      dispatch(deposit(amount));
    }, 5000);
  };
}
