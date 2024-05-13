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
              <p>
                {" "}
                B.E. Bachelors Degree
                <br />
                (Mechanical)
              </p>
            </div>
            <div className="experience">
              <img src={experience} alt="" width="35px" height="35px"></img>
              <h3>Experience</h3>
              <p>
                4+ month
                <br />
                Intership Experience
              </p>
            </div>
          </div>
          <div className="para">
            <p className="para-p">
              Sajal Jain is a proficient engineer based in Guna, MP, skilled
              in a range of programming languages and frameworks including C++,
              Python, React, and Node.js. With a solid foundation in engineering
              from Institute of Engineering & Technology, DAVV. Sajal has
              developed diverse projects such as MoneyBuzz, a financial blog
              platform with responsive design and engaging animations, and
              Promptogram, a Next.js project showcasing CRUD operations and
              seamless search functionality. Sajal's experience spans from
              internships at Quark Consulting to leading a team as System Head
              at Samanvaya Racing for BAJA SAE 2022, demonstrating strong
              leadership and technical expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
