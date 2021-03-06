import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="presentation-container">
      <section className="presentation pl50 pr50 pt100">
        <h1>Hello!</h1>
        <h3>
          I'm Cristina, a front end developer and graphic designer based in
          Barcelona. <br />
          Here you can find some of the works I've done so far.
        </h3>
        <div className="red-btn mt30 mb30 pr10">
          <Link to="/projects">View my projects</Link>
        </div>
        <ul className="icons-nav">
          <li>
            <a
              href="https://www.linkedin.com/in/cristina-castro-cipres/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/in.png" width="23" alt="linkedin icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cristinacastro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/github.png" width="23" alt="github icon" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
