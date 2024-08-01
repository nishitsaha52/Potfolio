import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards({ imgPath, title, description, link, linkText, ...rest }) {
  return (
    <Card className="project-card-view" {...rest}>
      <Card.Img 
        variant="top" 
        src={imgPath} 
        alt="card-img" 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }} // Set image size
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Button variant="primary" href={link}>
          {linkText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
