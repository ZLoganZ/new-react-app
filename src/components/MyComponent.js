import React from "react";

class MyCoponent extends React.Component {
  state = {
    name: "LoganZ",
    age: 20,
  };

  handleClick = () => {
    this.setState({
      name: "HoangHai",
      age: 21,
    });
  };

  handleOnMouseOver = (event) => {
    this.setState({
      name: "HoangHai",
      age: 20,
    });
  };

  handleOnMouseOut = () => {
    this.setState({
      name: "LoganZ",
      age: 21,
    });
  };

  render() {
    return (
      <div>
        <h1>
          My name is {this.state.name} and I am {this.state.age}
        </h1>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Click Me
        </button>
        <button
          onMouseOver={(event) => {
            this.handleOnMouseOver(event);
          }}
          onMouseOut={() => {
            this.handleOnMouseOut();
          }}
        >
          Hover Me
        </button>
      </div>
    );
  }
}

export default MyCoponent;
