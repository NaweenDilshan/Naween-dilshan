import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.webp";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.jpg";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.webp";
import pg1 from "../assets/projects/metrologo.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works / Experiences </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="CMS Financial Web Application - "
              description="During my second internship at LakMobile Solutions (PVT) LTD in Sri Lanka, I had the privilege of working on an exciting project that involved the development of a cutting-edge web application. As a Backend Java and Spring Developer, I played a pivotal role in building a sophisticated system that seamlessly integrated the power of Spring Boot on the backend with the dynamic and interactive user interface created using React on the frontend. "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="SLT-Mobitel C-Panel Project"
              description="As a Backend Java and Spring Boot Developer for the project at LakMobile Solutions (PVT) LTD, I was responsible for crafting the foundation of the web application and ensuring seamless communication between the frontend and backend. My role focused on creating robust APIs, managing the database, and implementing essential services to deliver a high-performance and feature-rich application.In addition to API and database work, I also implemented various services that were integral to the application's functionality. These services encompassed a range of tasks."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="SLT-Mobitel Enterprise Project"
              description="As a Backend Java and Spring Boot Developer for the project at LakMobile Solutions (PVT) LTD, I was responsible for crafting the foundation of the web application and ensuring seamless communication between the frontend and backend. My role focused on creating robust APIs, managing the database, and implementing essential services to deliver a high-performance and feature-rich application.In addition to API and database work, I also implemented various services that were integral to the application's functionality. These services encompassed a range of tasks."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg1}
              isBlog={false}
              title="Metro Field Management System - Metropolitan (Pvt) Ltd"
              description="Employee management system join with ERP SAP System.As a backend engineer,I've played a pivotal role in developing an Employee Management Systemintegrated with the ERP SAP System. Leveraging Spring Boot for the backend, I'vecontributed to the creation of a robust and scalable architecture. Myresponsibilities included designing microservices, implementing RESTful APIs, andensuring seamless communication between different modules.."
              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  )
}

export default Projects