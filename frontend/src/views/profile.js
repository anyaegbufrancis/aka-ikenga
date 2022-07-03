// src/views/profile.js

import React from "react";

const Profile = () => {


  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          
          <img
            src="Picture Here"
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>Name Here</h2>
          <p className="lead text-muted">Picture Here</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          JSON File Here
        </pre>
      </div>
    </div>
  );
};

export default Profile;
