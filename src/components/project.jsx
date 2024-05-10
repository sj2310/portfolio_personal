import project from "../assets/project-3.png";
import "./css/project.css"

export const Project = () => {
  return (
    <div className="project" id="projectId">
      <div className="project-title">
        <h6>Browse My Recent</h6>
        <h1>Projects</h1>
      </div>
      <div className="project-tab">
        <div className="tab">
          <img src={project} alt="" height="200px" width="150px"></img>
          <h2>MoneyBuzz</h2>
          <div className="tab-button">
            <button> Github</button>
            <button> Live Demo</button>
          </div>
        </div>
        <div className="tab">
          <img src={project} alt="" height="200px" width="150px"></img>
          <h2>Project 2</h2>
          <div className="tab-button">
            <button> Github</button>
            <button> Live Demo</button>
          </div>
        </div>
        <div className="tab">
          <img src={project} alt="" height="200px" width="150px"></img>
          <h2>Project 3</h2>
          <div className="tab-button">
            <button> Github</button>
            <button> Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};
