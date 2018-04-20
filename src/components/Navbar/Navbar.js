import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="/"><h1>Golden Girls</h1></a>
  <h1>Score: {props.count} | Top Score: {props.topscore} </h1>
</nav>
);

export default Navbar;
