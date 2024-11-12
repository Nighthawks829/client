import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./AddTaskPage.css";
function AddTaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Add Task Form Submit");
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
        <h1 className="text-center fw-bold">Add New Task</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-5 col-lg-7 col-12 mx-auto">
            <label htmlFor="title" className="form-label mb-2 fw-bold fs-3">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              className="form-control fs-6"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="my-5 col-lg-7 col-12 mx-auto">
            <label
              htmlFor="description"
              className="form-label mb-2 fw-bold fs-3"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="description-textarea form-control mb-2 fs-6"
              rows={8}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="col-lg-6 col-12 mx-auto d-flex align-items-center justify-content-evenly">
            <button className="btn btn-primary shadow fs-4" type="submit">
              Add Task
            </button>
            <button className="btn btn-danger shadow fs-4" type="reset">
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTaskPage;
