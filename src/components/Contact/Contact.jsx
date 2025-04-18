import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaUser, FaCommentAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    emailjs
      .sendForm(
        'service_0d94cdo', // Your service ID
        'template_65dy36o', // Your template ID
        form.current, // Form reference
        'rZqXrtVyno8zZWW6B' // Your public key
      )
      .then(
        () => {
          setSent(true);
          setSending(false);
          // Reset the form fields
          form.current.reset();
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setSent(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);
          setSending(false);
        }
      );
  };

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
    <section className="contact-section">
      <div className="contact-wave-container">
        <div className="contact-wave"></div>
      </div>
      
      <Container className="contact-container-wrapper">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="contact-container"
        >
          <Row className="align-items-center g-0">
            <Col lg={5} className="contact-left-col">
              <motion.div variants={itemVariants} className="contact-heading-container">
                <h2 className="contact-subtitle">Get in Touch</h2>
                <h1 className="contact-title">Let's Work <span className="highlight-text">Together</span></h1>
                <p className="contact-description">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-info-content">
                    <h3>Email</h3>
                    <p>naweendilshan26@gmail.com</p>
                  </div>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={7} className="contact-right-col">
              <motion.div variants={itemVariants} className="contact-form-container">
                <div className="form-notice">
                  <p><span className="notice-icon">ℹ️</span> Please include your contact details with your message.</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="modern-form">
                  <div className="form-group">
                    <div className="input-icon">
                      <FaUser />
                    </div>
                    <input 
                      type="text" 
                      name="user_name" 
                      id="user_name"
                      className="form-control" 
                      placeholder=" " 
                      required 
                    />
                    <label htmlFor="user_name" className="form-label">Your Name</label>
                  </div>
                  
                  <div className="form-group">
                    <div className="input-icon">
                      <FaEnvelope />
                    </div>
                    <input 
                      type="email" 
                      name="user_email"
                      id="user_email" 
                      className="form-control" 
                      placeholder=" " 
                      required 
                    />
                    <label htmlFor="user_email" className="form-label">Your Email</label>
                  </div>
                  
                  <div className="form-group">
                    <div className="input-icon textarea-icon">
                      <FaCommentAlt />
                    </div>
                    <textarea 
                      name="message"
                      id="message" 
                      className="form-control" 
                      placeholder=" " 
                      required
                    />
                    <label htmlFor="message" className="form-label textarea-label">Your Message</label>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className={`submit-button ${sending ? 'sending' : ''} ${sent ? 'sent' : ''} ${error ? 'error' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={sending}
                  >
                    {!sending && !sent && !error && (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane />
                      </>
                    )}
                    
                    {sending && <span>Sending...</span>}
                    {sent && <span>Message Sent!</span>}
                    {error && <span>Failed to Send</span>}
                  </motion.button>
                  
                  {sent && (
                    <motion.div 
                      className="success-message"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      Thank you for reaching out! I'll get back to you soon.
                    </motion.div>
                  )}
                  
                  {error && (
                    <motion.div 
                      className="error-message"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      Something went wrong. Please try again later.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
