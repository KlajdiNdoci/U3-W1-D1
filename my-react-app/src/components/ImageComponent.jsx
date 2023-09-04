import React from "react";

class ImageComponent extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <h2>{this.props.alt}</h2>
        <img
          src={this.props.src}
          alt={this.props.alt}
          style={{ maxWidth: "80%", padding: "5rem", border: "2px solid red" }}
        />
        <hr />
      </div>
    );
  }
}

export default ImageComponent;
