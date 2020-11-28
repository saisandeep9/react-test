import React, { Component } from "react";
import Table from "./table"
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Upload from "./uplode";
import Modal from "./modal";
import C1 from "./c1";
import C2 from "./c2";
import GoogleMaps from "./g";
import Nav from "./nav";
import Demo from "./de";

class App extends Component {
  state = {



    
//   arr1:[1,2,3,4,5],
// arr2:[6,7,8,9],

  };

  // state = {
  //   show: false,
  // };
  // showModal = (e) => {
  //   this.setState({
  //     show: !this.state.show,
  //   });
  // };

  // onClose = (e) => {
  //   this.props.show = false;
  // };

  // onClose = (e) => {
  //   console.log("clos");
  //   this.props.onClose && this.props.onClose(e);
  // };

  // async componentDidMount() {
  //   console.log("products1");
  //   const data = await axios.get("http://localhost:3900/api/products");
  //   console.log("products1", data);
  // }

  render() {

    // const arr=[this.state.arr1,this.state.arr2]
    // console.log(arr)


    return (
      <div className="App">


<Table/>

{/* <div className="row bg-dark">
  <div className="col-4 p-4  m-3 "  style={{background:"red"}}>
     this is test   this is test   this is test   this is test   this is test 
    <br/>  this is test   this is test   this is test 
  </div>
  <div className="col-5 m-3 bg-light" >
  this is test 
  </div>

</div> */}


        {/* <Nav /> */}
        {/* <Demo /> */}
        {/* <C1 />
        <GoogleMaps />
        <C2 />
        <C2 />
        <C2 />
        <C2 />
        <C2 />
        <C2 /> */}
        {/* <Upload />
        {/* <Modal show={this.state.show} /> 
        <Modal onClose={this.showModal} show={this.state.show} />
        Message in Modal
        <button
          onClick={(e) => {
            this.showModal();
          }}
        >
          {" "}
          show Modal{" "}
        </button>
        <button
          onClose={(e) => {
            this.onClose(e);
          }}
        >
          Close
        </button>{" "}
        */}
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
