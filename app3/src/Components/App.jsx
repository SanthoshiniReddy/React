import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ApiCaller from "../Api/ApiCaller";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount(){
    this.onFormSubmitForApp("Google");
  }
  onFormSubmitForApp = SearchTerm => {
    ApiCaller.get("/search", {
      params: {
        q: SearchTerm
      }
    })
      .then(response => {
        this.setState({ videos: response.data.items,selectedVideo:response.data.items[0] });
      })
      .catch(error => {
        console.log("error fetching data: ", error);
      });
  };
  onVideoClickApp = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onFormSubmitForApp} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videoClickApp={this.onVideoClickApp}
                resvideos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
