import { Link } from "react-router-dom";

import "./index.scss";

export default function Button({ style, isSelected, onClick, to, children }) {
  const className = style ? `button--${style}` : "button";
  const selected = isSelected ? isSelected : "";
  const Component = to ? Link : "button";

  return (
    <Component onClick={onClick} className={`${className}${selected}`} to={to}>
      {children}
    </Component>
  );
}
