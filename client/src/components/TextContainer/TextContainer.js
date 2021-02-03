import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h2 style={{ color: "lightgreen" }}>
        Welcome to JTCC - Jordanian Tech Companies Comunity{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h2>
      <p>
        You are now connected with your community room!{" "}
        <span role="img" aria-label="emoji">
          ✔️
        </span>
      </p>
    </div>
    {users ? (
      <div>
        <h4>People available:</h4>
        <div className="activeContainer">
          <h5>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h5>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
