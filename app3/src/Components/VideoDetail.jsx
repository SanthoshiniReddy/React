import React, { Component } from "react";
class VideoDetail extends Component {
  state = {};
  render() {
    let video = this.props.video;
    let title = (video && video.snippet && video.snippet.title) || "";
    let desc = (video && video.snippet && video.snippet.description) || "";
    let videoID = (video && video.id && video.id.videoId) || "";    
    if (video !== null) {
      return (
        <div>
          <div className="ui embed">
            <iframe
              title="Video Player"
              src={`https://www.youtube.com/embed/${videoID}`}
            />
          </div>
          <div className="ui segment">
            <h4 className="ui header">{title}</h4>
            <p>{desc}</p>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default VideoDetail;
