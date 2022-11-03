import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

class MyCoponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Logan", age: 20 },
      { id: 2, name: "HoangHai", age: 21 },
      { id: 3, name: "LoganZ", age: 22 },
    ],
  };

  handleAddNewUser = (newUser) => {
    this.setState({
      listUsers: [...this.state.listUsers, newUser],
    });
  };

  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyCoponent;
