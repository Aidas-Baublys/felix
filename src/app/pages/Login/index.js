import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../../components";

import "./index.scss";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "https://academy-video-api.herokuapp.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      const json = await response.json();

      if (!response.ok) {
        const error =
          { 404: "Things brake all the time..." }[response.status] ||
          "Wrong username or password (⊙ˍ⊙)";

        throw new Error(error);
      }

      localStorage.setItem("felixAuthToken", json.token);
      setLoading(false);
      history.replace("/");
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  return (
    <main className="login-main">
      <form onSubmit={onSubmit} className="login-form">
        <div className="login-form--box">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          />
        </div>
        {loading && <span className="login-form--loading">Loading...</span>}
        {error && <span className="login-form--error-message">{error}</span>}
        <div className="login-form--button-box">
          <Button type="submit">Sing In</Button>
        </div>
      </form>
    </main>
  );
}
