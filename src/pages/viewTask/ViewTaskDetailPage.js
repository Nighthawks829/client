import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./ViewTaskDetailPage.css";

function ViewTaskDetailPage() {
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
        <h1 className="text-center fw-bold">View Task Detail</h1>
        <div className="my-5 col-lg-7 col-12 mx-auto">
          <h5 className="mb-3 fw-bold fs-3">Title</h5>
          <h5 className="fs-3">Task Detail Title</h5>
        </div>
        <div className="my-3 col-lg-7 col-12 mx-auto">
          <h5 className="mb-3 fw-bold fs-3">Description</h5>
          <h5 className="fs-5">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </h5>
        </div>

        <div className="my-3 col-lg-7 col-12 mx-auto">
          <h5 className="mb-3 fw-bold fs-3  ">Done</h5>
          <h5 className="fs-5 text-success">Yes</h5>
        </div>

        <div className="my-3 col-lg-7 col-12 mx-auto">
          <h5 className="mb-3 fw-bold fs-3">Created At</h5>
          <h5 className="fs-5">19 JAN 2012 08:00</h5>
        </div>

        <div className="my-3 col-lg-7 col-12 mx-auto">
          <h5 className="mb-3 fw-bold fs-3">Edited At</h5>
          <h5 className="fs-5">20 JAN 2012 08:00</h5>
        </div>

      </div>
    </>
  );
}

export default ViewTaskDetailPage;
