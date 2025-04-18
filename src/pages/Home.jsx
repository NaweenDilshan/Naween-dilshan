import React, { useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from '../assets/about.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaServer, FaDatabase } from 'react-icons/fa';

const Home = () => {
  return (
    <>
    <section>
      <Container fluid className="home-section" id="home">
        <div className="home-background">
          <div className="home-overlay"></div>
        </div>
        <Particle />
        <Container className="home-content">
        <div style={{ height: "50px" }}></div>
          <Row className="align-items-center">
            <Col md={6} className="home-header">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> K . H Naween Dilshan</strong>
                </h1>

                <div style={{ padding: 30, textAlign: "left" }}>
                  <Type />
                </div>

                <motion.div 
                  className="cta-buttons"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <a href="#about" className="primary-btn">
                    About Me
                  </a>
                  <a href="#projects" className="secondary-btn">
                    View Projects
                  </a>
                </motion.div>
              </motion.div>
            </Col>

            <Col md={6}>
              <motion.div
                className="tech-animation-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="glassmorphism-card">
                  <div className="tech-showcase">
                    <motion.div 
                      className="tech-showcase-icon"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaLaptopCode />
                    </motion.div>
                    
                    <div className="tech-icons-grid">
                      <motion.div 
                        className="tech-icon"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.6,
                          delay: 0.2
                        }}
                      >
                        <i className="devicon-react-original colored"></i>
                      </motion.div>
                      <motion.div 
                        className="tech-icon"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.6,
                          delay: 0.3
                        }}
                      >
                        <i className="devicon-javascript-plain colored"></i>
                      </motion.div>
                      <motion.div 
                        className="tech-icon"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.6,
                          delay: 0.4
                        }}
                      >
                        <i className="devicon-nodejs-plain colored"></i>
                      </motion.div>
                      <motion.div 
                        className="tech-icon"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.6,
                          delay: 0.5
                        }}
                      >
                        <i className="devicon-java-plain colored"></i>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="glow-line"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.6,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      
    </section>
    </>
  );
}

export default Home