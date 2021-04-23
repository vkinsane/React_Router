import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Mainrouter from "./components/Mainrouter";
import MainNavbar from "./components/Navbar";

export default function App() {
  return (
    <React.Fragment>
      {/* Navbar is displayed on every page */}
      <MainNavbar />
      <Router>
        <Mainrouter />
      </Router>
    </React.Fragment>
  );
}
