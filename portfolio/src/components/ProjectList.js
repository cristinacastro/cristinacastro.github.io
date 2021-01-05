import React from "react";
import { Link } from "react-router-dom";

export default function ProjectList({projects}) {
  return (
      <div>
      <h1 className="ml50 mb20 mt100">Projects.</h1>
          <div>
              {projects.map((eachProject, index) => {
                  return (
                      <div className="project-card" key={eachProject.id}>
                        <div className="project-card-text ml10 mt10">
                        <h6>{eachProject.title} |  {eachProject.intro}</h6>
                        </div>
                        <div className="project-card-img">
                        <Link to={{pathname:`/projects/${eachProject.id}`, state: {projectsState: projects}}}><img src = {eachProject.picture} alt="project pic" width="700"/></Link>
                        </div>
                      </div>
                  )
              })}
          </div>
      </div>
  )
}

