import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
          <div>
            <p>Hello!</p>
            <p>I'm Cristina, a Web Developer and Grapchic designer based in Sabadell, Barcelona. <br/>Here you can find some of my works I've done so far. Hope you enjoy it, and if you have any comment, doubt or want to say hi, you can contact me by email or Linkedin</p>
            <Link to="/projects">View my projects</Link>
          </div>
          <ul>
            <li style={{ listStyle: "none" }}>
              <a href="mailto:cristinacastro87@gmail.com" to="" style={{ textDecoration: "none" }}>
                Email
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="https://www.linkedin.com/in/cristina-castro-cipres/" style={{ textDecoration: "none" }}>
                LinkedIn
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="https://github.com/cristinacastro" style={{ textDecoration: "none" }}>
                Github
              </a>
            </li>
          </ul>
        </div>
    
    );
  };
  
  export default Home;