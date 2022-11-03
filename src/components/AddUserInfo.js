import React from "react";

class AddUserInfo extends React.Component {
  state = {
    name: "LoganZ",
    age: 20,
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
    this.props.handleAddNewUser({
      id: {},
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <>
        <h1>
          My name is {this.state.name} and I am {this.state.age}
        </h1>
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <label>Your name </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            onChange={(event) => {
              this.handleOnChangeName(event);
            }}
          />
          <label>Your age </label>
          <input
            id="age"
            type="text"
            placeholder="Enter your age"
            onChange={(event) => {
              this.handleOnChangAge(event);
            }}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default AddUserInfo;
