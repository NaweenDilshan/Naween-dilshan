import React from "react";
import { Card, Carousel } from "react-bootstrap";

const ProjectCard = (props) => {
  return (
    <Card className="project-card-view">
      {props.carouselImages ? (
        <Carousel interval={3000}> {/* Set interval to 3000 milliseconds (3 seconds) */}
          {props.carouselImages.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={img}
                alt={`carousel-image-${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
