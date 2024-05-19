import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pro1 from "../../Assets/Projects/pro1.png";
import pro2 from "../../Assets/Projects/pro2.png";
import pro3 from "../../Assets/Projects/pro3.jpg";
import pro4 from "../../Assets/Projects/pro4.png";
import pro5 from "../../Assets/Projects/pro5.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro1}
              isBlog={false}
              title="Smart Commute App"
              description="It is full stack app using ReactJS, NodeJS and
              MongoDB. In this project I also intergate various APIs to display route between two locations, nearby point-of-interest, weather and AQI."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro4}
              isBlog={false}
              title="Railway Reservation System"
              description="It is a web app create using Java Maven where I use MySQL as data storage. In this prroject User can serach train between two stations and book tickets."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro2}
              isBlog={false}
              title="Online Exam Portal"
              description="It is a web app create using HTML,CSS and Javascript for frontend, for backend I use PHP and for storage I use MySQL. In this project user can give exam and also check the result"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro3}
              isBlog={false}
              title="Online Notice Board"
              description="It is a web app create using HTML,CSS and Javascript for frontend, for backend I use PHP and for storage I use MySQL."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro5}
              isBlog={false}
              title="Fitness Tracker"
              description="A user-friendly Next.js based web app aiding progress tracking, goal management, and efficient navigation to enhance productivity and goal achievement."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
