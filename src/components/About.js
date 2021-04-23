import React, { useState } from "react";
// import { Redirect } from "react-router-dom";

function About() {
  // const [logout, setLogout] = useState(false);
  return (
    <div className="component about">
      <h1>About</h1>

      {/* <button
        onClick={() => {
          console.log("redirecting to '/' ");
          setLogout(true);
        }}
      >
        Logout
      </button>
      {logout && <Redirect to="/" />} */}
    </div>
  );
}

export default About;
