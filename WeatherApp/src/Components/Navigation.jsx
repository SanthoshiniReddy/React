import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      // <nav>
      //   <h3>Nav</h3>
      //   <ul className="nav-links">
      //     <Link to="/">
      //       <li>Home</li>
      //     </Link>
      //     <Link to="/dashboard">
      //       <li>Dashboard</li>
      //     </Link>
      //   </ul>
      // </nav>
      <div className="topnav">
        <a className="active" href="#home">
          Weather-Report
        </a>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Nav;
