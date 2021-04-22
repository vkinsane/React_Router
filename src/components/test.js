import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
function Navbar() {
  const [logout, setLogout] = useState(false);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
          {/* <Link to="/users/1">Users</Link> */}
        </li>
      </ul>
      {/* For redirect concept */}
      {logout === true && (
        <button
          onClick={() => {
            setLogout(false);
            console.log("User Logged In 👍");
          }}
        >
          Login
        </button>
      )}

      {logout === false && (
        <button
          onClick={() => {
            setLogout(true);
            console.log("User Logged Out 👋");
          }}
        >
          Logout
        </button>
      )}
      {logout && <Redirect to="/" />}
    </nav>
  );
}

export default Navbar;
