import React, { Component } from "react";
import "./VideoItem.css";

class VideoItem extends Component {
  state = {};
  render() {
    return (
      <div
        className="video-item item"
        onClick={() => this.props.videoClicked(this.props.video)}
      >
        <img
          alt={this.props.video.snippet.title}
          className="ui image"
          src={this.props.video.snippet.thumbnails.default.url}
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
