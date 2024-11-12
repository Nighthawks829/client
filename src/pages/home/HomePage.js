import React from "react";
import "./HomePage.css";
import { IoMdMore } from "react-icons/io";

import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage() {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const TruncateText = ({ text, limit }) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  const AddButton = () => {
    return (
      <Link to={"/addtask"}>
        <div className="fixed-icon">
          <i className="fa-solid fa-circle-plus add-button text-success"></i>
        </div>
      </Link>
    );
  };

  function handleClick() {
    // console.log("Card is click");
    navigate("/viewtask");
  }

  function handleMore() {
    console.log("More button is click");
  }

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="deleteTask"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="deleteTaskLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-5 shadow">
              <h2 className="text-center mb-5">
                Are you sure want to delete Task?
              </h2>
              <div className="d-flex align-items-center justify-content-evenly mt-5">
                <button
                  // className="modal-cancel-button shadow"
                  className="modal-button btn btn-danger shadow"
                  data-bs-dismiss="modal"
                >
                  Yes
                </button>
                <button
                  className="modal-button btn btn-success shadow"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <nav
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
      <div className="container mt-5">
        <h1 className="text-center fw-bold mb-5">To Do List</h1>

        <div className="card col-lg-6 col-md-9 col-11 mx-auto mb-4">
          <div className="card-body p-0">
            <div className="d-flex align-items-center justify-content-between mb-3 pt-3 px-3 pb-0">
              <h5 className="card-title m-0">To Do Title 1</h5>
              <IoMdMore
                size={25}
                className="dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul className="dropdown-menu mt-3 py-3">
                <li>
                  <a className="dropdown-item">Edit Task</a>
                </li>
                <li>
                  <button
                    className="dropdown-item text-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteTask"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>
            <hr className="m-0" />
            <div onClick={handleClick} className="card-hover pt-3 px-3 pb-3">
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

        <div className="card col-lg-6 col-md-9 col-11 mx-auto mb-4">
          <div className="card-body p-0">
            <div className="d-flex align-items-center justify-content-between mb-3 pt-3 px-3 pb-0">
              <h5 className="card-title m-0">To Do Title 1</h5>
              <IoMdMore
                size={25}
                className="dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul className="dropdown-menu mt-3 py-3">
                <li>
                  <Link className="dropdown-item" to={"/edittask"}>
                    Edit Task
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item text-danger">Delete Task</a>
                </li>
              </ul>
            </div>
            <hr className="m-0" />
            <div onClick={handleClick} className="card-hover pt-3 px-3 pb-3">
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

        <div className="card col-lg-6 col-md-9 col-11 mx-auto mb-4">
          <div className="card-body p-0">
            <div className="d-flex align-items-center justify-content-between mb-3 pt-3 px-3 pb-0">
              <h5 className="card-title m-0">To Do Title 1</h5>
              <IoMdMore
                size={25}
                className="dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul className="dropdown-menu mt-3 py-3">
                <li>
                  <a className="dropdown-item">Edit Task</a>
                </li>
                <li>
                  <a className="dropdown-item text-danger">Delete Task</a>
                </li>
              </ul>
            </div>
            <hr className="m-0" />
            <div onClick={handleClick} className="card-hover pt-3 px-3 pb-3">
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
      </div>
      <AddButton />
    </>
  );
}

export default HomePage;
