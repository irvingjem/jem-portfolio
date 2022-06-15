import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={0} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span> Me </span> 
            </h1>
            <p className="home-about-body">
              I am a developer with a background in User Centered Design
                            <br />
              <br />I am fluent in
              <i>
                <b> Javascript and the MERN Stack </b>
              </i>
              <br />
              <br />
              What I'm Interested in. Building new &nbsp;
              <i>
                <b>Web Technologies and Products </b> and
                also in areas related to
                <b>
                  Creating better tools for people.
                </b>
              </i>
              <br />
              <br />
              I also apply my passion for developing
              with <b>Node.js</b> and
              <i>
                <b>
                  
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b> React.js</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span>connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/irvingjem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jem-irving/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
