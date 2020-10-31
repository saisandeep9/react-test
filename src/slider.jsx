import React, { Component } from "react";
class Slider extends Component {
  state = {
    value: -10,
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  render() {
    let classes = "red";
    return (
      <div>
        {this.state.value >= 0 ? (
          <>
            {" "}
            <p>Default range slider:</p>
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <lable> {this.state.value}</lable>
          </>
        ) : (
          <h1>the value is negative </h1>
        )}
      </div>
    );
  }
}

export default Slider;
