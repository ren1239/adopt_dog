import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";

function Navbar() {
  return (
    <nav className="nav-list text-xs bg-white fixed w-full z-50 ">
      <ul>
        <li>
          {" "}
          <a href="/">
            <img className="h-10" src={logo} alt="logo" />
          </a>
        </li>
        <li>
          {" "}
          <a href="/dogs">Dogs</a>
        </li>
        <li>
          {" "}
          <a href="/cats">Cats</a>
        </li>
        <li>
          {" "}
          <a href="/about">About</a>
        </li>
        <li>
          {" "}
          <a href="/contact">Contact</a>
        </li>
        <li>
          {" "}
          <a
            href="/donate"
            className="inline-block bg-primary text-lightest px-4 py-2 rounded-lg"
          >
            Donate
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
