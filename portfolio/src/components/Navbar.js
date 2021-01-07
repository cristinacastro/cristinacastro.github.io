import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

/*   generateLogo = () => {
  let name = "cristina"
  for (let i=0; i<name.length; i++){

  }
  } */
  return (
    <nav className="navbar mt30">
      <div>
        <div>
          <ul className="navbar-ul">
            <li>
              <p><Link to="/">
                Home
              </Link></p>
            </li>
            <li>
              <p><Link to="/projects">
                Projects
              </Link></p>
            </li>
            <li>
              <p><Link to="/about">
                About
              </Link></p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
