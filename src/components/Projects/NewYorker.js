import React from "react";
import { Container } from "react-bootstrap";
import ProjectPages from "./ProjectPages";
import newYorkerImg from "../../Assets/Projects/ny-magazine-1.jpg";


function newYork() {
    return (
        <Container fluid className="newyorker-images">
            <Container>
                <h1 className="project-heading">
                    New Yorker Re-design
                </h1>
                <ProjectPages
                title="New Yorker Redesign"
                description="Updated branding for The New Yorker magazine. Guidelines included retaining the current audience while actively trying to attract new readers. A new logo to modernize the brand, custom advertisments related to articles, and custom layout for all pages."
                imgPath={newYorkerImg}
                />
            </Container>
        </Container>
    )
}

export default newYork;