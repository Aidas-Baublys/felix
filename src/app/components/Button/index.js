import "./index.scss";

export default function Button({ style, children }) {
  const className = style ? `button--${style}` : "button";

  return <button className={className}>{children}</button>;
}
