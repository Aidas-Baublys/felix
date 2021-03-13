export default function reducer(
  state = { isLogedin: false, token: "" },
  action
) {
  // TO DO: achieve persistent state after refresh.
  // Now, even if there is a token in local storage,
  // refresh triggers state back to pre sign-in.
  switch (action.type) {
    case "login-success":
      return { isLogedin: true, token: action.token };
    case "logout":
      localStorage.removeItem("felixAuthToken");
      return { isLogedin: false, token: "" };
    default:
      return state;
  }
}
