import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { FaGraduationCap, FaBriefcase, FaCode, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Particle from '../components/Particle';
import "./Resume.css";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const timelineRef = useRef(null);
  const skillsRef = useRef(null);
  const controls = useAnimation();
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -50]);
  
  // Skills data
  const skills = [
    { name: "Spring Boot", level: 90, icon: <FaServer /> },
    { name: "Java", level: 85, icon: <FaCode /> },
    { name: "React.js", level: 80, icon: <FaCode /> },
    { name: "Node.js", level: 85, icon: <FaServer /> },
    { name: "MongoDB", level: 75, icon: <FaDatabase /> },
    { name: "SQL", level: 80, icon: <FaDatabase /> },
    { name: "TypeScript", level: 75, icon: <FaCode /> },
    { name: "React Native", level: 65, icon: <FaMobileAlt /> }
  ];
  
  // Education data
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      specialization: "Software Engineering",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2020 - 2024",
      description: "Specialized in Software Engineering with a focus on full-stack development, database design, and software architecture. Completed coursework in data structures, algorithms, software design patterns, and software testing methodologies."
    },
    {
      degree: "Advanced Level",
      institution: "Royal College",
      period: "2017 - 2019",
      description: "Studied Mathematics, Physics, and Chemistry with distinction."
    }
  ];
  
  // Experience data
  const experience = [
    {
      position: "Software Engineer",
      company: "Metropolitan (Pvt) Ltd",
      period: "2023 - Present",
      description: "Lead backend developer for the Field Management System integrated with SAP ERP. Designed and implemented RESTful APIs, microservices architecture, and database optimization strategies.",
      achievements: [
        "Reduced system response time by 40% through query optimization",
        "Implemented CI/CD pipeline resulting in 60% faster deployment cycles",
        "Developed real-time synchronization module between field operations and SAP"
      ]
    },
    {
      position: "Software Developer Intern",
      company: "LakMobile Solutions (PVT) LTD",
      period: "2022 - 2023",
      description: "Contributed to multiple projects including the SLT-Mobitel C-Panel and CMS Financial Web Application. Focused on backend development using Spring Boot and frontend implementation with React.",
      achievements: [
        "Designed and implemented secure authentication system using JWT",
        "Created responsive dashboard interface for data visualization",
        "Optimized database queries improving performance by 35%"
      ]
    },
    {
      position: "Freelance Developer",
      company: "Self-employed",
      period: "2021 - 2022",
      description: "Developed custom web applications for small businesses and startups. Managed full development lifecycle from requirements gathering to deployment and maintenance.",
      achievements: [
        "Completed over 15 projects with 100% client satisfaction",
        "Built e-commerce platform for local retail business",
        "Developed inventory management system for manufacturing client"
      ]
    }
  ];

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container fluid className="resume-page">
      <Particle />
      
      <Container className="resume-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="resume-header"
        >
          <h1 className="resume-title">My <span className="highlight">Resume</span></h1>
          
          <div className="resume-download-container">
            <Button
              className="resume-download-btn"
              href="https://github.com/it20207540/Naween-dilshan/raw/main/src/assets/cv.pdf"
              target="_blank"
            >
              <AiOutlineDownload className="download-icon" />
              <span>Download CV</span>
            </Button>
          </div>
        </motion.div>
        
        <Row className="resume-overview-row">
          <Col md={6}>
            <motion.div 
              className="resume-card personal-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <AiOutlineMail className="info-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>naweeenhettiarachchi@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <AiOutlinePhone className="info-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>+94 76 802 9802</p>
                  </div>
                </div>
                <div className="info-item">
                  <AiOutlineEnvironment className="info-icon" />
                  <div>
                    <h4>Location</h4>
                    <p>Matara, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
          
          <Col md={6}>
            <motion.div 
              className="resume-card summary"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Professional Summary</h3>
              <p>
                Graduate Software Engineer with expertise in back-end development using Spring Boot, Java, and Node.js.
                Passionate about creating scalable, efficient solutions with a focus on clean code and best practices.
                Experience in developing enterprise applications and integrating with complex systems.
              </p>
            </motion.div>
          </Col>
        </Row>
        
        <div className="timeline-tabs">
          <button 
            className={`timeline-tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => handleTabChange('experience')}
          >
            <FaBriefcase /> Experience
          </button>
          <button 
            className={`timeline-tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => handleTabChange('education')}
          >
            <FaGraduationCap /> Education
          </button>
        </div>
        
        <motion.div 
          ref={timelineRef}
          style={{ opacity, y }}
          className="timeline-container"
        >
          <div className="timeline">
            {activeTab === 'experience' ? (
              experience.map((exp, index) => (
                <motion.div 
                  key={`exp-${index}`}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-period">{exp.period}</div>
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                    <p>{exp.description}</p>
                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              education.map((edu, index) => (
                <motion.div 
                  key={`edu-${index}`}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-period">{edu.period}</div>
                    <h3>{edu.degree}</h3>
                    {edu.specialization && <h4 className="specialization">{edu.specialization}</h4>}
                    <h4>{edu.institution}</h4>
                    <p>{edu.description}</p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
        
        <motion.div 
          ref={skillsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="skills-section"
        >
          <h2>Professional Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div 
                key={`skill-${index}`}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <div className="skill-progress-container">
                    <motion.div 
                      className="skill-progress-bar"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  <div className="skill-level">{skill.level}%</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Container>
  );
};

export default Resume;
