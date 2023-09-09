import React, { Component } from "react";

class Loader extends Component {
  state = {};
  render() {
    return (
      <div className="ui segment" style={{height:'100vh'}}>
        <div className="ui active inverted dimmer">
          <div className="ui large text loader"><h1>{this.props.message}</h1></div>
        </div>        
      </div>
    );
  }
}

Loader.defaultProps = {
    message:'Loading...'
}


export default Loader;
