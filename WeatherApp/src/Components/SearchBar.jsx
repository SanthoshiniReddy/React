import React, { Component } from "react";
import axios from "axios";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new window.google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    // this.props.onPlaceLoaded(place);
    let placeSearched = place.formatted_address;
    if (placeSearched) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${placeSearched}&key=AIzaSyDIjLbi4wfaPiaDAd7zq_aJAkOcoY_4ltg`
        )
        .then(res => {
          console.log(res.data.results[0].geometry.location);
          this.props.locationChange(
            res.data.results[0].geometry.location,
            placeSearched
          );
        })
        .catch(err => {
          console.log("error fetching lat & long.");
        });
    } else {
      alert("Please search for a valid location.");
    }
  }

  render() {
    return (
      <div
        style={{
          width: "90vw",
          margin: "auto",
          boxSizing: "border-box",
          marginBottom: "10px"
        }}
      >
        <input
          style={{ width: "100%", height: "30px" }}
          ref={this.autocompleteInput}
          id="autocomplete"
          placeholder="Search for a location"
          type="text"
        />
      </div>
    );
  }
}

export default SearchBar;
