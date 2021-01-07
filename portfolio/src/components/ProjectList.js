import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer"

export default function ProjectList({projects}) {
  return (
      <div>
      <h1 className="ml50 mb20 mt100">Projects.</h1>
          <div>
              {projects.map((eachProject, index) => {
                  return (
                      <div className="project-card ml50 mr50" key={eachProject.id}>
                        <div className="project-card-img">
                        <img src = {eachProject.picture} alt="project pic" width="700"/>
                        </div>
                        <div className="project-card-text mt10 ">
                        <h6>{eachProject.title} |  {eachProject.intro}</h6>
                        </div>
                        <p className="btn-simple mb20"><Link to={{pathname:`/projects/${eachProject.id}`, state: {projectsState: projects}}}>See project <img src = "./img/next.png" width="6"/></Link></p>
                      </div>
                  )
              })}
          </div>
      <Footer />
      </div>
  )
}

