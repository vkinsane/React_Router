import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Mainrouter from "./components/Mainrouter";
import MainNavbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      {/* Navbar should be displayed on every page */}
      <MainNavbar />
      <Mainrouter />
    </Router>
  );
}
