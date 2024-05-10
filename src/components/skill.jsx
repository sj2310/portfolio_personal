import check from "../assets/checkmark.png";
import "./css/skill.css"
export const Skills = () => {
  return (
    <div className="skills" id="skillId">
      <div className="Skills-title">
        <h6>Explore My</h6>
        <h1>Skills</h1>
      </div>
      <div className="skills-box">
        <div className="Programming">
          <h3>Programming<br/>Skills</h3>
          <div className="Programming-list">
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>C++</span>
            </div>
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>JavaScript</span>
            </div>
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>HTML</span>
            </div>
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>CSS</span>
            </div>
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>Java</span>
            </div>
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>Data Structure<br/>& Algorithms</span>
            </div>
          </div>
        </div>
        <div className="Libraries">
          <h3>Libraries/<br/>Databases</h3>
          <div className="Libraries-list">
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>React</span>
            </div>
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>Node.js</span>
            </div>
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>Next.js</span>
            </div>
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>Mongo dB</span>
            </div>
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>SQL</span>
            </div>
            <div className="list-item">
              <img src={check} alt="" width="25px" height="25px" />
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
