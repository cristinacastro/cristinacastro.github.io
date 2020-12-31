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
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=cristinacastro87@gmail.com"  style={{ textDecoration: "none" }}>
              <img src="./img/email.png" width="25" alt="mail icon"/>
              </a>
            </li>
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