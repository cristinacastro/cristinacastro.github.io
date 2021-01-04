import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
          <div>
            <p>Hello!</p>
            <p>I'm Cristina, a junior front end developer and graphic designer based in Barcelona. <br/>Here you can find some of the works I've done so far.</p>
            <Link to="/projects">View my projects</Link>
          </div>
          <ul>
            <li style={{ listStyle: "none" }}>
              <a href="https://www.linkedin.com/in/cristina-castro-cipres/" style={{ textDecoration: "none" }}>
                <img src="./img/in.png" width="25" alt="linkedin icon"/>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="https://github.com/cristinacastro" style={{ textDecoration: "none" }}>
              <img src="./img/github.png" width="25" alt="github icon"/>
              </a>
            </li>
          </ul>
        </div>
    
    );
  };
  
  export default Home;