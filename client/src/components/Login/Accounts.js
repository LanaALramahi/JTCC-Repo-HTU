import React from "react";
import { Tab, Tabs } from "react-bootstrap";

import SignUp from "./SignUp";
import Login from "./SignIn";

const Accounts = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Login">
              <Login></Login>
            </Tab>
            <Tab eventKey="profile" title="Register">
              <SignUp></SignUp>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
