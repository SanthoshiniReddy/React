import React, { Component } from "react";
import axios from "axios";
import { addLocationInfoToDasboard } from "../Actions";
import { connect } from "react-redux";

class WeatherInfo extends Component {
  state = { weatherData: null };
  componentWillReceiveProps(props) {
    let placeSearched = props.placeSearched;
    if (placeSearched) {
      axios
        .get(
          `https://api.apixu.com/v1/current.json?key=fbf877c60680495bb4455559191106&q=${placeSearched}`
        )
        .then(res => {
          let temp = res && res.data && res.data.current && res.data.current;
          if (temp) {
            temp.placeSearched = placeSearched;
          }
          this.props.addLocationInfoToDasboard(temp);
          this.setState({ weatherData: temp });
        })
        .catch(err => {
          console.log("error fetching weather data: ", err);
        });
    }
  }
  conditionalRendering = () => {
    if (this.state.weatherData) {
      return (
        <div className="card" style={{ width: "100%" }}>
          <img
            className="card-img-top"
            src={this.state.weatherData.condition.icon}
            alt="Condition Icon"
          />
          <div className="card-body">
            <h4 className="card-title">
              {this.state.weatherData.placeSearched}
            </h4>
            <p className="card-text">{`${
              this.state.weatherData.temp_c
            } °C   ${"     " + this.state.weatherData.condition.text}`}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          Search for a location to see weather info!
        </div>
      );
    }
  };
  render() {
    return (
      <div
        style={{
          marginLeft: "76.5vw",
          width: "18.5vw",
          border: "1px solid #a1a1a1",
          alignContent: "center",
          verticalAlign: "center"
        }}
      >
        {this.conditionalRendering()}
      </div>
    );
  }
}

export default connect(
  null,
  { addLocationInfoToDasboard }
)(WeatherInfo);
