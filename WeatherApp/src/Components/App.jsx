import React, { Component } from "react";
import Nav from "./Navigation";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
