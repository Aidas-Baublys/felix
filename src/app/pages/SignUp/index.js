import { useState, useEffect, useRef } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";

import { Button } from "../../components";

import "./index.scss";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [match, setMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [plan, setPlan] = useState();

  const location = useLocation();

  // Find how to get current location to change NavLink class
  // on location change.

  return (
    <Router>
      <main className="signup-main">
        <form className="signup-form">
          <nav className="signup-form--nav">
            <NavLink
              to="/signup/user"
              className={
                location.pathname === "/signup/user"
                  ? "nav-link selected"
                  : "nav-link"
              }
            >
              Create User
            </NavLink>
            <NavLink
              to="/signup/plan"
              className={
                location.pathname === "/signup/plan"
                  ? "nav-link selected"
                  : "nav-link"
              }
            >
              Pick a Plan
            </NavLink>
            <NavLink
              to="/signup/payment"
              className={
                location.pathname === "/signup/payment"
                  ? "nav-link selected"
                  : "nav-link"
              }
            >
              Pay
            </NavLink>
          </nav>
          <Switch>
            <Route exact path="/signup/user">
              <div className="signup-form--box">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email ? email : ""}
                />
                <label htmlFor="password">
                  Password
                  <div
                    onClick={() =>
                      showPassword
                        ? setShowPassword(false)
                        : setShowPassword(true)
                    }
                    className="show-password"
                  >
                    👁
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      repeatPassword === e.target.value
                        ? setMatch(true)
                        : setMatch(false);
                    }}
                    value={password ? password : ""}
                  />
                </label>
                <label htmlFor="repeat-password">
                  Repeat Password
                  <div
                    onClick={() =>
                      showPassword
                        ? setShowPassword(false)
                        : setShowPassword(true)
                    }
                    className="show-password"
                  >
                    👁
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Repeat password"
                    id="repeat-password"
                    name="repeat-password"
                    onChange={(e) => {
                      setRepeatPassword(e.target.value);
                      password === e.target.value
                        ? setMatch(true)
                        : setMatch(false);
                    }}
                    value={repeatPassword ? repeatPassword : ""}
                  />
                </label>
                {!match && (
                  <span className="password-error-message">
                    Passwords do not match
                  </span>
                )}
              </div>
              <div className="signup-form--button-box">
                <Button to="/signup/plan">Continue</Button>
              </div>
            </Route>
            <Route exact path="/signup/plan">
              <section className="signup-form--plans">
                <article className="signup-form--plan">
                  <input
                    type="radio"
                    id="6-month-plan"
                    name="plan"
                    value="6-month-plan"
                    className="signup-form--radio"
                    onChange={(e) => setPlan(e.target.value)}
                    checked={plan === "6-month-plan" ? true : false}
                  />
                  <label htmlFor="6-month-plan">6-Month plan</label>
                  <h2>6.99 $</h2>
                  <span>per month</span>
                  <div className="signup-form--discount">13% off</div>
                  <span>Billed every 6 months</span>
                </article>
                <article className="signup-form--plan">
                  <input
                    type="radio"
                    id="1-year-plan"
                    name="plan"
                    value="1-year-plan"
                    className="signup-form--radio"
                    onChange={(e) => setPlan(e.target.value)}
                    checked={plan === "1-year-plan" ? true : false}
                  />
                  <label htmlFor="1-year-plan">1-Year plan</label>
                  <h2>5.99 $</h2>
                  <span>per month</span>
                  <div className="signup-form--discount">25% off</div>
                  <span>Billed every year</span>
                </article>
                <article className="signup-form--plan">
                  <input
                    type="radio"
                    id="1-month-plan"
                    name="plan"
                    value="1-month-plan"
                    className="signup-form--radio"
                    onChange={(e) => setPlan(e.target.value)}
                    checked={plan === "1-month-plan" ? true : false}
                  />
                  <label htmlFor="1-month-plan">1-Month plan</label>
                  <h2>7.99 $</h2>
                  <span>per month</span>
                  <div className="signup-form--discount">0% off</div>
                  <span>Billed every month</span>
                </article>
              </section>
              <div className="signup-form--button-box">
                <Button to="/signup/payment">Continue</Button>
              </div>
            </Route>
            <Route exact path="/signup/payment">
              <div className="signup-form--pay">
                <div className="signup-form--input-card">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    id="first-name"
                    name="first-name"
                  />
                </div>
                <div className="signup-form--input-card">
                  <label>Last Name</label>
                  <input />
                </div>
                <div className="signup-form--input-card">
                  <label>Card Number</label>
                  <input />
                </div>
                <div className="signup-form--input-card">
                  <label>Expiry Date MM/YY</label>
                  <input />
                </div>
                <div className="signup-form--input-card">
                  <label>CVV</label>
                  <input />
                </div>
              </div>
              <div className="signup-form--button-box submit">
                <Button type="submit">Submit</Button>
              </div>
            </Route>
          </Switch>
        </form>
      </main>
    </Router>
  );
}
