import { Button } from "../../../components";
import "./index.scss";

export default function Header() {
  return (
    <nav className="nav">
      <div className="logo">F</div>
      <div>
        <Button>Sign In</Button>
      </div>
    </nav>
  );
}
