import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import './Social.css'

const Social = () => {
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
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section className="social-section">
      <Container className="social-container-wrapper">
        <motion.div 
          className="social-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="g-0">
            <Col lg={5} md={12} className="social-left-col">
              <motion.div variants={itemVariants} className="map-section">
                <h2 className="social-title">My <span className="highlight-text">Location</span></h2>
                <div className="location-container">
                  <div className="location-map">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63482.45006374991!2d80.51567282132943!3d5.949745947716629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae138d151937cd9%3A0x1d711f45897009a3!2sMatara!5e0!3m2!1sen!2slk!4v1696422800374!5m2!1sen!2slk" 
                      width="100%" 
                      height="200" 
                      style={{ border: 0, borderRadius: "10px" }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Matara, Sri Lanka Map"
                    ></iframe>
                  </div>
                  <div className="location-info">
                    <div className="location-item">
                      <div className="location-icon">
                        <FaMapMarkerAlt />
                      </div>
                      <p>Matara, Sri Lanka</p>
                    </div>
                    <div className="location-item">
                      <div className="location-icon">
                        <FaPhoneAlt />
                      </div>
                      <p>+94 777 123 456</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={7} md={12} className="social-right-col">
              <motion.div variants={itemVariants} className="connect-section">
                <h2 className="social-title">Connect With <span className="highlight-text">Me</span></h2>
                <p className="social-description">
                  Feel free to reach out through my social media platforms for collaboration opportunities!
                </p>
                
                <div className="social-links-container">
                  <motion.a 
                    href="https://github.com/it20207540" 
                    target="_blank" 
                    rel="noreferrer"
                    className="social-link-item github"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="social-icon">
                      <AiFillGithub />
                    </div>
                    <div className="social-link-content">
                      <h3>GitHub</h3>
                      <p>View my repositories</p>
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    href="https://www.linkedin.com/in/naween-dilshan-15045120b" 
                    target="_blank" 
                    rel="noreferrer"
                    className="social-link-item linkedin"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="social-icon">
                      <FaLinkedinIn />
                    </div>
                    <div className="social-link-content">
                      <h3>LinkedIn</h3>
                      <p>Connect professionally</p>
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="social-link-item twitter"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="social-icon">
                      <AiOutlineTwitter />
                    </div>
                    <div className="social-link-content">
                      <h3>Twitter</h3>
                      <p>Follow for updates</p>
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    href="https://instagram.com/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="social-link-item instagram"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="social-icon">
                      <AiFillInstagram />
                    </div>
                    <div className="social-link-content">
                      <h3>Instagram</h3>
                      <p>Visual content</p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}

export default Social