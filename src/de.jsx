import React, { Component } from "react";

import NavBarInstance from "./navb";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: null,
    };
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const { activeKey } = this.state;
    return (
      <div className="nav-wrapper">
        {/* <NavBarInstance activeKey={activeKey} onSelect={this.handleSelect} />
        <hr />
        {/* <NavBarInstance
          appearance="inverse"
          activeKey={activeKey}
          onSelect={this.handleSelect}
        /> */}
        {/* <hr />  */}
        <NavBarInstance
          appearance="subtle"
          activeKey={activeKey}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default Demo;
