import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const Techstack = () => {
  const technologies = [
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Spring Boot", icon: "devicon-spring-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "Material UI", icon: "devicon-materialui-plain colored" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="tech-stack-container"
    >
      <Row className="tech-stack-row">
        {technologies.map((tech, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index} className="tech-item-col">
            <motion.div 
              className="tech-skill-icon"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
            >
              <i className={tech.icon}></i>
              <p className="tech-name">{tech.name}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Techstack;
