import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiOpenai,
} from "react-icons/si";

function Toolstack() {
  const toolIconStyle = {
    textAlign: "center",
    margin: "5px 0",
    fontSize: "1.5em", // Reduced size of icons
  };

  const toolNameStyle = {
    fontSize: "0.6em", // Reduced font size
    marginTop: "3px",
    color: "#40E0D0", // Text color
  };

  const containerStyle = {
    justifyContent: "center",
    paddingBottom: "30px", // Reduced padding
  };

  return (
    <Row style={containerStyle}>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiVisualstudiocode />
        <p style={toolNameStyle}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiPostman />
        <p style={toolNameStyle}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiSlack />
        <p style={toolNameStyle}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiGithub />
        <p style={toolNameStyle}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiNetlify />
        <p style={toolNameStyle}>Netlify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiVercel />
        <p style={toolNameStyle}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={toolIconStyle}>
        <SiOpenai />
        <p style={toolNameStyle}>ChatGPT</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
