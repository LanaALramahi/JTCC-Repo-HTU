import React, { useState } from "react";
import "./login.css";

import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    try {
      axios({
        method: "post",
        url: "http://localhost:3000/jtcc/register",
        data: {
          name: `${name}`,
          email: `${email}`,
          password: `${password}`,
        },
      })
        .then(function (response) {
          if ((response.status = 400)) console.log(response.status);
          alert(response.data.step);
          //   if (response.data.step === "1") {
          //     window.location = "/discussion";
          //   } else if (response.data.step === "0") {
          //     alert(response.data.message);
          //   }
        })
        .catch(function (error) {
          //   window.location = "/new";
        });
    } catch (err) {
      console.log(err.message);
    }

    event.preventDefault();
  };

  return (
    <form style={{ marginTop: "55px" }} onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Full name</label>
        <input
          minLength={6}
          required={true}
          onChange={handleNameChange}
          type="text"
          className="form-control"
          placeholder="name"
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          onChange={handleEmailChange}
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          required={true}
          minLength={6}
          onChange={handlePasswordChange}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-success btn-block">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
