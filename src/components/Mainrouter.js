import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About.js";
import Home from "./Home.js";
import Users from "./Users.js";
// import Login from "./Login.js";
function Mainrouter() {
  return (
    <React.Fragment>
      {/* ============== Switch Routes to the first matched url ============== */}
      {/* Which is the url in which the requested '/' , '/about' , '/users' is occuring first */}
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Home} />
        {/* if we use this code above everymatch will be for / */}
      </Switch>

      {/* ============== Switch with exact ============== */}
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </Switch> */}

      {/* ============== Router Routes us to all matched urls ============== */}

      {/* <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} /> */}

      {/* ============== Router with exact ============== */}

      {/* *before adding exact */}
      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} /> */}

      {/* ============== Router with /:id ============== */}
      {/* Ex : https://www.flipkart.com/smart-watches/23102 */}

      {/* <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path={`/users/:userId`} component={Users} /> */}
    </React.Fragment>
  );
}

export default Mainrouter;
