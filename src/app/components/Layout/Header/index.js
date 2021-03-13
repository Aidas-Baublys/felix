import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "../../../components";

import "./index.scss";

function Header({ isLogedin, logOut }) {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">F</Link>
      </div>
      <div>
        {isLogedin ? (
          <Button onClick={logOut} to="/">
            Log Out
          </Button>
        ) : (
          <Button to="/login">Sign In</Button>
        )}
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return { isLogedin: state.auth.isLogedin };
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch({ type: "logout" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
