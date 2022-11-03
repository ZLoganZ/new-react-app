import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyCoponent extends React.Component {
  render() {
    const info = ["1", "2", "3"];
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo name={"Logan"} age={20} info={info} />
      </div>
    );
  }
}

export default MyCoponent;
