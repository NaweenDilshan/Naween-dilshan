import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

const SmoothScroll = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      smoothTouch: false,
      infinite: false
    });

    // Make Lenis available globally for other components
    window.lenis = lenis;

    // Add scroll event listener for other components
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      // Add classes to the document body based on scroll state
      if (scroll > 50) {
        document.body.classList.add('is-scrolled');
      } else {
        document.body.classList.remove('is-scrolled');
      }
      
      // Handle inertia classes
      if (Math.abs(velocity) > 0.1) {
        document.body.classList.add('is-scrolling');
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(() => {
          document.body.classList.remove('is-scrolling');
        }, 100);
      }
    });

    // Integrate with any existing GSAP animations
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // Scroll to top when route changes
    lenis.scrollTo(0, { immediate: true });

    return () => {
      window.lenis = null;
      clearTimeout(window.scrollTimeout);
      lenis.destroy();
    };
  }, [location.pathname]);

  return <>{children}</>;
};

export default SmoothScroll; 