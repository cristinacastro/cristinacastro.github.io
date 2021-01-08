import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar mt30">
        <div className="logo ml60">
          <Link to="/">Cristina Castro</Link>
        </div>
        <div>
          <ul className="navbar-ul mr30">
            <li>
              <Link to="/projects">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
