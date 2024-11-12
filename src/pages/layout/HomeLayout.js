import React from "react";
import { Outlet } from "react-router";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm bg-dark border-bottom border-body p-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid px-4">
          <Link to={"/"} className="navbar-brand">
            To Do Website
          </Link>
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
                    <Link to={"/userprofile"} className="dropdown-item">
                      User Profile
                    </Link>
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
      <Outlet />
    </>
  );
}

export default HomeLayout;
