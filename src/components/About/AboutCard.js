import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi I am <span>Jem Irving </span>
            from <span> Portland, OR</span>
            <br />As a Developer and Designer who loves  to find the meeting point of technology and design, I am earning an intensive Full Stack Coding Certificate at the University of Oregon. I am gaining experience in the foundations of web development while honing my skills in HTML5, CSS, Bootstrap, and JavaScript, jQuery, MERN, & MySQL. My design skills include Adobe creative suite, UX/UI, Typography, and Art Direction. I have a BFA in Communication Design from Pacific Northwest College of Art. I am someone who always wants to learn and enjoys problem-solving to create new solutions for making people's lives better. Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Something New
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
