import React, { useState } from "react";
import "../styles/navbar.css";

//Images
import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png"

function Navbar({isScrolled}) {
  return (
    <nav className="navbar" style={{backgroundColor: isScrolled ? "white" : "transparent"}}>
      <div style={{ textDecoration: "none" }}>
        <img src={isScrolled ? logoDark : logo} alt="logo" height="50vh" backgroundColor="red"/>
      </div>
      <div className="nav-links">
        <div className="link" style={{color : isScrolled ? "#476783" : "white"}}>Home</div>
        <div className="link" style={{color : isScrolled ? "#476783" : "white"}}>Industries</div>
        <div className="link" style={{color : isScrolled ? "#476783" : "white"}}>AI Software</div>
        <div className="link" style={{color : isScrolled ? "#476783" : "white"}}>Blog</div>
        <div className="link" style={{color : isScrolled ? "#476783" : "white"}}>Contact Us</div>
      </div>
    </nav>
  );
}

export default Navbar;
