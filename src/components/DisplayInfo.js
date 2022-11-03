import React from "react";

class DisplayInfo extends React.Component {
  render() {
    return (
      <div>
        <div>My name {this.props.name}</div>
        <div>My age {this.props.age}</div>
        <h1>{this.props.info}</h1>
      </div>
    );
  }
}

export default DisplayInfo;
