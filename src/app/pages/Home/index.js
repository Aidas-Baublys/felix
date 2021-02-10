import { useState, useCallback, useEffect } from "react";

import { Hero, Button, ContentBox } from "../../components";

import "./index.scss";

export default function Home({ favorites, toggleFavorite }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMovies = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://academy-video-api.herokuapp.com/content/free-items"
      );

      const json = await response.json();

      if (!response.ok) {
        const error =
          { 404: "It's gone... 🐱‍👤" }[response.status] ||
          "Something went horribly wrong ☢";

        throw new Error(error);
      }

      setMovies(json);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <main>
      <Hero title="MORE BINGE?">
        <Button to="/login">Get Access</Button>
      </Hero>

      <section className="movie-box">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movies.map(({ id, image, title, description }) => (
          <ContentBox
            key={id}
            poster={image}
            title={title}
            description={description}
          >
            <Button
              onClick={() => {
                toggleFavorite(id);
              }}
              isSelected={favorites.includes(id) ? " selected" : ""}
            >
              {favorites.includes(id) ? "Remove" : "Favorite"}
            </Button>
          </ContentBox>
        ))}
      </section>

      <div className="button-box">
        <Button to="/login">More Binge</Button>
      </div>
    </main>
  );
}
