import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards({ 
  imgPath, 
  title, 
  duration,  // Added a duration prop
  features,  // Added a features prop
  description, 
  link, 
  linkText, 
  ...rest 
}) {
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
        {duration && <Card.Subtitle className="mb-2 text-muted">{duration}</Card.Subtitle>} 
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {features && (
          <Card.Text>
            <strong>Key Features:</strong>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Card.Text>
        )}
        <Button variant="primary" href={link}>
          {linkText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
