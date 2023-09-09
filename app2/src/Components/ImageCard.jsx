import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  state = { spans: 0 };
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    let clientHeight = this.imageRef.current.clientHeight;
    let spans = Math.ceil(clientHeight / 10 + 1);
    this.setState({ spans });
  };
  render() {
    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
