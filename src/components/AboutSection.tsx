'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function AboutSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  
  // Text animations for items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    }
  };

  return (
    <section id="about" ref={containerRef} className="py-24 overflow-hidden relative bg-gray/5">
      {/* Background elements with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
          style={{ y: y1, opacity }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"
          style={{ y: y2, opacity }}
        />
        <motion.div 
          className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full bg-laser-color-1/20 blur-3xl"
          style={{ y: y3, opacity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column with 3D tilt effect */}
          <div className="order-2 lg:order-1">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl neon-border"
              initial={{ opacity: 0, rotateY: -10, rotateX: 10 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: -5, 
                rotateX: 5,
                transition: { duration: 0.5 }
              }}
              style={{ '--animation-delay': '0.3s' }}
            >
              {/* Placeholder image - replace with your own */}
              <div className="aspect-[4/3] relative w-full bg-gradient-to-br from-accent/80 to-secondary/80">
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold neon-glow">
                  Creative Animation Team
                </div>
              </div>

              {/* Image sheen effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                initial={{ opacity: 0, left: "-100%" }}
                animate={{ 
                  opacity: [0, 0.1, 0],
                  left: ["-100%", "100%", "100%"] 
                }}
                transition={{ 
                  repeat: Infinity,
                  repeatDelay: 5,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>

          {/* Content column */}
          <div ref={textRef} className="order-1 lg:order-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isTextInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About <span className="text-accent-light neon-glow">AnimX</span>
                </h2>
                
                <div className="h-1 w-16 bg-gradient-to-r from-laser-color-1 via-laser-color-2 to-laser-color-3 rounded-full mb-8"></div>
              </motion.div>
              
              <motion.p variants={itemVariants} className="text-foreground text-lg mb-4">
                We are a dedicated team of animation experts and developers passionate about creating fluid, engaging user experiences that captivate audiences and elevate digital products.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-foreground text-lg mb-6">
                Our mission is to make the web more dynamic, interactive, and enjoyable through thoughtful animation that enhances rather than distracts from the user experience.
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-accent-light">Our Approach</h3>
                
                <ul className="space-y-3">
                  {[
                    "Performance-first animations that don't compromise speed",
                    "Accessibility considerations built into every interaction",
                    "Cross-platform compatibility for consistent experiences",
                    "Custom solutions tailored to your specific needs"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <span className="mr-3 text-laser-color-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a 
                  href="#contact" 
                  className="mt-8 inline-flex items-center px-8 py-3 bg-gradient-to-r from-laser-color-1 via-laser-color-2 to-laser-color-3 hover:from-laser-color-3 hover:via-laser-color-2 hover:to-laser-color-1 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-accent/20"
                >
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 