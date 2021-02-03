import React from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";

import "./DiscussionGroups.css";
import code from "../../assets/code.jpg";
import social from "../../assets/social.jpg";
import wfh from "../../assets/wfh.jpg";

const DGroups = () => {
  return (
    <Container fluid={true}>
      <Row className="p-2 pt-5 pb-5 m-0 w-100" id="discussion">
        <Col>
          <h1
            style={{
              fontWeight: "bolder",
            }}
          >
            Discussion groups
          </h1>
          <br></br>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={code} className="cardCustom" />
              <Card.Body>
                <Card.Title>Programmers group</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={social} className="cardCustom" />
              <Card.Body>
                <Card.Title>Social committee ideas</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={wfh} className="cardCustom" />
              <Card.Body>
                <Card.Title>Working from home</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default DGroups;
