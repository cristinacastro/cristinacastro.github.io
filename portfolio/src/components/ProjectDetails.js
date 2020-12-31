import React from "react";

export default function ProjectDetails(props) {
  let getProject = id => props.location.state.projectsState.find(obj => obj.id === id);
  console.log(props.location.state.projectsState, "idddd")
  const { id } = props.match.params;
  console.log(props.match.params, "dfkdsf")
  const theProject = getProject(id);
  console.log(theProject, "projecte");
  return (
    <div>
    
      <h2>{theProject.title}</h2>
      <p>{theProject.description}</p>
       {theProject.allpictures.map((eachPicture, index) => {
        return(
          <div key={eachPicture.id}>
          <img src={eachPicture} alt="project pic" width="700"/>
          </div>
        )
      })} 
    </div>
  );
}
