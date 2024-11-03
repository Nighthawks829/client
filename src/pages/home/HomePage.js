import React from "react";
import "./HomePage.css";

import { IoMdArrowDropdown } from "react-icons/io";

function HomePage() {
  const TruncateText = ({ text, limit }) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  const AddButton = () => {
    return (
      <div className="fixed-icon">
        <i className="fa-solid fa-circle-plus add-button text-success"></i>
      </div>
    );
  };

  function handleClick() {
    console.log("Card is click");
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-sm bg-dark border-bottom border-body p-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid px-4">
          <a className="navbar-brand">To Do Website</a>
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
              <p className="profile-name text-light mb-0 ms-3 me-1">Sunlightsam</p>
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
      <div className="container mt-5">
        <h1 className="text-center fw-bold mb-5">To Do List</h1>

        <div className="card col-lg-6 col-md-9 col-11 mx-auto mb-4 card-hover" onClick={handleClick}>
          <div className="card-body">
            <h5 className="card-title">To Do Title 1</h5>
            <p className="card-text">
              <TruncateText
                text="To Do Message 1 - Some quick example text to build on the card title and make up the bulk of the card's content."
                limit={100}
              />
            </p>
            <div className="d-flex align-items-center mb-2">
              <i className="fa-regular fa-clock text-secondary"></i>
              <p className="date-text text-secondary mb-0 ms-2">
                Created At: 19 JAN 2012 08:00
              </p>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-clock-rotate-left text-secondary"></i>
              <p className="date-text text-secondary mb-0 ms-2">
                Edited At: 20 JAN 2012 08:00
              </p>
            </div>
          </div>
        </div>

        <div className="card col-lg-6 col-md-9 col-11 mx-auto mb-4 card-hover" onClick={handleClick}>
          <div className="card-body">
            <h5 className="card-title">To Do Title 1</h5>
            <p className="card-text">
              <TruncateText
                text="To Do Message 1 - Some quick example text to build on the card title and make up the bulk of the card's content."
                limit={100}
              />
            </p>
            <div className="d-flex align-items-center mb-2">
              <i className="fa-regular fa-clock text-secondary"></i>
              <p className="date-text text-secondary mb-0 ms-2">
                Created At: 19 JAN 2012 08:00
              </p>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-clock-rotate-left text-secondary"></i>
              <p className="date-text text-secondary mb-0 ms-2">
                Edited At: 20 JAN 2012 08:00
              </p>
            </div>
          </div>
        </div>

        <div className="card col-lg-6 col-md-9 col-11 mx-auto mb-4 card-hover" onClick={handleClick}>
          <div className="card-body">
            <h5 className="card-title">To Do Title 1</h5>
            <p className="card-text">
              <TruncateText
                text="To Do Message 1 - Some quick example text to build on the card title and make up the bulk of the card's content."
                limit={100}
              />
            </p>
            <div className="d-flex align-items-center mb-2">
              <i className="fa-regular fa-clock text-secondary"></i>
              <p className="date-text text-secondary mb-0 ms-2">
                Created At: 19 JAN 2012 08:00
              </p>
            </div>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-clock-rotate-left text-secondary"></i>
              <p className="date-text text-secondary mb-0 ms-2">
                Edited At: 20 JAN 2012 08:00
              </p>
            </div>
          </div>
        </div>
      </div>
      <AddButton />
    </>
  );
}

export default HomePage;
