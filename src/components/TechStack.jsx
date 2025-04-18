import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const TechStack = () => {
  const techItems = [
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Spring", icon: "devicon-spring-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
    { name: "VS Code", icon: "devicon-vscode-plain" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
    <section className="tech-stack-section" id="tech-stack">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="tech-stack-title">Tech Stack</h2>
        </motion.div>

        <motion.div
          className="tech-icon-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techItems.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-stack-item"
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 10px 25px rgba(0, 180, 216, 0.4)",
                transition: { duration: 0.3 }
              }}
            >
              <i className={`${tech.icon} tech-stack-icon colored`}></i>
              <span className="tech-stack-name">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TechStack; 