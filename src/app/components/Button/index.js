import "./index.scss";

export default function Button({ style, onClick, isSelected, children }) {
  const className = style ? `button--${style}` : "button";

  return (
    <button onClick={onClick} className={`${className} ${isSelected}`}>
      {children}
    </button>
  );
}
