import React, { useState } from "react";
import "./loginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit login form");
  }

  return (
    <div className="background-image vh-100 d-flex align-items-center justify-content-center">
      <div className="col-lg-6 col-md-9 col-11 py-5 px-4 rounded shadow-lg bg-light">
        <h1 className="welcome-text text-center display-4">
          Welcome to To Do Website
        </h1>
        <h1 className="login-text mt-5 text-center display-5">Login</h1>

        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mt-4 mb-4">
            <label htmlFor="email" className="form-label mb-2 fw-bold fs-5">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className={`form-control fs-6 ${emailFocus ? "shadow" : ""}`}
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
          </div>
          <div className="mt-4 mb-4">
            <label htmlFor="password" className="form-label mb-2 fw-bold fs-5">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={`form-control fs-6 ${passwordFocus ? "shadow" : ""}`}
              value={password}
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </div>
          <div className="text-center mt-5">
            <button
              className="btn btn-primary shadow col-md-4 col-6 fs-4"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
