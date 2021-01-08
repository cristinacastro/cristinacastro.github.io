import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul className="icons-nav">
          <li>
            <a
              href="https://www.linkedin.com/in/cristina-castro-cipres/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../img/in.png" width="15" alt="linkedin icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cristinacastro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../img/github.png" width="15" alt="github icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mb10 ml10">
        <p>Designed and developed by Cristina Castro © 2021. </p>
      </div>
    </div>
  );
};

export default Footer;
