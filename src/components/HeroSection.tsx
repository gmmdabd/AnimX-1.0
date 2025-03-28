'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import gsap from 'gsap';

export default function HeroSection() {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const circlesRef = useRef<HTMLDivElement>(null);

  // Animate with GSAP for complex background animations
  useEffect(() => {
    if (!circlesRef.current) return;
    
    const circles = circlesRef.current.querySelectorAll('.animated-circle');
    
    gsap.fromTo(circles, 
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 0.4, 
        duration: 1.5, 
        stagger: 0.2, 
        ease: "elastic.out(1, 0.4)" 
      }
    );
    
    // Continuous floating animation
    circles.forEach(circle => {
      const randomX = Math.random() * 50 - 25;
      const randomY = Math.random() * 50 - 25;
      const randomDuration = 3 + Math.random() * 5;
      
      gsap.to(circle, {
        x: randomX,
        y: randomY,
        duration: randomDuration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  // Control animation based on view
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Animated background circles */}
      <div ref={circlesRef} className="absolute inset-0 overflow-hidden">
        <div className="animated-circle absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-accent-light opacity-20 blur-xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="animated-circle absolute top-3/4 left-1/3 w-64 h-64 rounded-full bg-secondary-light opacity-20 blur-xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="animated-circle absolute top-1/2 right-1/4 w-52 h-52 rounded-full bg-accent opacity-20 blur-xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="animated-circle absolute bottom-1/4 right-1/3 w-36 h-36 rounded-full bg-secondary opacity-20 blur-xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div ref={ref} className="w-full lg:w-1/2 lg:pr-10">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
              initial="hidden"
              animate={mainControls}
            >
              <motion.span 
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.2 }
                  }
                }}
              >
                Stunning
              </motion.span>
              <motion.span 
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.4 }
                  }
                }}
              >
                <span className="slimy-text text-accent neon-glow inline-block" data-text="Animated">Animated</span> Experiences
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-foreground text-lg md:text-xl mb-8 max-w-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, delay: 0.6 }
                }
              }}
              initial="hidden"
              animate={mainControls}
            >
              Create beautiful, interactive, and engaging user experiences with our advanced animation library.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, delay: 0.8 }
                }
              }}
              initial="hidden"
              animate={mainControls}
            >
              <motion.a
                href="#features"
                className="slimy-button neon-border bg-gradient-to-r from-laser-color-1 via-laser-color-2 to-laser-color-3 text-white font-medium px-8 py-3 rounded-full inline-flex items-center justify-center transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Features
              </motion.a>
              
              <motion.a
                href="#about"
                className="slimy-button bg-transparent border-2 border-foreground hover:border-accent-light text-foreground hover:text-accent-light font-medium px-8 py-3 rounded-full inline-flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              className="relative w-full aspect-square max-w-md mx-auto neon-border"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              style={{ '--animation-delay': '0.2s' }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/30 to-secondary/30 rounded-2xl transform rotate-3 animate-blob" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-2xl transform -rotate-3 animate-blob animation-delay-2000" />
              
              {/* Main visual element */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray/10 backdrop-blur-sm border border-gray/20 shadow-xl flex items-center justify-center p-8">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                  <motion.div 
                    className="w-24 h-24 rounded-full bg-gradient-to-r from-laser-color-1 via-laser-color-2 to-laser-color-3 flex items-center justify-center text-white text-3xl font-bold neon-glow"
                    animate={{ 
                      y: [0, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      ease: "easeInOut"
                    }}
                  >
                    AX
                  </motion.div>
                  <h3 className="text-xl font-semibold slimy-text" data-text="Motion Design">Motion Design</h3>
                  <p className="text-sm text-foreground">Create engaging user interfaces with smooth animations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 