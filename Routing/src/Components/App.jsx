import React, { Component } from "react";
import "./App.css";
import Nav from "./Navigation";
import About from "./About";
import Shop from "./Shop";
import ItemDetail from "./ItemDetail";
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
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => <div>Home</div>;

export default App;
