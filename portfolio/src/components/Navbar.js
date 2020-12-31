import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <div>
          <p>Cristina Castro</p>
        </div>
        <ul>
          <li style={{ listStyle: "none" }}>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              Projects
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
