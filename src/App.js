import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Upload from "./uplode";

class App extends Component {
  state = {
    Products: [],
    categories: [],
  };

  // async componentDidMount() {
  //   console.log("products1");
  //   const data = await axios.get("http://localhost:3900/api/products");
  //   console.log("products1", data);
  // }

  render() {
    return (
      <div className="App">
        <Upload />

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
