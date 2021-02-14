export default function reducer(
  state = { isLogedIn: false, token: "" },
  action
) {
  // TO DO: achieve persistent state after refresh.
  // Now, even if there is a token in local storage,
  // refresh triggers state back to pre sign-in.
  switch (action.type) {
    case "login-success":
      console.log("valio");
      console.log(state);
      return { isLogedIn: true, token: action.token };
    case "logout":
      console.log("atsijunge");
      console.log(state);
      localStorage.removeItem("felixAuthToken");
      return { isLogedIn: false, token: "" };
    default:
      console.log("nevalio");
      console.log(state);
      return state;
  }
}
