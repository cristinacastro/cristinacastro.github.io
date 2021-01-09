import React from "react";
import Footer from "./Footer";

export default function ProjectDetails(props) {
  let getProject = (id) =>
    props.location.state.projectsState.find((obj) => obj.id === id);
  const { id } = props.match.params;
  const theProject = getProject(id);
  return (
    <div>
      <div className="project-details mt80 mb40 mr50 ml50">
        <a href="/projects">
          <img src="../img/back.png" width="18" alt="go back icon" />
        </a>
        <h2>{theProject.title}</h2>
        <h6>
          {theProject.title} | {theProject.intro}
        </h6>
        <h5>About the project</h5>
        <p className="mt10">{theProject.description}</p>

        <div>
          {theProject.technologies !== "" && <h5>Technologies</h5>}
          <p className="mt10">{theProject.technologies}</p>
        </div>
      </div>
      <div>
        {theProject.allpictures.map((eachPicture, index) => {
          return (
            <div className="product-detail-img" key={eachPicture.id}>
              <img src={eachPicture} alt="project pic" width="700" />
            </div>
          );
        })}
      </div>
      <div>
        {theProject.link !== "" && (
          <div className="btn-simple demo-link ml50 mt40">
            <a href={theProject.link} target="_blank" rel="noopener noreferrer">
              View live demo <img src="../img/next.png" width="9" alt="go next icon"/>
            </a>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
