import React from "react";

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
      <div>
        <div>
          <button
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowed ? "Hide" : "Show"}
          </button>
        </div>
        {this.state.isShowed && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={user.age > 20 ? "green" : "red"}>
                  <h1>
                    My name is {user.name} and I am {user.age}
                  </h1>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
