import React from "react";

import "./Input.css";
import send from "../../assets/send.svg";
const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      <img alt="send" src={send} style={{ height: "25px" }}></img>
    </button>
  </form>
);

export default Input;
