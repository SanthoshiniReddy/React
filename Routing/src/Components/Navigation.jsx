import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <h3>Nav</h3>
        <ul className="nav-links">
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
