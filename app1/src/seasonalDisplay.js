import "./seasonalDisplay.css";
import React, { Component } from "react";

class SeasonalDisplay extends Component {
  state = {};
  getSeason(lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0 ? "Summer" : "Winter";
    } else {
      return lat < 0 ? "Winter" : "Summer";
    }
  }
  seasonConfig = {
    Summer: {
      text: "Oh! It's too hot!",
      iconName: "sun"
    },
    Winter: {
      text: "Hooh! It's too cold!",
      iconName: "snowflake"
    }
  };
  render() {
    let Season = this.getSeason(this.props.lat, new Date().getMonth() + 1);
    let { text, iconName } = this.seasonConfig[Season];
    return (
      <div className={`seasonal-display ${Season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
  }
}

export default SeasonalDisplay;
