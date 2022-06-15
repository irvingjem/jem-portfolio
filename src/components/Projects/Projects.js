import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import pokebuilder from "../../Assets/Projects/pokebuilder-v2.jpg";
import personalWork from "../../Assets/Projects/posters-1.jpg";
import budgetTracker from "../../Assets/Projects/Budget-tool.jpg";
import runBuddy from "../../Assets/Projects/run-buddy.jpg";
import newYorker from "../../Assets/Projects/ny-magazine-1.jpg";
import blanchetHouse from "../../Assets/Projects/BH-logo2.png";
import ProjectPages from "./ProjectPages";


function Projects() {
  return (
    <section>
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          What I've Been <strong>Working On </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ProjectCard
              imgPath={pokebuilder}
              isBlog={false}
              title="Poke Builder V2"
              description="This project set out to build a fun interactive experience where you can look up any Pokemon and save them to your user profile. Creating opportunities to set up teams for a next play through or just to have a team of your favorites."
              link ="https://github.com/irvingjem/poke-builder-V2"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={runBuddy}
              isBlog={false}
              title="Run Buddy"
              description="A website that offers fitness training services."
              link="https://github.com/irvingjem/run-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blanchetHouse}
              isBlog={false}
              title="Blanchet House Redesign"
              description="A rebrand of the logo and a few assets for Blanchet House in Portland, OR"
              link=""
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetTracker}
              isBlog={false}
              title="Budget Tracker"
              description="A PWA budget tracker to track expenses."
              link="https://github.com/irvingjem/budget-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newYorker}
              isBlog={false}
              title="New Yorker Redesign"
              description="Updated branding for The New Yorker magazine. Guidelines included retaining the current audience while actively trying to attract new readers. A new logo to modernize the brand, custom advertisments related to articles, and custom layout for all pages."
              link="/Newyork"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personalWork}
              isBlog={false}
              title="Personal Work"
              description="This is a personal daily project started January 2019 with the intention of creating a new work everyday for the whole year. Themes that change monthly, allowing for different requirements for the month of work. This is done as a way to keep skills sharp and allow for creative learning."
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
    <ProjectPages />
    </section>
  );
}

export default Projects;
