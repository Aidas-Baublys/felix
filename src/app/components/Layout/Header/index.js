import { Button } from "../../../components";

import { Link } from "react-router-dom";

import "./index.scss";

export default function Header() {
  // Tik po refresh'o mygtukas pasikeičia į Log Out,
  // nepersipiešia komponentas prisijungus.
  const isLogedIn = !!localStorage.getItem("felixAuthToken");

  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">F</Link>
      </div>
      <div>
        {isLogedIn ? (
          <Button to="/">Log Out</Button>
        ) : (
          <Button to="/login">Sign In</Button>
        )}
      </div>
    </nav>
  );
}
