import React from "react";
import { Link } from "react-router-dom";

export default function ProjectList({projects}) {
  return (
      <div className="projects mt100">
      <h1 className="ml50 mb20">Projects.</h1>
          <div className="project-card">
              {projects.map((eachProject, index) => {
                  return (
                      <div key={eachProject.id}>
                        <img src = {eachProject.picture} alt="project pic" width="700"/>
                        <div className="mr50 ml50">
                        <h2>{eachProject.title}</h2>
                        <h6>{eachProject.intro}</h6>
                        <p><Link to={{pathname:`/projects/${eachProject.id}`, state: {projectsState: projects}}}>See project > </Link></p>
                        </div>
                      </div>
                  )
              })}
          </div>
      </div>
  )
}

