import "./index.scss";

export default function ContentBox({
  poster,
  title = "Good movie",
  description = "Pizda koks good movie",
  children,
}) {
  const url = poster
    ? poster
    : "https://images.unsplash.com/photo-1518043129420-ed9d4efcdcc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80";

  return (
    <article className="movie-card">
      <div className="movie-card--box">
        <img className="movie-card--img" src={url} alt={`${title} movie`} />
        <h2 className="movie-card--name">{title}</h2>
        <p className="movie-card--description">{description}</p>
      </div>
      <div className="movie-card--button">{children}</div>
    </article>
  );
}
