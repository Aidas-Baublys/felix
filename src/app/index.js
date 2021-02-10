import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "./components";
import { Home, Login } from "./pages";

import "./index.scss";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites(favorites.concat(id));
    }
  };

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home favorites={favorites} toggleFavorite={toggleFavorite} />
          </Route>
          <Route exact path="/login" component={Login} />
        </Switch>
      </Layout>
    </Router>
  );
}
