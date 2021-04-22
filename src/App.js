import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Mainrouter from "./components/Mainrouter";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      {/* Navbar should be displayed on every page */}
      <Navbar />
      <Mainrouter />
    </Router>
  );
}
