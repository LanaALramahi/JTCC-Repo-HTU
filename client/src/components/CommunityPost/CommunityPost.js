import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import "./community.css";

const CommunityPost = ({ author, date, content, comments }) => {
  return (
    <Container fluid={true}>
      <Row className="p-2 pt-5 pb-5 m-0 w-100" id="threads">
        <Col>
          <div className="post-content">
            <div className="post-header">
              <img src={author.avatar} alt="Avatar" />
              <div className="post-header-info">
                <strong>{author.name}</strong>
                <small>{date}</small>
              </div>
            </div>

            <p>{content}</p>

            <ul className="comment">
              {comments.map((comment) => (
                <li key={comment.id}>
                  <img src={comment.author.avatar} alt="Avatar" />
                  <p>
                    <strong>{comment.author.name}</strong> {comment.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
CommunityPost.propTypes = {
  author: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  comments: PropTypes.array,
};
export default CommunityPost;
