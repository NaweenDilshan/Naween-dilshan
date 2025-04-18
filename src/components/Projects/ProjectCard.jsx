import React, { useState } from "react";
import { Card, Carousel, Badge, Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <>
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.3 }
        }}
        className="project-card-wrapper"
        onClick={handleShow}
      >
        <Card className="project-card-view">
          <div className="card-img-container">
            {props.carouselImages ? (
              <Carousel interval={3000} indicators={true} controls={true} className="project-carousel">
                {props.carouselImages.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 carousel-image"
                      src={img}
                      alt={`carousel-image-${index}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <Card.Img variant="top" src={props.imgPath} alt="card-img" className="project-image" />
            )}
          </div>
          <Card.Body>
            <Card.Title className="project-title">{props.title}</Card.Title>
            {props.subtitle && (
              <Card.Subtitle className="project-subtitle mb-2">{props.subtitle}</Card.Subtitle>
            )}
            <Card.Text className="project-description">
              {props.description}
            </Card.Text>
            {props.tags && props.tags.length > 0 && (
              <div className="project-tags">
                {props.tags.map((tag, index) => (
                  <Badge key={index} pill className="project-tag">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </Card.Body>
        </Card>
      </motion.div>

      {/* Project Details Modal */}
      <Modal 
        show={showModal} 
        onHide={handleClose}
        size="lg"
        centered
        className="project-modal"
        backdropClassName="project-modal-backdrop"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">
            {props.title}
            {props.subtitle && <span className="modal-subtitle">{props.subtitle}</span>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="modal-image-container">
            {props.carouselImages ? (
              <Carousel interval={4000} indicators={true} controls={true} className="modal-carousel">
                {props.carouselImages.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 modal-carousel-image"
                      src={img}
                      alt={`project-image-${index}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <img 
                src={props.imgPath} 
                alt={props.title} 
                className="modal-single-image" 
              />
            )}
          </div>
          
          <div className="modal-details">
            <h4 className="modal-section-title">Project Description</h4>
            <p className="modal-description">
              {props.fullDescription || props.description}
            </p>
            
            {props.features && props.features.length > 0 && (
              <div className="modal-features">
                <h4 className="modal-section-title">Key Features</h4>
                <ul className="feature-list">
                  {props.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-bullet">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {props.tags && props.tags.length > 0 && (
              <div className="modal-tags-container">
                <h4 className="modal-section-title">Technologies Used</h4>
                <div className="modal-tags">
                  {props.tags.map((tag, index) => (
                    <Badge key={index} pill className="modal-tag">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          {props.demoLink && (
            <Button className="modal-btn demo-btn" href={props.demoLink} target="_blank" rel="noopener noreferrer">
              View Demo
            </Button>
          )}
          {props.codeLink && (
            <Button className="modal-btn code-btn" href={props.codeLink} target="_blank" rel="noopener noreferrer">
              View Code
            </Button>
          )}
          <Button className="modal-btn close-btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;
