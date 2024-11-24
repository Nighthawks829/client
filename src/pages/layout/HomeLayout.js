import React from "react";
import { Outlet, useNavigate } from "react-router";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../stores/auth/authSlice";

function HomeLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/");
  }

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="logoutModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="logout"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-5 shadow">
              <h2 className="text-center mb-5">Are you sure want to logout?</h2>
              <div className="d-flex align-items-center justify-content-evenly mt-5">
                <button
                  className="modal-button btn btn-danger shadow"
                  data-bs-dismiss="modal"
                  onClick={handleLogout}
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
                {user.name}
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
                    <a
                     // eslint-disable-next-line
                      className="dropdown-item text-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#logoutModal"
                    >
                      Logut
                    </a>
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
