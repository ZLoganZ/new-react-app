import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyCoponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Logan", age: 20 },
      { id: 2, name: "HoangHai", age: 21 },
      { id: 3, name: "LoganZ", age: 22 },
    ],
  };

  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyCoponent;
