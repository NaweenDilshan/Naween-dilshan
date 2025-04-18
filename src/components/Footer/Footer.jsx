import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaRegCopyright, FaCode } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <footer className="modern-footer compact-footer">
      <div className="footer-waves">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="footer-wave-path"></path>
        </svg>
      </div>
      
      <Container>
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Row className="footer-compact-row">
            <Col md={5} className="footer-links-col">
              <ul className="footer-links footer-links-horizontal">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skillset">Skills</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </Col>
            
            <Col md={7}>
              <div className="footer-social-icons">
                <motion.a 
                  href="https://github.com/it20207540" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="footer-icon"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/naween-dilshan-15045120b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="footer-icon"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="footer-icon"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </motion.a>
                <motion.a 
                  href="https://instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="footer-icon"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </motion.a>
              </div>
            </Col>
          </Row>
        </motion.div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <FaRegCopyright /> <span>{year} Naween Dilshan. All rights reserved.</span>
          </div>
          <div className="built-with">
            <FaCode /> <span>Built with React & Framer Motion</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;