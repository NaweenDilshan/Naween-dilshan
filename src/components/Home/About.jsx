import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/1235.jpg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Row className="about-content-row">
            <Col md={8} className="home-about-description">
              <motion.h1 
                className="about-heading"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                LET ME <span className="highlight-text"> INTRODUCE </span> MYSELF
              </motion.h1>
              <motion.div
                className="about-text-container"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="home-about-body">
                  Hi, my name is <span className="highlight-text">K.H Naween Dilshan </span>
                  and I'm from <span className="highlight-text"> Matara, Sri Lanka.</span>
                  <br />
                  <br />
                  Graduate Software Engineer at Sri Lanka Institute of
                  Information Technology (SLIIT) (BSc Hons Degree in
                  Information Technology specializing in Software Engineering).
                  <br />
                  <br />
                  As a
                  <b className="highlight-text"> Back-End </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="highlight-text"> Java </b>
                    as well as have knowledge in programming languages such as Java/spring ... and stacks Springboot projects
                  
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="highlight-text">JS/Node.js, MongoDB</b> and
                  <i>
                    <b className="highlight-text">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="highlight-text"> ReactJs/TypeScript</b>
                  </i>
                  <br />
                  <br />
                  I am 
                  <i>
                    <b className="highlight-text"> the founder of a company, </b>
                    specializing in developing IT solutions. You can learn more about our work here.
                  </i> 
                  <br />
                </p>
              </motion.div>
            </Col>
            <Col md={4} className="about-image-column">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000}>
                  <div className="about-card-container">
                    <div className="about-card">
                      <div className="card-content">
                        <h3>Skills</h3>
                        <div className="skills-grid">
                          <div className="skill-item">Java</div>
                          <div className="skill-item">Spring</div>
                          <div className="skill-item">React</div>
                          <div className="skill-item">Node.js</div>
                          <div className="skill-item">MongoDB</div>
                          <div className="skill-item">TypeScript</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            </Col>
          </Row>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                  Please don't hesitate to reach out to me and <span className="highlight-text">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <motion.li 
                    className="social-icons"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href="https://github.com/it20207540"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </motion.li>
                  <motion.li 
                    className="social-icons"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href="https://github.com/it20207540"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </motion.li>
                  <motion.li 
                    className="social-icons"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href="https://www.linkedin.com/in/naween-dilshan-15045120b"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </motion.li>
                  <motion.li 
                    className="social-icons"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href="https://www.facebook.com/profile.php?id=100009886727829"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </motion.li>
                </ul>
              </Col>
              
            </Row>
          </motion.div>
        </motion.div>
        <br/><br/>
      </Container>
    </Container>
  );
};

export default About;