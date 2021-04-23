import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Link, Redirect } from "react-router-dom";
import About from "./About.js";
import Home from "./Home.js";
import Users from "./Users.js";
// import Login from "./Login.js";
function Mainrouter() {
  return (
    <React.Fragment>
      {/* ============== Switch Routes to the first matched url only ============== */}
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Home} />
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
      {/* To avoid home to render on /about and /users using exact */}
      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} /> */}

      {/* ============== Router with `/:age` ============== */}
      {/* Ex : https://www.flipkart.com/smart-watches/23102 */}
      {/* <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path={`/users/:age`} component={Users} /> */}
    </React.Fragment>
  );
}

export default Mainrouter;
