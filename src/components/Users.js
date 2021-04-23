import React from "react";
// import { useParams } from "react-router-dom";

function User() {
  return (
    <div className="component users">
      <h1>Users</h1>
    </div>
  );
  // let { age } = useParams(); //lets us use the params from the url for Users component
  // if (age >= 18) {
  //   return <h2>Eligible to Vote</h2>;
  // } else {
  //   return <h2>Not eligible to vote</h2>;
  // }
}

export default User;
