import "./index.scss";

export default function Hero({ backgroundPic, title, children }) {
  const url = backgroundPic
    ? backgroundPic
    : "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGNpbmVtYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

  return (
    <section className="hero">
      <img
        className="hero--img"
        src={url}
        alt="one women in empty movie theater"
      />
      <h1 className="hero--title">{title}</h1>
      <div className="hero--button">{children}</div>
    </section>
  );
}
