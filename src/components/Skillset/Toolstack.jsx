import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const Toolstack = () => {
  const tools = [
    { name: "VS Code", icon: "devicon-vscode-plain colored" },
    { name: "IntelliJ IDEA", icon: "devicon-intellij-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original colored" },
    { name: "GitLab", icon: "devicon-gitlab-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "npm", icon: "devicon-npm-original-wordmark colored" }
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
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((tool, index) => (
          <Col xs={4} md={2} key={index}>
            <motion.div 
              className="tech-skill-icon"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
            >
              <i className={tool.icon}></i>
              <p>{tool.name}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Toolstack;
