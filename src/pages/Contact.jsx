import React from "react";
import { motion } from "framer-motion";
import ContactComponent from "../components/Contact/Contact";
import SocialComponent from "../components/Contact/Social";
import Particle from "../components/Particle";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-page">
        <Particle />
        <ContactComponent />
        <SocialComponent />
      </div>
    </motion.div>
  );
}

export default Contact;