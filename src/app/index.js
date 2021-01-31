import { Component } from "react";

import { Layout } from "./components";
import Home from "./pages/Home";

import "./index.scss";

export default class App extends Component {
  state = {
    favorites: [],
  };

  toggleFavorite = (id) => {
    const { favorites } = this.state;
    if (favorites.includes(id)) {
      this.setState({
        favorites: favorites.filter((favorite) => favorite !== id),
      });
    } else {
      this.setState({ favorites: favorites.concat(id) });
    }
  };

  render() {
    const { favorites } = this.state;

    return (
      <Layout>
        <Home favorites={favorites} toggleFavorite={this.toggleFavorite} />
      </Layout>
    );
  }
}
