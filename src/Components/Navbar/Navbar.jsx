import React, { useState } from "react";
import "./Navbar.css";
import "../Home/Courses";
import "../Events/Event"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Orbit Classes
        {/* <img src={logo} alt="Orbit Classes Logo" className="logo-img" /> */}
      </div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#event">Events</a></li>
        <li><a href="#courses">Courses</a></li>
      </ul>

        <li className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </li>
    </nav>
  );
}

export default Navbar;
