import React from "react";
import { Link } from "react-router-dom";

export default function ProjectList({projects}) {
  return (
      <div className="">
          <div className="">
              {projects.map((eachProject, index) => {
                  return (
                      <div key={eachProject.id}>
                      <img src = {eachProject.picture} alt="project pic" width="700"/>
                      <p>{eachProject.title}</p>
                      <p>{eachProject.intro}</p>
                      <p><Link to={{pathname:`/projects/${eachProject.id}`, state: {projectsState: projects}}}>See project</Link></p>
                      </div>
                  )
              })}
          </div>
      </div>
  )
}

