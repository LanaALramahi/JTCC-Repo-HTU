import React from "react";
import "./Home.css";
import { Row, Col, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import video from "../../assets/video.mp4";

const Home = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          filter: "brightness(40%)",
          height: "100%",
          objectFit: "cover",
          zIndex: "-5",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <Container fluid={true} className="p-0 m-0 w-100">
        <Row className="homeContainer p-2 m-0 w-100">
          <Col md={12} className="m-0 w-100 text-center">
            <div>
              <h1 style={{ color: "#61b15a", fontWeight: "bolder" }}>
                Greetings from JTCC{" "}
              </h1>
              <h2 style={{ color: "#61b15a" }}>
                Jordanian Tech Companies Community{" "}
              </h2>
              <h5>
                Your professional workplace to connect and collaborate with your
                teams.{" "}
              </h5>
            </div>
          </Col>
          <Col md={12} className="w-100 text-center"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
