import React, { Component } from "react";
import Map from "./Map";
import SearchBar from "./SearchBar";

class Home extends Component {
  state = {
    lat: 17.385044,
    lng: 78.486671,
    placeSearched: ""
  };
  //   placeSearched: "Hyderabad, Telangana, India"
  locationChange = (latlong, placeSearched) => {
    this.setState({
      lat: latlong.lat,
      lng: latlong.lng,
      placeSearched
    });
  };
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <SearchBar locationChange={this.locationChange} />
        <Map
          lat={this.state.lat}
          lng={this.state.lng}
          placeSearched={this.state.placeSearched}
        />
      </div>
    );
  }
}

export default Home;
