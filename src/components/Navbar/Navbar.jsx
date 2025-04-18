import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  
  // Check if we're on the contact page
  const isContactPage = location.pathname === "/contact";

  function scrollHandler() {
    // Always show colored navbar on contact page, otherwise check scroll position
    if (isContactPage || window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    // Set navbar color immediately based on current page
    if (isContactPage) {
      updateNavbar(true);
    } else {
      scrollHandler();
    }
    
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isContactPage]);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: i => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      } 
    })
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="brand-container"
            >
              <FaLaptopCode className="brand-icon" />
              <span className="brand-text">Naween</span>
            </motion.div>
          </Navbar.Brand>
          
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
            className="navbar-toggler-custom"
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              {[
                { path: "/", name: "Home", icon: <AiOutlineHome /> },
                { path: "/skillset", name: "Skillset", icon: <GiSkills /> },
                { path: "/project", name: "Projects", icon: <AiOutlineFundProjectionScreen /> },
                { path: "/resume", name: "Resume", icon: <CgFileDocument /> },
                { path: "/contact", name: "Contact", icon: <AiOutlineContacts /> }
              ].map((link, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={navItemVariants}
                  className="nav-item-container"
                >
                  <Nav.Item>
                    <Nav.Link
                      as={Link}
                      to={link.path}
                      onClick={() => updateExpanded(false)}
                      className={location.pathname === link.path ? "active-navlink" : ""}
                    >
                      <motion.div
                        className="nav-link-content"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </motion.div>
                    </Nav.Link>
                  </Nav.Item>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;
