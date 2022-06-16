import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import magazine0 from "../../Assets/Projects/magazine/magazine0.jpg"
import magazine1 from "../../Assets/Projects/magazine/ny-magazine-1.jpg"
import magazine2 from "../../Assets/Projects/magazine/magazine2.jpg"
import magazine3 from "../../Assets/Projects/magazine/magazine3.jpg"
import magazine4 from "../../Assets/Projects/magazine/magazine4.jpg"
import magazine5 from "../../Assets/Projects/magazine/magazine5.jpg"


function newYork() {
    return (
        <Container fluid="md" className="project-section">
            <Container>
            <h1 className="project-heading">
                    New Yorker Redesign
                </h1>
                <p className="project-description">Updated branding for The New Yorker magazine. Guidelines included retaining the current audience while actively trying to attract new readers. A new logo to modernize the brand, custom advertisments related to articles, and custom layout for all pages.</p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={5} className="project-card">
                <div>
                    <img src={magazine0} className="img-fluid" alt="magazinepage1"/>
                </div>
                </Col>
                <Col md={5} className="project-card">
                <div>
                    <img src={magazine1}  className="img-fluid" alt="magazinepage1"/>
                </div>
                </Col>
                <Col md={5} className="project-card">
                <div>
                    <img src={magazine2} className="img-fluid" alt="magazinepage1"/>
                </div>
                </Col>
                <Col md={5} className="project-card">
                <div>
                    <img src={magazine3} className="img-fluid" alt="magazinepage1"/>
                </div>
                </Col>
                <Col md={5} className="project-card">
                <div>
                    <img src={magazine4} className="img-fluid" alt="magazinepage1"/>
                </div>
                </Col>
                <Col md={5} className="project-card">
                <div>
                    <img src={magazine5} className="img-fluid" alt="magazinepage1"/>
                </div>
                </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default newYork;