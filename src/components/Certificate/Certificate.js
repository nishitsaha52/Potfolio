import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificateCards";
import Particle from "../Particle";
import Cog from "../../Assets/Certificate/Cog.png";
import del from "../../Assets/Certificate/del.png";
import google from "../../Assets/Certificate/google.png";
import info from "../../Assets/Certificate/info.png";
import micro from "../../Assets/Certificate/micro.png";
import uni from "../../Assets/Certificate/uni.png";

function Certificate() {
  return (
    <Container fluid className="Certificate-section">
      <Particle />
      <Container>
        <h1 className="Certificate-heading">
          My Recent <strong className="purple">Certificate </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few certificates I've completed recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={del}
              isBlog={false}
              title="Deloitte Virtual Internship-
              Deloitte Australia-2023"
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>

          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={info}
              isBlog={false}
              title="AWS Certificate Security -
              Infosys Springboard"
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>

          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={Cog}
              isBlog={false}
              title="Artificial Intelligence-
              Cognizant"
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>

          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={info}
              isBlog={false}
              title="Introduction to Machine Learning
              -Infosys Springboard"
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>

          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={uni}
              isBlog={false}
              title="Introduction to HTML5
              -University of Michigan"
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>

          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={micro}
              isBlog={false}
              title="Microsoft Azure AI Fundamentals
              -Microsoft Inc."
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>

          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={micro}
              isBlog={false}
              title="Microsoft Azure Fundamentals
              -Microsoft Inc."
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>

          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google Data Analytics
              -Google LLC"
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>

          <Col md={4} className="Certificate-card">
            <ProjectCard
              imgPath={info}
              isBlog={false}
              title="Introduction to Machine Learning
              -Infosys Springboard"
              link="https://example.com"
              linkText="View Certificate"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
