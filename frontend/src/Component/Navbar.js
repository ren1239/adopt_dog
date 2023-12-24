import React from "react";
import { useEffect, useState } from "react";
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
          <a href="/register">Register</a>
        </li>
        <li>
          {" "}
          <a href="/contact">Contact</a>
        </li>
        <li>
          {" "}
          <a
            href="/donate"
            className="inline-block bg-primary text-lightest px-4 py-2 rounded-lg
            hover:bg-white hover:border-primary hover:shadow hover:text-darkest"
          >
            Donate
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
