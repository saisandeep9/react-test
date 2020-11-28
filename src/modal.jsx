import React, { Component } from "react";

class Modeal extends Component {
  state = {};
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <h1>from Modeal</h1>

        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Modeal;
