import { combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.css";
 

const addLocationReducer = (state = [], action) => {
  if (action.type === "ADD_LOCATION") {
    return [...state, action.payload];
  }
  return state;
};

export default combineReducers({ addLoc: addLocationReducer });

// {
//   placeSearched: "XYZ",
//   last_updated_epoch: 1560231910,
//   last_updated: "2019-06-11 11:15",
//   temp_c: 34.0,
//   temp_f: 93.2,
//   is_day: 1,
//   condition: {
//     text: "Partly cloudy",
//     icon: "//cdn.apixu.com/weather/64x64/day/116.png",
//     code: 1003
//   },
//   wind_mph: 8.1,
//   wind_kph: 13.0,
//   wind_degree: 250,
//   wind_dir: "WSW",
//   pressure_mb: 1008.0,
//   pressure_in: 30.2,
//   precip_mm: 0.0,
//   precip_in: 0.0,
//   humidity: 53,
//   cloud: 50,
//   feelslike_c: 39.9,
//   feelslike_f: 103.8,
//   vis_km: 6.0,
//   vis_miles: 3.0,
//   uv: 8.0,
//   gust_mph: 18.6,
//   gust_kph: 29.9
// },
