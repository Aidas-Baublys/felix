import { useRef } from "react";
import { useParams } from "react-router-dom";

import { ContentBox, Button } from "../../components";
import useFetch from "../../hooks/useFetch";

import "./index.scss";

export default function SingleContentItem({ favorites, toggleFavorite }) {
  const { id } = useParams();
  const fetchOptions = useRef({
    headers: { "Content-Type": "application/json" },
  });

  const { loading, error, payload: movies = [] } = useFetch(
    `https://academy-video-api.herokuapp.com/content/items/${id}`,
    fetchOptions.current
  );

  const { image, title, description } = movies;

  return (
    <section className="single-item-box">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ContentBox poster={image} title={title} description={description}>
        <Button
          onClick={() => {
            toggleFavorite(id);
          }}
          isSelected={favorites.includes(id) ? " selected" : ""}
        >
          {favorites.includes(id) ? "Remove" : "Favorite"}
        </Button>
      </ContentBox>
    </section>
  );
}
