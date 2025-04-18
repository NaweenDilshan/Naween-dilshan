import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      // Dark mode colors
      root.style.setProperty('--section-background-color', 'linear-gradient(to bottom left, #03045E, #023E8A)');
      root.style.setProperty('--image-gradient', 'linear-gradient(to bottom left, rgba(3, 4, 94, 0.9), rgba(2, 62, 138, 0.95))');
      root.style.setProperty('--dark-blue', '#03045E');
      root.style.setProperty('--blue-900', '#023E8A');
      root.style.setProperty('--card-bg', 'rgba(0, 18, 50, 0.5)');
      root.style.setProperty('--glass-bg', 'rgba(3, 4, 70, 0.15)');
    } else {
      // Light mode colors
      root.style.setProperty('--section-background-color', 'linear-gradient(to bottom left, #CAF0F8, #90E0EF)');
      root.style.setProperty('--image-gradient', 'linear-gradient(to bottom left, rgba(202, 240, 248, 0.9), rgba(144, 224, 239, 0.95))');
      root.style.setProperty('--dark-blue', '#0077B6');
      root.style.setProperty('--blue-900', '#0096C7');
      root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.7)');
      root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.25)');
    }
  }, [isDarkMode]);

  return (
    <motion.div 
      className="theme-toggle"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </motion.div>
  );
};

export default ThemeToggle; 