import React, { useState } from "react";
import "./login.css";

import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        url: "http://localhost:3000/jtcc/login",
        data: {
          email: `${email}`,
          password: `${password}`,
        },
      })
        .then(function (response) {
          if (response.status === 400) console.log(response.status);
          //   alert(response.data.message);
          if (response.data.step === 1) window.location = "/community";
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
    <form style={{ marginTop: "55px" }}>
      <h3>Sign In</h3>

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
          minLength={6}
          required={true}
          type="password"
          onChange={handlePasswordChange}
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="btn btn-success btn-block"
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
