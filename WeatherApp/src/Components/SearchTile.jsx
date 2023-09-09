import React, { Component } from "react";

class SearchTile extends Component {
  state = {};
  //
  render() {
    return (
      <div
        className="col"
        style={{
          width: "30%",
          display: "inline-block",
          margin: "16px"
        }}
      >
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.weatherData.condition.icon}
            alt="Condition Icon"
          />
          <div className="card-body">
            <h4 className="card-title">
              {this.props.weatherData.placeSearched}
            </h4>
            <p className="card-text">{`${this.props.weatherData.temp_c} °C   ${
              this.props.weatherData.condition.text
            }`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchTile;
