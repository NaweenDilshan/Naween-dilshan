import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import cv1 from "../assets/cv1.png";
import cv2 from "../assets/cv2.png";
import Particle from '../components/Particle';

const Resume = () => {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle /><br/><br/>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://github.com/it20207540/Naween-dilshan/raw/main/src/assets/cv.pdf" // Updated URL to raw file
            target="_blank"
            style={{ maxWidth: "250px", marginBottom: "20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row><br/>

        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={cv1}
              alt="CV Page 1"
              style={{ maxWidth: "80%", height: "auto", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            />
          </Col>
          <Col style={{ textAlign: "center" }}>
            <img
              src={cv2}
              alt="CV Page 2"
              style={{ maxWidth: "80%", height: "auto", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
