import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import "./css/contact.css";

export const Contact = () => {
  return (
    <div className="contact" id="contactId">
      <h6>Get in Touch</h6>
      <h1>Contact Me</h1>
      <div className="contact-links">
        <div className="contact-link">
          <img src={linkedin} alt="" width="25px" height="25px" />
          <a href="https://www.linkedin.com/in/sajal-jain-661858193/">Sajal Jain</a>
        </div>
        <div className="contact-link">
          <img src={email} alt="" width="30px" height="30px" />
          <a href="mailto:sajaljn23@gmail.com">sajaljn23@gmail.com</a>
        </div>
      </div>
    </div>
  );
};
