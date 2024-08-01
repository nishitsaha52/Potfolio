import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function ExperienceCard({ 
  title, 
  company, 
  period, 
  location, 
  responsibilities = [], 
  imgPath, 
  link, 
  linkText,
  ...rest 
}) {
  // Default and hover styles
  const defaultStyle = {
    boxShadow: '0 4px 5px 3px rgba(119, 53, 136, 0.459)',
    color: 'white',
    backgroundColor: 'transparent',
    opacity: '0.9',
    transition: 'all 0.5s ease',
    height: '100%',
  };

  const hoverStyle = {
    transform: 'scale(1.02)',
    boxShadow: '0 4px 4px 5px #FFD700',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  };

  return (
    <Card
      className="experience-card-view"
      {...rest}
      style={defaultStyle}
      onMouseEnter={e => {
        e.currentTarget.style.transform = hoverStyle.transform;
        e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
        e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
        e.currentTarget.style.overflow = hoverStyle.overflow;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = defaultStyle.transform;
        e.currentTarget.style.boxShadow = defaultStyle.boxShadow;
        e.currentTarget.style.backgroundColor = defaultStyle.backgroundColor;
        e.currentTarget.style.overflow = defaultStyle.overflow;
      }}
    >
      {imgPath && (
        <Card.Img 
          variant="top" 
          src={imgPath} 
          alt={`${company} logo`} 
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
        />
      )}
      <Card.Body>
        <Card.Title style={{ color: '#FFD700' }}>{title}</Card.Title>
        <Card.Subtitle className="mb-2" style={{ color: '#40E0D0' }}>{company}</Card.Subtitle>
        <Card.Subtitle className="mb-2" style={{ color: '#FF69B4' }}>{period}</Card.Subtitle>
        <Card.Subtitle className="mb-2" style={{ color: '#32CD32' }}>{location}</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          <strong>Responsibilities:</strong>
        </Card.Text>
        <ListGroup variant="flush">
          {responsibilities.map((resp, index) => (
            <ListGroup.Item key={index} style={{ color: '#32CD32' }}>
              {resp}
            </ListGroup.Item>
          ))}
        </ListGroup>
        {link && (
          <Button variant="primary" href={link} className="mt-3">
            {linkText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
