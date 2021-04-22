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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/users" component={Users} />
      </Switch>

      {/* ============== Switch with exact ============== */}
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </Switch> */}
      {/* ============== Router Routes us to all matched urls ============== */}
      {/* <Route path="/" component={Home} /> Will render /  */}
      {/* <Route path="/about" component={About} /> Will render / and /about */}
      {/* <Route path="/users" component={Users} /> Will render / and /users */}
      {/* ============== Router with exact ============== */}
      {/* To avoid home to render on /about and /users using exact */}
      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} /> */}
      {/* ============== Router with /:id ============== */}
      {/* Ex : https://www.flipkart.com/smart-watches/23102 */}
      {/* <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path={`/users/:userId`} component={Users} />  if time permits*/}
    </React.Fragment>
  );
}

export default Mainrouter;
