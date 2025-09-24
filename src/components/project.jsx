import project3 from "../assets/project-3.png";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import "./css/project.css";

export const Project = () => {
  return (
    <div className="project" id="projectId">
      <div className="project-title">
        <h6>Browse My Recent</h6>
        <h1>Projects</h1>
      </div>
      <div className="project-tab">
        <div className="tab">
          <img src={project1} alt="" height="200px" width="150px"></img>
          <h2>MoneyBuzz</h2>
          <div className="tab-button">
            <a href="https://github.com/sj2310/Money_buzz">
              <button>Github</button>
            </a>
            <a href="https://the-socialreact.web.app/">
              <button>Live Demo</button>
            </a>
          </div>
        </div>
        <div className="tab">
          <img src={project2} alt="" height="200px" width="150px"></img>
          <h2>Project 2</h2>
          <div className="tab-button">
          <a href="https://github.com/sj2310/chatTime">
            <button>Github</button>
            </a>
            <a href="https://chattime-5d2af.web.app/">
              <button>Live Demo</button>
            </a>
          </div>
        </div>
        <div className="tab">
          <img src={project3} alt="" height="200px" width="150px"></img>
          <h2>Project 3</h2>
          <div className="tab-button">
            <a href="https://github.com/sj2310/promptogram">
            <button>Github</button>
            </a>
            <a href="https://promptogram.vercel.app/">
              <button>Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
