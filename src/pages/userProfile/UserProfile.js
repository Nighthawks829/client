import React from "react";
import "./UserProfile.css";
import { IoMdArrowDropdown } from "react-icons/io";

function UserProfile() {
  return (
    <>
      <nav
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
      </nav>
      <div className="container mt-4">
        <div className="row g-0">
          <div className="col-md-6 custom-height">
            <div className="h-50 mt-5 container d-flex align-items-center justify-content-center">
              <img
                src={require("../../assets/profile.jpg")}
                alt="profile-picture"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="col-md-6 custom-height">
            <div className="h-50 container mt-5 d-flex align-items-center justify-content-md-start justify-content-center">
              <div>
                <h1 className="userprofile-title mb-5">User Profile</h1>
                <h3 className="mb-3">
                  Name: <span className="information-text">Nighthawks</span>
                </h3>
                <h3 className="mb-3">
                  Email:{" "}
                  <span className="information-text">
                    nighthawks0230@gmail.com
                  </span>
                </h3>
                <h3 className="mb-3">
                  Created At:{" "}
                  <span className="information-text">10 JAN 2012</span>
                </h3>
              <div className="mt-5 text-md-start text-center">
                <button className="btn btn-success shadow col-md-5 col-5 fs-4">Edit Profile</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
