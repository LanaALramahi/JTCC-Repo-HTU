import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h5>{room}</h5>
    </div>
  </div>
);

export default InfoBar;
