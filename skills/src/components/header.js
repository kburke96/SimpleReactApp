import React from "react";
import chart from "../../images/chart.gif"

function Header(){
    return (
        <header>
          <img src={chart} id="logo" />
          <h1> <a href="index.html">Weight Tracker</a></h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="enterweight">Enter a Weight</a></li>
              <li><a href="myweights">My Weight</a></li>
              <li><a href="teamweights">Team Weights</a></li>
            </ul>
          </nav>
        </header>
      )   
  
}

export default Header