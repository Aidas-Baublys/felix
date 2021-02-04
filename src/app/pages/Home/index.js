import { Component } from "react";

import { Hero, Button, ContentBox } from "../../components";

import "./index.scss";

export default class Home extends Component {
  state = {
    isLoading: false,
    error: null,
    movies: [],
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });

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

      this.setState({ movies: json });
    } catch (e) {
      this.setState({ error: e.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, error, movies } = this.state;
    const { favorites, toggleFavorite } = this.props;

    return (
      <main>
        <Hero title="MORE BINGE?">
          <Button to="/login">Get Access</Button>
        </Hero>
        <section className="movie-box">
          {isLoading && <p>Loading...</p>}
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
}
