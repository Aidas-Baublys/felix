import { Component } from "react";

import { Button } from "../../components";

import "./index.scss";

export default class Login extends Component {
  render() {
    return (
      <main className="login-main">
        <form className="login-form">
          <div className="login-form--box">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
            <label for="password">Password</label>
            <input type="text" id="password" name="password" />
          </div>
          <div className="login-form--button-box">
            <Button>Sing In</Button>
          </div>
        </form>
      </main>
    );
  }
}
