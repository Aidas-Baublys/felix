import { Component } from "react";

import { Button } from "../../components";

import "./index.scss";

export default class Login extends Component {
  state = {
    error: null,
    username: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    fetch("https://academy-video-api.herokuapp.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((data) => {
        console.log(data);
        // localStorage.setItem("token", data.token);
        // history.replace("/movies");
      })
      .catch((e) => {
        console.log(e);
        this.setState({ error: "Wrong username or password (⊙ˍ⊙)" });
      });
  };

  render() {
    return (
      <main className="login-main">
        <form onSubmit={this.onSubmit} className="login-form">
          <div className="login-form--box">
            <label for="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => this.setState({ username: e.target.value })}
              id="username"
              name="username"
            />
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
              id="password"
              name="password"
            />
          </div>
          {this.state.error && (
            <span className="login-form--error-message">
              {this.state.error}
            </span>
          )}
          <div className="login-form--button-box">
            <Button type="submit">Sing In</Button>
          </div>
        </form>
      </main>
    );
  }
}
