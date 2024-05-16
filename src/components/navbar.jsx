import "./css/navbar.css";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="navbar">
      <div className="logo">Sajal Jain</div>
      <div className="menu">
        <div className={`navbar-menu-icon ${open ? "change" : ""}`} onClick={toggleMenu}>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        {/* <div> */}
          <ul className={`navbar-menu ${open?"animate":""}`}>
           <li><a href="#aboutId" onClick={toggleMenu}>About</a></li>
           <li><a href="#projectId" onClick={toggleMenu}>Projects</a></li>
           <li><a href="#contactId" onClick={toggleMenu}>Contact</a></li>
           <li><a href="#skillId" onClick={toggleMenu}>Skills</a></li>
          </ul>
        {/* </div> */}
      </div>
      <div className="menu2">
      <ul className="menu2-list">
             <li><a href="#aboutId">About</a></li>
             <li><a href="#skillId">Skills</a></li>
             <li><a href="#projectId">Projects</a></li>
             <li><a href="#contactId">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};
