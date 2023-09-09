import React, { Component } from "react";
import { connect } from "react-redux";
import SearchTile from "./SearchTile";

class SearchList extends Component {
  state = {};
  makeid = length => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  renderList() {
    return this.props.locs.map(locDetails => {
      return <SearchTile key={this.makeid(64)} weatherData={locDetails} />;
    });
  }
  render() {
    if (this.props.locs.length > 0) {
      return (
        <div
          className="container"
          style={{
            clear: "both",
            display: "block",
            float: "left",
            width: "90vw",
            marginLeft: "5vw"
          }}
        >
          {this.renderList()}
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center", marginTop: "200px" }}>
          <h5>No previous searched locations</h5>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { locs: state.addLoc };
};

export default connect(mapStateToProps)(SearchList);
