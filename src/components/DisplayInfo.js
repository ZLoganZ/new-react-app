import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <h1>
                My name is {user.name} and I am {user.age}
              </h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;
