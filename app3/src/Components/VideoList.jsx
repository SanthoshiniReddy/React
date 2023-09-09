import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  state = {};
  onVideoClick = (video)=>{
    if(video.id.videoId){
      this.props.videoClickApp(video);
    }else{
      alert("You are trying to play a playlist.Currently we don't support playlists.");
    }
  }
  render() {          
    let renderedList = this.props.resvideos.map(video => {           
      return <VideoItem key={video.id.videoId} videoClicked={this.onVideoClick} video={video}/>;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}

export default VideoList;
