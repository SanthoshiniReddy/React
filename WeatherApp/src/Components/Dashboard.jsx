import React, { Component } from "react";
import SearchList from "./SearchList";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>
          Previous searched locations
        </h4>
        <SearchList />
      </div>
    );
  }
}

export default Dashboard;
