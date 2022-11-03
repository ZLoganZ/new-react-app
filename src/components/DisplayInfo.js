/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./main.scss";
//import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  state = {
    isShowed: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowed: !this.state.isShowed,
    });
  };
  render() {
    const { listUsers } = this.props;
    return (
      <div className="display-infor-container">
        {/* <img src={logo} /> */}
        <div>
          <button
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowed ? "Hide list" : "Show list"}
          </button>
        </div>
        {this.state.isShowed && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={user.age > 20 ? "green" : "red"}>
                  <p>
                    My name is {user.name} and I am {user.age}
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </p>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
