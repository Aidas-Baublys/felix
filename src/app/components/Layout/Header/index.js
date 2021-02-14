import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "../../../components";

import "./index.scss";

function Header({ isLogedIn, logOut }) {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">F</Link>
      </div>
      <div>
        {isLogedIn ? (
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
  return { isLogedIn: state.auth.isLogedIn };
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch({ type: "logout" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
