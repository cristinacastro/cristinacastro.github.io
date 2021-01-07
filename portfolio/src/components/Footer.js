import React from "react";

const Footer = () => {
  return (
    <div className="footer mt100 mr50">
      <div>
        <ul className="icons-nav">
          <li>
            <a href="https://www.linkedin.com/in/cristina-castro-cipres/">
              <img src="../img/in.png" width="15" alt="linkedin icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/cristinacastro">
              <img src="../img/github.png" width="15" alt="github icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mb20 ml20">
        <p>Designed and developed by Cristina Castro © 2021. </p>
      </div>
    </div>
  );
};

export default Footer;
