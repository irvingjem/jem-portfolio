import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import pokebuilder from "../../Assets/Projects/pokebuilder-v2.jpg";
import notetaker from "../../Assets/Projects/express-note-taker.jpg";
import budgetTracker from "../../Assets/Projects/Budget-tool.jpg";
import runBuddy from "../../Assets/Projects/run-buddy.jpg";
import employeetrack from "../../Assets/Projects/employee-tracker.jpg"
import poekbuildsv1 from "../../Assets/Projects/Project-Screenshot.png";
import rascalErratic from "../../Assets/Projects/rascal-erratic.jpg"

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
              imgPath={rascalErratic}
              isBlog={false}
              title="Rascal Erratic"
              description="A dashboard where you can watch and save transactions for new mints and sales of NFT's from Magic Eden's API. This project was built using the MERN stack!"
              link="https://github.com/irvingjem/rascal-erratic"
              link2="https://rascal-erratic.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokebuilder}
              isBlog={false}
              title="Poke Builder V2"
              description="This project set out to build a fun interactive experience where you can look up any Pokemon and save them to your user profile. Creating opportunities to set up teams for a next play through or just to have a team of your favorites.  This project was built using JavaScript, Node.js, MySQL, Express.js, Handlebars, Tailwind CSS, and bcrypt."
              link ="https://github.com/irvingjem/poke-builder-V2"
              link2="https://pokebuilder-v2.herokuapp.com/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={runBuddy}
              isBlog={false}
              title="Run Buddy"
              description="A website that offers fitness training services. Front-end application made with HTML and CSS"
              link="https://github.com/irvingjem/run-buddy"
              link2=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poekbuildsv1}
              isBlog={false}
              title="Poke Builder Version 1"
              description="We set out to build a site where you can look up the stats of any Pokemon by either name or number. This project was built using the PokeAPI and HTML, CSS, and JavaScript."
              link="https://github.com/irvingjem/poke-builder"
              link2="https://irvingjem.github.io/poke-builder/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetTracker}
              isBlog={false}
              title="Budget Tracker"
              description="A PWA budget tracker to track expenses. This was built using Node.js, MongoDB, JavaScript, and MongoDB."
              link="https://github.com/irvingjem/budget-tracker"
              link2="https://ji-budget-tracker.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employeetrack}
              isBlog={false}
              title="Employee Tracker"
              description="An application for an employer to track roles, managers and salaries from the command line. This project was built with Node.js, Inquirer, MySQL, and Javascript."
              link="https://github.com/irvingjem/mysql-employee-tracker"
              link2="https://github.com/irvingjem/mysql-employee-tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notetaker}
              isBlog={false}
              title="Note Taker"
              description="An express app deployed with Heroku to take notes! This project was built with Node.js, Express.js, and Javascript."
              link="https://github.com/irvingjem/note-taker"
              link2="https://ji-note-taker-app.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Projects;
