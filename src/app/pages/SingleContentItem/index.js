import { useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { Button } from "../../components";
import useFetch from "../../hooks/useFetch";

import "./index.scss";

export default function SingleContentItem({ toggleFavorite, favorites }) {
  const [display = false, setDisplay] = useState();
  const { id } = useParams();
  const fetchOptions = useRef({
    headers: { "Content-Type": "application/json" },
  });

  const { loading, error, payload: movies = [] } = useFetch(
    `https://academy-video-api.herokuapp.com/content/items/${id}`,
    fetchOptions.current
  );

  const { image, title, description, video } = movies;
  const url = image
    ? image
    : "https://images.unsplash.com/photo-1518043129420-ed9d4efcdcc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80";

  return (
    <section className="single-item--box">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <img className="single-item--img" src={url} alt={`${title} movie`} />
      <aside className="single-item">
        <h2 className="single-item--name">{title}</h2>
        <p className="single-item--description">{description}</p>
        <div className="single-item--button-box">
          <Button
            onClick={() => {
              setDisplay(true);
            }}
          >
            Watch
          </Button>
          <Button
            onClick={() => {
              toggleFavorite(id);
            }}
            isSelected={favorites.includes(id) ? " selected" : ""}
          >
            {favorites.includes(id) ? "Remove" : "Favorite"}
          </Button>
        </div>
      </aside>
      {display && (
        <>
          <iframe
            src={video}
            title={`${title} movie trailer`}
            frameBorder="0"
            allowFullScreen
          />
          <article
            className="blur"
            onClick={() => {
              setDisplay(false);
            }}
          />
        </>
      )}
    </section>
  );
}
