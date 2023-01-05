import React from 'react';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vw",
      scale: 0.2
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: "100vw",
      scale: 1.2
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

function Contact() {
  return (
    <>
        <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <ContactSection />
      </motion.div>
    </>
  );
}

export default Contact;