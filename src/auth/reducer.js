export default function reducer(
  state = {
    isLogedin: !!localStorage.getItem("felixAuthToken"),
    token: localStorage.getItem("felixAuthToken"),
  },
  action
) {
  switch (action.type) {
    case "login-success":
      return { isLogedin: true, token: action.token };
    case "logout":
      localStorage.clear();
      return { isLogedin: false, token: null };
    default:
      return state;
  }
}
