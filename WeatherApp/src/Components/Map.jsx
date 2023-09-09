import React, { Component } from "react";
import Axios from "axios";
import WeatherInfo from "./WeatherInfo";

let bounds = new window.google.maps.LatLngBounds();
let sub_area;
let coordinates = [];
let color = [
  "#FF0000",
  "#4286f4",
  "#ffff00",
  "#ff00b2",
  "#bb00ff",
  "#00ffff",
  "#26ff00",
  "#00ff87"
];

class Map extends Component {
  map = "";
  state = {
    options: [],
    placeSearched: ""
  };
  componentDidMount() {
    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 10
    });
  }
  componentWillReceiveProps(props) {
    let placeSearched = props.placeSearched;
    if (placeSearched) {
      this.clearMap();
      Axios.get(
        `https://nominatim.openstreetmap.org/search.php?q=${placeSearched}&polygon_geojson=1&format=json`
      )
        .then(res => {
          let data = res.data;
          let filterGeoJsonType = data.filter(function(data) {
            return (
              data.geojson.type === "MultiPolygon" ||
              data.geojson.type === "Polygon"
            );
          });
          this.renderToMaps(filterGeoJsonType);
        })
        .catch(err => {
          this.map.setCenter(
            new window.google.maps.LatLng(this.props.lat, this.props.lng)
          );
          this.map.setZoom(8);
          alert(
            "Data for drawing geo-fence for this location is not available."
          );
          this.setState({ placeSearched: this.props.placeSearched });
        });
    }
  }
  renderCoordinate(paths) {
    coordinates = [];
    let position = 0;
    paths.map(location => {
      if (position % 10 === 0) {
        coordinates.push({ lat: location[1], lng: location[0] });
        bounds.extend({ lat: location[1], lng: location[0] });
      }
      position++;
      return true;
    });
  }

  renderToMaps(selectedOptions) {
    let option = selectedOptions[0] || [];
    if (option.geojson.type === "MultiPolygon") {
      this.renderCoordinate(option.geojson.coordinates[0][0]);
    } else if (option.geojson.type === "Polygon") {
      this.renderCoordinate(option.geojson.coordinates[0]);
    } else {
      alert("option.geojson.type: MultiPolygon & Polygon");
    }
    if (coordinates.length > 1) {
      sub_area = new window.google.maps.Polygon({
        paths: coordinates,
        strokeColor: color[1],
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color[1],
        fillOpacity: 0.35,
        editable: true
      });
      sub_area.setMap(this.map);
      this.map.setOptions({ maxZoom: 15 });
      this.map.fitBounds(bounds);
      this.map.setCenter(
        new window.google.maps.LatLng(this.props.lat, this.props.lng)
      );
      this.map.setZoom(10);
      coordinates = [];
    }
  }
  clearMap = () => {
    this.map = new window.google.maps.Map(document.getElementById("map"));
  };
  render() {
    return (
      <div>
        <div
          style={{
            width: "70vw",
            height: "75vh",
            marginLeft: "5vw",
            boxSizing: "border-box",
            float: "left"
          }}
          id="map"
        />
        <WeatherInfo placeSearched={this.props.placeSearched} />
      </div>
    );
  }
}

export default Map;
