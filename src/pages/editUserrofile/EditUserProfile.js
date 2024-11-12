import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function EditUserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Edit User Form Submit");
  }

  return (
    <>
      {/* <nav
        className="navbar navbar-expand-sm bg-dark border-bottom border-body p-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="/homePage">
            To Do Website
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="ms-auto d-flex align-items-center">
              <img
                src={require("../../assets/profile.jpg")}
                alt="profile-picture"
                className="profile-picture rounded-circle"
              />
              <p className="profile-name text-light mb-0 ms-3 me-1">
                Sunlightsam
              </p>
              <div className="dropdown">
                <IoMdArrowDropdown
                  color="white"
                  className="dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu dropdown-menu-end mt-3 py-3">
                  <li>
                    <a className="dropdown-item">User Profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item text-danger">Logut</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <div className="container my-5">
        <div className="d-flex align-items-center justify-content-center">
          <img
            src={require("../../assets/profile.jpg")}
            alt="profile-picture text-center"
            className="mx-auto mb-4"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 mb-4 col-lg-6 col-12 mx-auto">
            <label htmlFor="name" className="form-label mb-2 fw-bold fs-5">
              Name
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

          <div className="mt-4 mb-4 col-lg-6 col-12 mx-auto ">
            <label htmlFor="email" className="form-label mb-2 fw-bold fs-5">
              Email Address
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

          <div className="mt-4 mb-4 col-lg-6 col-12 mx-auto">
            <label htmlFor="password" className="form-label mb-2 fw-bold fs-5">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className={`form-control fs-6 ${passwordFocus ? "shadow" : ""}`}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </div>

          <div className="mt-4 mb-4 col-lg-6 col-12 mx-auto">
            <label
              htmlFor="confirmPasword"
              className="form-label mb-2 fw-bold fs-5"
            >
              Confirm Pasword
            </label>
            <input
              type="password"
              name="cofirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className={`form-control fs-6 ${
                confirmPasswordFocus ? "shadow" : ""
              }`}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
            />
          </div>

          <div className="text-center mt-5">
            <button
              className="btn btn-primary shadow col-lg-4 col-5"
              type="submit"
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUserProfile;
