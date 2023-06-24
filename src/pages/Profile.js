import React from "react";

function Profile() {
  const name = window.localStorage.getItem("name");
  const college = window.localStorage.getItem("college");

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <>
      <div>
        <h1>Profile Page</h1>
        <h2>Name: {name}</h2>
        <h2>College: {college}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Profile;
