import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../../assets/favicon.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../Home/Home";
import Chat from "../Chat/Chat";
import Join from "../Join/Join";
import DGroups from "../DiscussionGroups/DiscussionGroups";
import Footer from "../Footer/Footer";
import Accounts from "../Login/Accounts";

const MainNav = () => {
  return (
    <div>
      <Router>
        <Navbar
          collapseOnSelect
          expand="sm"
          className="shadow p-3 bg-white rounded"
        >
          <Navbar.Brand href="/">
            &nbsp;
            <img src={logo} alt="logo" style={{ height: "20px" }}></img> JTCC.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link
                style={{
                  textDecoration: "none",
                  padding: "5px",
                  color: "#2d6b28",
                }}
                to="/"
              >
                Home
              </Link>

              <Link
                style={{
                  textDecoration: "none",
                  padding: "5px",
                  color: "#2d6b28",
                }}
                to="/discussion"
              >
                Discussion groups{" "}
              </Link>

              <Link
                style={{
                  textDecoration: "none",
                  padding: "5px",
                  color: "#2d6b28",
                }}
                to="/join"
              >
                JTCC Community
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  padding: "5px 10px",
                  color: "#fff",
                  marginLeft: "9px",
                  borderRadius: "10px",
                  backgroundColor: "rgb(104, 185, 108)",
                }}
                to="/new"
              >
                Join today
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact component={Home} />
        <Route path="/join" component={Join} />
        <Route path="/chat" component={Chat} />
        <Route path="/discussion" component={DGroups} />
        <Route path="/new" component={Accounts} />
        <Footer />
      </Router>
    </div>
  );
};

export default MainNav;
