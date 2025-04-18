import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LoadingAnimation.css";

const LoadingAnimation = ({ finishLoading }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        finishLoading();
      }, 1000);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [finishLoading]);

  const backgroundVariants = {
    initial: { 
      opacity: 1
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "afterChildren"
      }
    }
  };

  const containerVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const logoVariants = {
    initial: { 
      opacity: 0,
      y: 20
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const progressVariants = {
    initial: { 
      scaleX: 0,
      originX: 0
    },
    animate: { 
      scaleX: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    initial: { 
      opacity: 0,
      y: 10,
      scale: 0
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.1
      }
    }),
    exit: (i) => ({
      opacity: 0,
      y: -10,
      scale: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: i * 0.05
      }
    })
  };

  const textVariants = {
    initial: { 
      opacity: 0,
      y: 10
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const gradientVariants = {
    animate: {
      background: [
        "linear-gradient(90deg, #0077B6 0%, #48CAE4 100%)",
        "linear-gradient(180deg, #0077B6 0%, #48CAE4 100%)",
        "linear-gradient(270deg, #0077B6 0%, #48CAE4 100%)",
        "linear-gradient(360deg, #0077B6 0%, #48CAE4 100%)",
        "linear-gradient(90deg, #0077B6 0%, #48CAE4 100%)"
      ],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const shapesVariants = {
    initial: { 
      opacity: 0
    },
    animate: { 
      opacity: 0.7,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  // SVG animation variants
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          type: "spring", 
          duration: 1.5,
          bounce: 0 
        },
        opacity: { 
          duration: 0.2 
        }
      }
    }
  };

  const fillVariants = {
    hidden: {
      fill: "rgba(0, 119, 182, 0)",
    },
    visible: {
      fill: "rgba(0, 119, 182, 1)",
      transition: {
        duration: 1,
        delay: 1.5
      }
    }
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-container"
          variants={backgroundVariants}
          initial="initial"
          exit="exit"
        >
          <div className="loading-background"></div>
          
          <motion.div 
            className="loading-shapes"
            variants={shapesVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="shape circle"></div>
            <div className="shape square"></div>
            <div className="shape triangle"></div>
            <div className="shape plus"></div>
          </motion.div>
          
          <motion.div
            className="loading-content"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div 
              className="loading-logo"
              variants={logoVariants}
            >
              <motion.div 
                className="logo-gradient"
                variants={gradientVariants}
                animate="animate"
              >
                <motion.div
                  className="code-icon-container"
                  variants={pulseVariants}
                  animate="animate"
                >
                  <motion.svg 
                    viewBox="0 0 100 100" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="code-icon"
                    variants={rotateVariants}
                    animate="animate"
                  >
                    {/* Left bracket */}
                    <motion.path
                      d="M35,20 L15,50 L35,80"
                      stroke="#fff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"
                    />
                    
                    {/* Right bracket */}
                    <motion.path
                      d="M65,20 L85,50 L65,80"
                      stroke="#fff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"
                    />
                    
                    {/* Slash */}
                    <motion.path
                      d="M55,15 L45,85"
                      stroke="#fff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"
                    />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="loading-progress-bar"
              variants={logoVariants}
            >
              <motion.div 
                className="progress-fill"
                variants={progressVariants}
              ></motion.div>
            </motion.div>
            
            <motion.div 
              className="loading-text"
              variants={textVariants}
            >
              <span>Loading</span>
              <div className="loading-dots">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="dot"
                    custom={i}
                    variants={dotVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >.</motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation; 