import { Link } from "react-router-dom";

import { Button } from "../../../components";

import "./index.scss";

function logOut() {
  localStorage.removeItem("felixAuthToken");
}

export default function Header({ isLogedIn }) {
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
