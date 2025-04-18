import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./BackgroundAnimation.css";

const BackgroundAnimation = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clean up any existing elements
    const existingElements = container.querySelectorAll('.bg-element');
    existingElements.forEach(el => el.remove());
    
    // Add new animated elements
    createBackgroundElements(container);
    
    // Cleanup on unmount
    return () => {
      const elements = container.querySelectorAll('.bg-element');
      elements.forEach(el => el.remove());
    };
  }, []);
  
  const createBackgroundElements = (container) => {
    const colors = [
      'rgba(0, 119, 182, 0.2)',
      'rgba(0, 180, 216, 0.15)',
      'rgba(72, 202, 228, 0.1)',
      'rgba(144, 224, 239, 0.15)',
      'rgba(173, 232, 244, 0.1)'
    ];
    
    const shapes = ['circle', 'square', 'triangle', 'hexagon', 'plus'];
    const count = Math.min(window.innerWidth / 30, 25); // Responsive element count
    
    for (let i = 0; i < count; i++) {
      const element = document.createElement('div');
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Random sizes based on viewport
      const size = Math.random() * (window.innerWidth / 20) + (window.innerWidth / 30);
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Animation properties
      const duration = Math.random() * 25 + 15;
      const delay = Math.random() * 5;
      const scale = Math.random() * 0.4 + 0.8;
      
      // Set element properties
      element.classList.add('bg-element', shape);
      element.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        background-color: ${color};
        opacity: ${Math.random() * 0.5 + 0.2};
        z-index: 0;
        filter: blur(${size / 10}px);
        animation: float${Math.floor(Math.random() * 3) + 1} ${duration}s ease-in-out ${delay}s infinite alternate;
        transform: scale(${scale}) rotate(${Math.random() * 360}deg);
        will-change: transform, opacity;
      `;
      
      container.appendChild(element);
    }
    
    // Add gradient blob
    const blob1 = document.createElement('div');
    blob1.classList.add('gradient-blob', 'blob1');
    container.appendChild(blob1);
    
    const blob2 = document.createElement('div');
    blob2.classList.add('gradient-blob', 'blob2');
    container.appendChild(blob2);
  };
  
  return (
    <div className="background-animation-container" ref={containerRef}>
      <motion.div 
        className="radial-gradient"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="glow-line top-line"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          width: ["40%", "60%", "40%"]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="glow-line bottom-line"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          width: ["50%", "70%", "50%"]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default BackgroundAnimation; 