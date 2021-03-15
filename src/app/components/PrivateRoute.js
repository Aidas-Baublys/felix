import { Route, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ isLogedin, ...props }) {
  const location = useLocation();

  if (isLogedin) {
    return <Route {...props} />;
  }

  return (
    <Redirect
      to={{
        pathname: "/login",
        state: { initialRoute: location },
      }}
    />
  );
}

function mapStateToProps(state) {
  return { isLogedin: state.auth.isLogedin };
}

export default connect(mapStateToProps)(PrivateRoute);
