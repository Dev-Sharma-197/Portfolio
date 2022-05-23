import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState("");

  // Handling Responsive Navbar functions
  const handleMenu = () => {setClick("nActive"); document.body.classList.add("sticky");}
  const handleClose = () => {setClick(""); document.body.classList.remove("sticky");}
  const handleSticky = () => {
    setClick("")
    setTimeout(() => {document.body.classList.remove("sticky");}, 1000);
  }
  return (
    <>
    <div className="scroll"/>
    <header id="header" className={`header ${click}`} >
      <p className="my_title">Mern devloper</p>
      <nav className="navbar">
        <ul className="navbar-lists">
          <li><NavLink onClick={handleSticky} to="/" className="navbar-link home-link">Home</NavLink></li>
          <li><NavLink onClick={handleSticky} to="/about" className="navbar-link about-link">About</NavLink></li>
          <li><NavLink onClick={handleSticky} to="/service" className="navbar-link service-link">Service</NavLink></li>
          <li><NavLink onClick={handleSticky} to="/portfolio" className="navbar-link portfolio-link">Portfolio</NavLink></li>
          <li><NavLink onClick={handleSticky} to="/contact" className="navbar-link contact-link">Contact</NavLink></li>
        </ul>
      </nav>
      <div className="mobile-navbar-btn">
        <ion-icon
          name="menu-outline"
          onClick={handleMenu}
          class="mobile-nav-icon"
        ></ion-icon>
        <ion-icon
          name="close-outline"
          onClick={handleClose}
          class="mobile-nav-icon"
        ></ion-icon>
      </div>
    </header>
    </>
  );
}

export default Navbar;
