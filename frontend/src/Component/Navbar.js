import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link component

import "./Navbar.css";
import logo from "../Assets/logo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Set the state to true if scrolled more than 50px, otherwise false
      setIsScrolled(window.scrollY > 50);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // clean up the event listener

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex flex-row justify-evenly items-center nav-list text-xs bg-white fixed w-screen z-50 ${
        isScrolled ? "h-12" : "h-20"
      }`}
    >
      <ul className="flex flex-row justify-evenly w-full items-center">
        <li>
          {" "}
          <link href="/">
            <img className="h-10" src={logo} alt="logo" />
          </link>
        </li>
        <li>
          {" "}
          <link href="/dogs">Dogs</link>
        </li>

        <li>
          {" "}
          <link href="/register">Register</link>
        </li>
        <li>
          {" "}
          <link href="/contact">Contact</link>
        </li>
        <li>
          {" "}
          <link
            href="/donate"
            className="inline-block bg-primary text-lightest px-4 py-2 rounded-lg
            hover:bg-white hover:border-primary hover:shadow hover:text-darkest"
          >
            Donate
          </link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
