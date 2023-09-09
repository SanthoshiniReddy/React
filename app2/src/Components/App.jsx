import React, { Component } from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = {images:[]};
  onSearchSubmit = term => {
    console.log("In App: ", term);
    unsplash.get("/search/photos", {
      params: {
        query: term
      },      
    }).then(response => {        
        this.setState({images:response.data.results});
    })
    .catch(error=>{
        console.log("error",error);
    })
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar  onFormSubmit={this.onSearchSubmit} />
        <ImageList images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
