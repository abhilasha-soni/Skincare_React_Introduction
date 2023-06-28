import React from "react"
import logo from "../../images/logo.png"
import "./NavBar.css"

export default function NavBar (){
  return <div className="navbar">
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <nav className="nav">
      <ul className="navbarTabs">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">Favourite</a>
      </li>
      <li>
        <a href="#">Cart</a>
      </li>
    </ul>
    </nav>
  </div>
}