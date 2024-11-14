import React from "react";
import "./UserProfile.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function UserProfile() {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  return (
    <>
      <div className="container my-5">
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
                  Name: <span className="information-text">{user.name}</span>
                </h3>
                <h3 className="mb-3">
                  Email: <span className="information-text">{user.email}</span>
                </h3>
                {/* <h3 className="mb-3">
                  Created At: <span className="information-text">{user.createdAt}</span>
                </h3> */}
                <div className="mt-5 text-md-start text-center">
                  <button
                    className="btn btn-success shadow col-md-6 col-5 fs-4"
                    onClick={() => navigate("/edituserprofile")}
                  >
                    Edit Profile
                  </button>
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
