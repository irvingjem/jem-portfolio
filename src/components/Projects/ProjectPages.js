import React from "react";
import { Container, Row, Col } from "react-bootstrap";



function ProjectPages(props) {
  return (
    <Container fluid className="project-title" id="project-1">
    <Container>
      <Row>
        <Col md={0} className="project-description">
          <h1 style={{ fontSize: "2.6em" }}>
          </h1>
          <p className="project-description">
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="project-images">
          <div>
            <img src="" />
          </div>
           
        </Col>
      </Row>
    </Container>
  </Container>
);
}


export default ProjectPages;
