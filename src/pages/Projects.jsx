import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import BackgroundAnimation from "../components/BackgroundAnimation";
import pg from "../assets/projects/pg.webp";
import project from "../assets/projects/project.png";
import lift from "../assets/projects/lift.jpg";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.webp";
import pg1 from "../assets/projects/metrologo.png";

import k1 from "../assets/koratuwa/koratu1.png";
import k2 from "../assets/koratuwa/koratu2.png";
import k3 from "../assets/koratuwa/koratu3.png";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("industrial");
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Refs for scroll-driven animations
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const projectsRef = useRef(null);
  
  // Scroll-based animations
  const { scrollY } = useScroll();
  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: tabsProgress } = useScroll({
    target: tabsRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: projectsProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"]
  });
  
  const headerOpacity = useTransform(headerProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const headerY = useTransform(headerProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  
  const tabsOpacity = useTransform(tabsProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);
  const tabsScale = useTransform(tabsProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);
  
  const projectsOpacity = useTransform(projectsProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const projectsY = useTransform(projectsProgress, [0, 0.1, 0.9, 1], [100, 0, 0, 100]);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const industrialProjects = [
    {
      id: 1,
      imgPath: pg1,
      title: "Metro Field Management System",
      subtitle: "Metropolitan (Pvt) Ltd",
      description: "Employee management system integrated with ERP SAP System. Developed robust microservices architecture, RESTful APIs, and ensured seamless communication between modules using Spring Boot.",
      fullDescription: "The Metro Field Management System is a comprehensive solution designed for Metropolitan (Pvt) Ltd to streamline employee management and integrate with their existing ERP SAP System. As the lead backend engineer, I was responsible for creating a scalable infrastructure that allows field managers to efficiently track employee activities, manage resources, and synchronize critical data with the central SAP system in real time.",
      features: [
        "Real-time synchronization with SAP ERP system",
        "Employee performance tracking and analytics dashboard",
        "Resource allocation and scheduling optimization",
        "Mobile-friendly interface for field managers",
        "Automated reporting system with customizable templates",
        "Role-based access control for enhanced security"
      ],
      tags: ["Spring Boot", "SAP Integration", "Microservices", "REST API", "Java", "PostgreSQL", "Docker"],
      demoLink: "https://metropolitan.lk"
    },
    
    
    {
      id: 3,
      imgPath: kickstart,
      title: "SLT-Mobitel C-Panel Project",
      subtitle: "LakMobile Solutions (PVT) LTD",
      description: "Backend infrastructure for admin control panel. Created robust APIs, database architecture, and core system services.",
      fullDescription: "The SLT-Mobitel C-Panel Project is an administrative control panel designed for Sri Lanka Telecom-Mobitel to manage their customer services and internal operations. As the backend developer, I designed a robust architecture that handles millions of transactions daily with high reliability and security. The system includes custom API endpoints, a sophisticated database design, and integration with legacy telecom systems.",
      features: [
        "High-performance RESTful API endpoints",
        "Advanced data caching for improved response times",
        "Comprehensive logging and monitoring system",
        "Integration with telecom billing and CRM systems",
        "Automated testing and continuous integration",
        "Scalable architecture supporting millions of daily transactions"
      ],
      tags: ["Java", "Spring Boot", "PostgreSQL", "API Development", "Hibernate", "RabbitMQ", "Jenkins"],
      demoLink: "https://slt.lk/cpanel-demo"
    },
    {
      id: 4,
      imgPath: pg,
      title: "SLT-Mobitel Enterprise Project",
      subtitle: "LakMobile Solutions (PVT) LTD",
      description: "Enterprise-grade application with high-performance requirements. Developed backend services and database integration components.",
      fullDescription: "The SLT-Mobitel Enterprise Project is a large-scale enterprise application designed to serve corporate clients with complex telecommunications needs. My role focused on developing high-performance backend services that could handle thousands of simultaneous connections while maintaining data integrity and security. The system features real-time analytics, customizable dashboards, and integration with multiple enterprise systems.",
      features: [
        "Microservices architecture for scalability",
        "Real-time data processing and analytics",
        "Enterprise-grade security with multi-factor authentication",
        "Integration with multiple database systems",
        "Load-balanced architecture for high availability",
        "Comprehensive API documentation with Swagger"
      ],
      tags: ["Java", "Spring Boot", "Enterprise Architecture", "System Integration", "Microservices", "Oracle DB", "Docker"],
      codeLink: "https://github.com/your-username/slt-enterprise-project"
    },
  ];
  
  const individualProjects = [
    
    
    {
      id: 1,
      carouselImages: [k1, k2, k3],
      title: "Store Management System",
      subtitle: "Koratuwa Ceylon Production (Pvt) Ltd",
      description: "Full-stack web application streamlining inventory and business operations. Managed frontend and backend development for a comprehensive solution.",
      fullDescription: "The Store Management System for Koratuwa Ceylon Production (Pvt) Ltd is a custom-built full-stack application that revolutionized their business operations. Working independently, I designed and implemented both frontend and backend components to create a seamless solution for inventory tracking, sales management, and business analytics. The system successfully reduced manual workflow by 60% and increased operational efficiency by integrating previously disconnected systems.",
      features: [
        "Real-time inventory tracking and management",
        "Advanced sales analytics and reporting",
        "Customer relationship management (CRM)",
        "Automated purchase order generation",
        "Multi-user access with role-based permissions",
        "Responsive design for desktop and mobile devices"
      ],
      tags: ["Spring Boot", "React.js", "SQL", "Hostinger", "Redux", "Material-UI", "RESTful API"],
      demoLink: "https://koratuwa.com"
    },
    
  ];

  return (
    <motion.div 
      className="animate-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container fluid className="project-section">
        <BackgroundAnimation />
        <Particle />
        <Container className="responsive-container">
          <motion.div 
            ref={headerRef}
            style={{ 
              opacity: headerOpacity,
              y: headerY
            }}
          >
            <h1 className="project-heading">
              My Recent <strong className="purple">Works </strong>
            </h1>
            <p className="project-description">
              Here are a few projects I've worked on recently.
            </p>
          </motion.div>
          
          <motion.div 
            ref={tabsRef} 
            className="project-tabs"
            style={{
              opacity: tabsOpacity,
              scale: tabsScale
            }}
          >
            <button
              className={`project-tab ${activeTab === 'industrial' ? 'active' : ''}`}
              onClick={() => handleTabChange('industrial')}
            >
              Industrial Projects
            </button>
            <button
              className={`project-tab ${activeTab === 'individual' ? 'active' : ''}`}
              onClick={() => handleTabChange('individual')}
            >
              Personal Projects
            </button>
          </motion.div>
          
          <h2 className="project-category-heading">
            <strong className="purple">{activeTab}</strong> Projects
          </h2>
          
          <motion.div
            ref={projectsRef}
            style={{
              opacity: projectsOpacity,
              y: projectsY
            }}
          >
            <Row className="project-card-row">
              {activeTab === 'industrial' ? (
                industrialProjects.map((project, index) => (
                  <Col 
                    key={project.id} 
                    md={6} 
                    className="project-card-col"
                    xs={12} 
                    sm={12} 
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        damping: 12
                      }}
                    >
                      <ProjectCard
                        imgPath={project.imgPath}
                        carouselImages={project.carouselImages}
                        isBlog={false}
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        fullDescription={project.fullDescription}
                        features={project.features}
                        tags={project.tags}
                        demoLink={project.demoLink}
                        codeLink={project.codeLink}
                      />
                    </motion.div>
                  </Col>
                ))
              ) : (
                individualProjects.map((project, index) => (
                  <Col 
                    key={project.id} 
                    md={6} 
                    className="project-card-col"
                    xs={12} 
                    sm={12} 
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        damping: 12
                      }}
                    >
                      <ProjectCard
                        imgPath={project.imgPath}
                        carouselImages={project.carouselImages}
                        isBlog={false}
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        fullDescription={project.fullDescription}
                        features={project.features}
                        tags={project.tags}
                        demoLink={project.demoLink}
                        codeLink={project.codeLink}
                      />
                    </motion.div>
                  </Col>
                ))
              )}
            </Row>
          </motion.div>
        </Container>
      </Container>
    </motion.div>
  );
};

export default Projects;