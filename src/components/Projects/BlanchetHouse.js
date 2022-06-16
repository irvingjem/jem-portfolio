import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bhimage1 from "../../Assets/Projects/blanchet-house/Apron-MockUp-BH.jpg"
import Bhimage2 from "../../Assets/Projects/blanchet-house/BH-Buiness-Card.jpg"
import Bhimage3 from "../../Assets/Projects/blanchet-house/BH-logo1.png"
import Bhimage4 from "../../Assets/Projects/blanchet-house/Window-Signage-Mockup.jpg"

function blanchetHouse() {
    return (
        <Container fluid className="project-section">
            <Container>
            <h1 className="project-heading">
                    Blanchet House
                </h1>
                <p className="project-description"></p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                <div>
                    <img src={Bhimage1} className="img-fluid" alt="magazinepage1"/>
                </div>
                </Col>
                <Col md={4} className="project-card">
                <div>
                    <img src={Bhimage2} className="img-fluid" alt="magazinepage1"/>
                </div>
                </Col>
                <Col md={4} className="project-card">
                <div>
                    <img src={Bhimage3} className="img-fluid" alt="magazinepage1"/>
                </div>
                </Col>
                <Col md={4} className="project-card">
                <div>
                    <img src={Bhimage4} className="img-fluid" alt="magazinepage1"/>
                </div>
                </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default blanchetHouse;