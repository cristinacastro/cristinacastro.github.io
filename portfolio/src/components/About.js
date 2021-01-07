import React from "react";
import Footer from "./Footer"

const About = () => {
  return (
    <div>
      <div className="about ml50 mr50 mt100">
        <h1>About me.</h1>
        <p>
          Hello! I'm Cristina, a <span> junior front end developer</span> and{" "}
          <span>graphic designer</span> based in Barcelona. Creativity is one of
          my passions so I decided to study web development on Ironhack in order
          to <span> make good ideas work</span>. I'm a flexible, committed and
          sensitive person who loves learning and improving.
        </p>
        <div>
          <h5>Web development</h5>
          <p>
            I like to code things from scratch and I enjoy bringing ideas to
            life.
          </p>
          <ul className="about-list">
            <li>
              <span>| </span>HTML 5
            </li>
            <li>
              <span>| </span>CSS 3
            </li>
            <li>
              <span>| </span>Javascript
            </li>
            <li>
              <span>| </span>React JS
            </li>
            <li>
              <span>| </span>Express JS
            </li>
            <li>
              <span>| </span>MongoDB
            </li>
            <li>
              <span>| </span>Node JS
            </li>
            <li>
              <span>| </span>Git
            </li>
          </ul>
        </div>
        <div>
          <h5>Graphic Design</h5>
          <p>I value clean design patterns and attention to detail.</p>
          <ul className="about-list">
            <li>
              <span>| </span>Adobe Illustrator
            </li>
            <li>
              <span>| </span>Adobe Photoshop
            </li>
            <li>
              <span>| </span>Adobe Indesign
            </li>
          </ul>
        </div>

        <div className = "mt30">
          <p>
            You can contact me on
            <a href="https://www.linkedin.com/in/cristina-castro-cipres/" target="_blank" rel="noopener noreferrer">
              <span>linkedin</span>
            </a>
            or email at <span>cristinacastro87@gmail.com</span> and check my
            work on
            <a href="https://github.com/cristinacastro" target="_blank" rel="noopener noreferrer">
              <span>Github</span>.
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default About;
