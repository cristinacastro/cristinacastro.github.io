import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function ProjectList({ projects }) {
  return (
    <div className="projects">
      <h1 className="pl50 pb20 pt100">Projects.</h1>
      <div className="card-container">
        {projects.map((eachProject, index) => {
          return (
            <div className="project-card pl50 pr50" key={eachProject.id}>
              <Link
                to={{
                  pathname: `/projects/${eachProject.id}`,
                  state: { projectsState: projects },
                }}
              >
                <div className="project-card-img">
                {eachProject.picture ? <img
                    src={eachProject.picture}
                    alt="project pic"
                    width="700"
                  /> : <video src = {eachProject.video} alt="project video" type="video/mp4" width="700" preload="auto" />}

                {/* {eachProject.picture &&   <img
                    src={eachProject.picture}
                    alt="project pic"
                    width="700"
                  /> || eachProject.video && <video src = {eachProject.video} alt="project video" width="700"/>}
                 */}
                </div>
                <div className="project-card-text pt10 ">
                  <h6>
                    {eachProject.title} | {eachProject.intro}
                  </h6>
                </div>
                <p className="btn-simple mb20">
                  See project{" "}
                  <img src="./img/next.png" width="6" alt="go next icon" />
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
