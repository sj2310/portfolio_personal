import React from "react";
import dp1 from "../assets/dp1.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import leetcode from "../assets/leetcode.jpg"
import "./css/first.css";
import pdf from "../assets/sajal-jain-cv.pdf";

export const First = () => {
  const openPdfInNewWindow = () => {
    window.open(pdf, "_blank");
  };
  const hire = ()=>{
    window.location.href="#contactId";
  }

  return (
    <div className="first">
      <div className="first-dp">
        <img src={dp1} alt="dp" width="150" height="150" />
      </div>
      <div className="first-details">
        <h6>Hello, I'm</h6>
        <h1>Sajal Jain</h1>
        <h3 className="light">Software Developer</h3>
        <div className="first-buttons">
          <button className="download-cv" onClick={openPdfInNewWindow}>
            Download CV
          </button>
          <button className="hire-me" onClick={hire}>Hire Me</button>
        </div>
        <div className="first-social">
          <a href="https://www.linkedin.com/in/sajal-jain-661858193/"><img src={linkedin} alt="" width="35ox" height="35ox" /></a>
          <a href="https://github.com/sj2310"><img src={github} alt="" width="35ox" height="35ox" /></a>
          <a href="https://leetcode.com/u/sajaljn23/"><img src={leetcode} alt="" width="35ox" height="35ox" /></a>
         </div>
      </div>
    </div>
  );
};
