import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: false,
    };
  }

  handleMenuButtonClick = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  };

  render() {
    const { isSidebarOpen } = this.state;
    return (
      <div className="container">
        <div
          className="menu-button pt20 pr20"
          onClick={this.handleMenuButtonClick}
        >
          <img src="./img/menu.png" alt="menu icon" />
        </div>

        <nav className={`nav ${isSidebarOpen ? "show" : ""}`}>
          <div className="close" onClick={this.handleMenuButtonClick}>
            <img src="./img/close.png" alt="closing icon" />
          </div>
          <ul className="menu-items">
            <li className="menu-list">
              <a className="menu-link" href="/">
                Home
              </a>
            </li>
            <li className="menu-list">
              <a className="menu-link" href="/projects">
                Work
              </a>
            </li>
            <li className="menu-list">
              <a className="menu-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
