import React from "react";
import chart from "../images/chart.gif"

function Header(){
    return (
        <header>
          <img src={chart} id="logo" />
          <h1> <a href="index.html">Weight Tracker</a></h1>
          <nav>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="enterweight.html">Enter a Weight</a></li>
              <li><a href="myweights.html">My Weight</a></li>
              <li><a href="teamweights.html">Team Weights</a></li>
            </ul>
          </nav>
        </header>
      )   
  
}

export default Header