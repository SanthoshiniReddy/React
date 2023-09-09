import React, { Component } from "react";
import axios from "axios";

class ItemDetail extends Component {
  state = { image: "" };
  componentDidMount() {
    console.log(this.props.match);
    axios
      .get(
        `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${
          this.props.match.params.id
        }`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ image: res.data.images.transparent });
      })
      .catch(err => {
        console.log("Error fetching item details.");
      });
  }
  render() {
    return (
      <div>
        <img src={this.state.image} />
      </div>
    );
  }
}

export default ItemDetail;
