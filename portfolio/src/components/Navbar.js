import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar ml20 mr20 mt10">
        <div className="logo">
          <Link to="/">
            <p>Cristina Castro</p>
          </Link>
        </div>
        <div>
          <ul className="navbar-ul">
            <li>
              <Link to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
