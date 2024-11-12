import React, { useState } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerUser } from "../../stores/auth/authSlice";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password and confirm password are not same");
    } else {
      await dispatch(
        registerUser({ name: name, email: email, password: password })
      ).unwrap();
      navigate("/");
    }
  }

  function handleSignInClick() {
    navigate("/login");
  }

  return (
    <div className="background-image h-100 d-flex align-items-center justify-content-center">
      <div className="my-5 col-lg-6 col-md-9 col-11 py-5 px-4 rounded shadow-lg bg-light">
        <h2 className="register-text text-center display-5 mb-5">
          To Do Website
        </h2>
        <h1 className="signup-text text-center">Sign Up</h1>

        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mt-4 mb-4">
            <label htmlFor="name" className="form-label mb-2 fw-bold fs-5">
              Name <span className="required-logo">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={`form-control fs-6 ${nameFocus ? "shadow" : ""}`}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
            />
          </div>
          <div className="mt-4 mb-4">
            <label htmlFor="email" className="form-label mb-2 fw-bold fs-5">
              Email Addres <span className="required-logo">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className={`form-control fs-6 ${emailFocus ? "shadow" : ""}`}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
          </div>
          <div className="mt-4 mb-4">
            <label htmlFor="password" className="form-label mb-2 fw-bold fs-5">
              Password <span className="required-logo">*</span>
            </label>
            <input
              type="password"
              name="pasword"
              id="password"
              className={`form-control fs-6 ${passwordFocus ? "shadow" : ""}`}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </div>
          <div className="mt-4 mb-4">
            <label
              htmlFor="confirmPassword"
              className="form-label mb-2 fw-bold fs-5"
            >
              Confirm Password <span className="required-logo">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className={`form-control fs-6 ${
                confirmPasswordFocus ? "shadow" : ""
              }`}
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
            />
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-success shadow col-md-4 col-6 fs-4">
              Sign Up
            </button>
          </div>
        </form>
        <h5 className="text-center mt-5 signin-text">
          Already have an account?{" "}
          <span
            className="signin-link text-primary text-decoration-underline"
            onClick={handleSignInClick}
          >
            Sign in to your account
          </span>
        </h5>
      </div>
    </div>
  );
}

export default RegisterPage;
