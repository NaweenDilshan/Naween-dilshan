import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import all page components
import Home from './Home';
import Skillset from './Skillset';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

// Import other components
import Particle from '../components/Particle';

// Import CSS
import './HomeAllSections.css';

const HomeAllSections = () => {
  // Active section state
  const [activeSection, setActiveSection] = useState('home');

  // References for each section for scroll animations
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll progress for each section
  const { scrollYProgress: homeProgress } = useScroll({
    target: homeRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: skillsProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: projectsProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: resumeProgress } = useScroll({
    target: resumeRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"]
  });

  // Transform values for animations
  const homeOpacity = useTransform(homeProgress, [0, 0.8], [1, 0]);
  const skillsOpacity = useTransform(skillsProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const skillsY = useTransform(skillsProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  const projectsOpacity = useTransform(projectsProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const projectsY = useTransform(projectsProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  const resumeOpacity = useTransform(resumeProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const resumeY = useTransform(resumeProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  const contactOpacity = useTransform(contactProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const contactY = useTransform(contactProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const homeTop = homeRef.current?.offsetTop || 0;
      const skillsTop = skillsRef.current?.offsetTop || 0;
      const projectsTop = projectsRef.current?.offsetTop || 0;
      const resumeTop = resumeRef.current?.offsetTop || 0;
      const contactTop = contactRef.current?.offsetTop || 0;
      
      // Determine which section is currently in view
      if (scrollPosition < skillsTop - windowHeight / 2) {
        setActiveSection('home');
      } else if (scrollPosition < projectsTop - windowHeight / 2) {
        setActiveSection('skills');
      } else if (scrollPosition < resumeTop - windowHeight / 2) {
        setActiveSection('projects');
      } else if (scrollPosition < contactTop - windowHeight / 2) {
        setActiveSection('resume');
      } else {
        setActiveSection('contact');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const sectionRef = {
      home: homeRef,
      skills: skillsRef,
      projects: projectsRef,
      resume: resumeRef,
      contact: contactRef
    }[sectionId];
    
    if (sectionRef?.current) {
      if (window.lenis) {
        window.lenis.scrollTo(sectionRef.current, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Navigation dots with tooltips
  const navigationDots = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="all-sections-container">
      <Particle />
      
      {/* Navigation Dots */}
      <div className="section-dots">
        {navigationDots.map(dot => (
          <div 
            key={dot.id}
            className={`section-dot-container ${activeSection === dot.id ? 'active' : ''}`}
          >
            <div 
              className={`section-dot ${activeSection === dot.id ? 'active' : ''}`}
              onClick={() => scrollToSection(dot.id)}
            />
            <div className="section-dot-tooltip">{dot.label}</div>
          </div>
        ))}
      </div>
      
      {/* Home Section */}
      <section ref={homeRef} id="home-section" className="section-full-height">
        <motion.div style={{ opacity: homeOpacity }}>
          <Home />
        </motion.div>
      </section>
      
      {/* Skills Section */}
      <section ref={skillsRef} id="skills-section" className="section-full-height">
        <motion.div style={{ opacity: skillsOpacity, y: skillsY }}>
          <div className="section-title-container">
            <h1 className="section-title">My <span className="purple">Skills</span></h1>
          </div>
          <Skillset />
        </motion.div>
      </section>
      
      {/* Projects Section */}
      <section ref={projectsRef} id="projects-section" className="section-full-height">
        <motion.div style={{ opacity: projectsOpacity, y: projectsY }}>
          <div className="section-title-container">
            <h1 className="section-title">My <span className="purple">Projects</span></h1>
          </div>
          <Projects />
        </motion.div>
      </section>
      
      {/* Resume Section */}
      <section ref={resumeRef} id="resume-section" className="section-full-height">
        <motion.div style={{ opacity: resumeOpacity, y: resumeY }}>
          <div className="section-title-container">
            <h1 className="section-title">My <span className="purple">Resume</span></h1>
          </div>
          <Resume />
        </motion.div>
      </section>
      
      {/* Contact Section */}
      <section ref={contactRef} id="contact-section" className="section-full-height">
        <motion.div style={{ opacity: contactOpacity, y: contactY }}>
          <div className="section-title-container">
            <h1 className="section-title">Contact <span className="purple">Me</span></h1>
          </div>
          <Contact />
        </motion.div>
      </section>
    </div>
  );
};

export default HomeAllSections; 