import React, { Component } from "react";
import "./nac.css";

const Nav = () => {
  return (
    <div class="navbar">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <div class="dropdown">
        <button class="dropbtn">
          Dropdown
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>

    //   <h3>Dropdown Menu inside a Navigation Bar</h3>
    //   <p>Hover over the "Dropdown" link to see the dropdown menu.</p>

    //   <nav>nav</nav>
  );
};

export default Nav;