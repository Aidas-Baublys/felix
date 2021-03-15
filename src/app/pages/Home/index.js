import { useRef } from "react";
import { connect } from "react-redux";

import { Hero, Button, ContentBox } from "../../components";
import useFetch from "../../hooks/useFetch";

import "./index.scss";

function Home({ isLogedin, favorites, toggleFavorite }) {
  const fetchOptions = useRef({
    headers: { "Content-Type": "application/json" },
  });

  const { loading, error, payload: movies = [] } = useFetch(
    "https://academy-video-api.herokuapp.com/content/free-items",
    fetchOptions.current
  );

  return (
    <main>
      {!isLogedin && (
        <Hero title="MORE BINGE?">
          <Button to="/login">Get Access</Button>
        </Hero>
      )}
      <section className="movie-box">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movies.map(({ id, image, title, description }) => (
          <ContentBox
            key={id}
            id={id}
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
      {!isLogedin && (
        <div className="button-box">
          <Button to="/login">More Binge</Button>
        </div>
      )}
    </main>
  );
}

function mapStateToProps(state) {
  return { isLogedin: state.auth.isLogedin };
}

export default connect(mapStateToProps, null)(Home);
