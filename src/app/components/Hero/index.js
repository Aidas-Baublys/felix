import "./index.scss";

export default function Hero({ backgroundPic, title, children }) {
  const url = backgroundPic
    ? backgroundPic
    : "https://images.unsplash.com/photo-1518043129420-ed9d4efcdcc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80";

  return (
    <section className="hero">
      <img className="hero--img" src={url} />
      <h1 className="hero--title">{title}</h1>
      <div className="hero--button">{children}</div>
    </section>
  );
}
