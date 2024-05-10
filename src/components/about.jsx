import dp2 from "../assets/dp2.png";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import "./css/about.css";

export const About = () => {
  return (
    <div className="about" id="aboutId">
      <div className="about-title">
        <h6>Get To Know More</h6>
        <h1>About Me</h1>
      </div>
      <div className="about-container">
        <div className="about-container-photo">
          <img src={dp2} alt="dp" />
        </div>
        <div className="about-container-data">
          <div className="about-container-data-box">
            <div className="education">
              <img src={education} alt="" width="35px" height="35px"></img>
              <h3>Education</h3>
              <p> B.E. Bachelors Degree<br/>
              (Mechanical)</p>
            </div>
            <div className="experience">
              <img src={experience} alt="" width="35px" height="35px"></img>
              <h3>Experience</h3>
              <p>4+ month<br/>Intership Experience</p>
            </div>
          </div>
          <div className="para">
          <p className="para-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};
