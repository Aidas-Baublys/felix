import { Route, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ isLogedin, props, component }) {
  const location = useLocation();

  if (isLogedin) {
    return <Route {...props} component={component} />;
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

export default connect(mapStateToProps, null)(PrivateRoute);
