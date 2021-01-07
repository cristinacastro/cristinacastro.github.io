import React from "react";

export default function ProjectDetails(props) {
  let getProject = (id) =>
    props.location.state.projectsState.find((obj) => obj.id === id);
  const { id } = props.match.params;
  const theProject = getProject(id);
  return (
    <div>
    <div className="mt80 mb40 mr50 ml50">
      <a href="/projects">
        <img src="../img/back.png" width="15" />
      </a>
      <h2>{theProject.title}</h2>
      <h6>
        {theProject.title} | {theProject.intro}
      </h6>
      <h5>About the project</h5>
      <p className="mt10">{theProject.description}</p>
     
          <div>
      {theProject.technologies!=="" && <h5>Technologies</h5>}
      <p className="mt10">{theProject.technologies}</p>
      </div>
    
    </div>
      {theProject.allpictures.map((eachPicture, index) => {
        return (
          <div className = "product-detail-img" key={eachPicture.id}>
            <img src={eachPicture} alt="project pic" width="700" />
          </div>
        );
      })}
      <a href = "">Live demo</a>
    </div>
  );
}
