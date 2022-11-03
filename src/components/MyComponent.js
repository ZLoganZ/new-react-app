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

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    this.setState({
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
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
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input id="name" type="text" placeholder="Enter your name" />
          <input id="age" type="text" placeholder="Enter your age" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyCoponent;
