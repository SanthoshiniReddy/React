import React, { Component } from "react";
import ReductIntro from "./ReducIntro";
import {createStore } from 'redux';

const store =  createStore(reducer);

class App extends Component {
  render() {
    return (
      <div>
        <ReductIntro tech="Redux" />
      </div>
    );
  }
}

export default App;
