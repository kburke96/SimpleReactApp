import React from "react";
import logo from '../../images/chart.gif';
//
function Header(){
  return (
    <header>
      <img src={logo} id="logo" alt=""/>
      <h1><a href="/">Skillsoft Weight Tracker</a></h1>
      <nav>
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="enterweight">enter weight</a></li>
          <li><a href="myweights">my weight</a></li>
          <li><a href="teamweights">team weights</a></li>
        </ul>
      </nav>
    </header>
  )
};
//
export default Header
