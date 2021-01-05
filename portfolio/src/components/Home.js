import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
          <div className ="presentation mt100 ml50 mr50">
            <h4>Hello!</h4>
            <h3>I'm Cristina, a junior front end developer and graphic designer based in Barcelona. <br/>Here you can find some of the works I've done so far.</h3>
            <div className = "red-btn mt30 mb30"><Link to="/projects">View my projects</Link></div>
          </div>
          <ul className = "icons-nav">
            <li>
              <a href="https://www.linkedin.com/in/cristina-castro-cipres/">
                <img src="./img/in.png" width="15" alt="linkedin icon"/>
              </a>
            </li>
            <li>
              <a href="https://github.com/cristinacastro">
              <img src="./img/github.png" width="15" alt="github icon"/>
              </a>
            </li>
          </ul>
        </div>
    
    );
  };
  
  export default Home;