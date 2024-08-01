import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CertificateCards({ imgPath, title, link, linkText, ...rest }) {
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
        <Button variant="primary" href={link}>
          {linkText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificateCards;
