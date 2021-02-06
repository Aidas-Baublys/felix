import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "./components";
import { Home, Login } from "./pages";

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
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home
                favorites={favorites}
                toggleFavorite={this.toggleFavorite}
              />
            </Route>
            <Route exact path="/login" component={Login} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}
