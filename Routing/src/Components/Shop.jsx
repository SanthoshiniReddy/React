import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Shop extends Component {
  state = { items: [] };
  componentDidMount() {
    axios
      .get("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get")
      .then(res => {
        let items = (res.data && res.data.items) || [];
        this.setState({ items });
      })
      .catch(err => {
        console.log("Error fetching data.");
      });
  }
  render() {
    return (
      <div>
        {this.state.items.map(item => (
          <h1 key={item.itemid}>
            <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
          </h1>
        ))}
      </div>
    );
  }
}

export default Shop;
