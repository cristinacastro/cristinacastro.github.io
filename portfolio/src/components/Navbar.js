import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar ">
        <ul className="navbar-ul pt20 pr20 pl10">
          <div className="navbar-logo">
            <li>
              <a className="" href="/">
                Cristina Castro
              </a>
            </li>
          </div>
          <div className="navbar-menu">
            <li className="">
              <a className="" href="/projects">
                Work
              </a>
            </li>
            <li className="">
              <a className="" href="/about">
                About
              </a>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
