import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectPages from "./ProjectPages";
import newYorker from "../../Assets/Projects/ny-magazine-1.jpg";


function newYorker() {
    return (
        <Container fluid className="newyorker-images">
            <Container>
                <h1 className="project-heading">
                    New Yorker Resdesign
                </h1>
                <ProjectPages
                title="New Yorker Redesign"
                description="Updated branding for The New Yorker magazine. Guidelines included retaining the current audience while actively trying to attract new readers. A new logo to modernize the brand, custom advertisments related to articles, and custom layout for all pages."
                imgPath={newYorker}
                />
            </Container>
        </Container>
    )
}

export default newYorker;