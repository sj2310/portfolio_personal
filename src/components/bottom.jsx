import "./css/bottom.css"

export const Bottom = () => {
  return (
    <div className="bottom">
      <ul className="bottom-menu">
        <li>
          <a href="#aboutId">About</a>
        </li>
        <li>
          <a href="#skillId">Skills</a>
        </li>
        <li>
          <a href="#projectId">Projects</a>
        </li>
        <li>
          <a href="#contactId">Contact</a>
        </li>
      </ul>
      <div className="bottom-copyright">
        Copyright © 2024 Sajal Jain. All Rights Reserved.
      </div>
    </div>
  );
};
