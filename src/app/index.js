import { Component } from "react";

import { Layout, Hero, Button, ContentBox } from "./components";

import "./index.scss";

export default class App extends Component {
  state = {
    isLoading: false,
    error: null,
    users: [],
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

      this.setState({ users: json });
    } catch (e) {
      this.setState({ error: e.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, error, users } = this.state;

    return (
      <Layout>
        <Hero title="More binge?">
          <Button>Get Access</Button>
        </Hero>
        <section className="movie-box">
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {users.map(({ id, image, title, description }) => (
            <ContentBox
              key={id}
              poster={image}
              title={title}
              description={description}
            >
              <Button>Favorite</Button>
            </ContentBox>
          ))}
        </section>
        <Button style="margin">More Binge</Button>
      </Layout>
    );
  }
}
