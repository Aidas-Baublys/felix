import { Button } from "../../../components";

import { Link } from "react-router-dom";

import "./index.scss";

export default function Header() {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">F</Link>
      </div>
      <div>
        <Button to="/login">Sign In</Button>
      </div>
    </nav>
  );
}
