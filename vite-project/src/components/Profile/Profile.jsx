import React from "react";

function Profile({ fullName, bio, profession, children, handleName }) {
  return (
    <div className="profile">
      <div className="profile-image">{children}</div>
      <div className="profile-info">
        <h2>{fullName}</h2>
        <p>{bio}</p>
        <p>{profession}</p>
        <button onClick={() => handleName(fullName)}>Show Name</button>
      </div>
    </div>
  );
}

export default Profile;
