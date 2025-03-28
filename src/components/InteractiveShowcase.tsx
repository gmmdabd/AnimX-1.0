'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Tab Item component
const TabItem = ({ 
  title, 
  isActive, 
  color, 
  onClick 
}: { 
  title: string; 
  isActive: boolean; 
  color: string;
  onClick: () => void;
}) => (
  <motion.button
    onClick={onClick}
    className={`relative px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
      isActive 
        ? `bg-${color}/20 text-${color} shadow-lg` 
        : 'bg-gray/10 text-foreground/70 hover:bg-gray/20'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {title}
    {isActive && (
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          boxShadow: `0 0 15px 2px var(--${color})`,
          zIndex: -1
        }}
      />
    )}
  </motion.button>
);

// Interactive showcase component for different principles
export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  // Content for each principle
  const showcases = [
    {
      title: "User Experience",
      color: "laser-color-1",
      description: "Intuitive navigation and flow guide users naturally through digital experiences. Our animations enhance usability by providing clear feedback and direction.",
      demo: (
        <div className="relative w-full aspect-video max-w-md mx-auto bg-gray/20 rounded-xl overflow-hidden neon-border">
          {/* User Journey Flow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full p-4 flex flex-col">
              <div className="flex justify-between mb-8">
                {[1, 2, 3, 4].map((step) => (
                  <motion.div
                    key={step}
                    className="w-16 h-16 rounded-full flex items-center justify-center bg-gray/30 text-foreground relative"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(var(--laser-color-1-rgb), 0)",
                        "0 0 0 10px rgba(var(--laser-color-1-rgb), 0.2)",
                        "0 0 0 0 rgba(var(--laser-color-1-rgb), 0)"
                      ]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: step * 0.5
                    }}
                  >
                    Step {step}
                    {step < 4 && (
                      <motion.div
                        className="absolute top-1/2 left-full w-8 h-0.5 bg-laser-color-1/50"
                        style={{ transformOrigin: "left center" }}
                        animate={{
                          scaleX: [0, 1, 1, 1, 0],
                          opacity: [0, 1, 1, 1, 0]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          delay: step * 0.5,
                          times: [0, 0.2, 0.4, 0.8, 1]
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="flex-1 bg-gray/30 rounded-lg flex items-center justify-center p-4">
                <p className="text-center text-sm">
                  Animations guide users through each step, making the journey intuitive and engaging
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Visual Design",
      color: "laser-color-2",
      description: "Aesthetics and brand consistency create memorable, cohesive experiences. Our design system ensures animations complement your visual identity.",
      demo: (
        <div className="relative w-full aspect-video max-w-md mx-auto bg-gray/20 rounded-xl overflow-hidden neon-border">
          {/* Color & Style Demo */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-4">
            {[
              { bg: "laser-color-1", label: "Primary" },
              { bg: "laser-color-2", label: "Secondary" },
              { bg: "laser-color-3", label: "Accent" },
              { bg: "accent-light", label: "Highlight" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`bg-${item.bg}/20 rounded-lg flex flex-col items-center justify-center overflow-hidden relative`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full bg-${item.bg} mb-2`}
                  animate={{
                    boxShadow: [
                      `0 0 0 0 var(--${item.bg})`,
                      `0 0 20px 2px var(--${item.bg})`,
                      `0 0 0 0 var(--${item.bg})`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-medium">{item.label}</span>
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.1, 0],
                    background: `radial-gradient(circle at center, var(--${item.bg}) 0%, transparent 70%)`
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Originality",
      color: "laser-color-3",
      description: "Innovative approaches and unique solutions set your product apart. Our custom animations create experiences users won't find anywhere else.",
      demo: (
        <div className="relative w-full aspect-video max-w-md mx-auto bg-gray/20 rounded-xl overflow-hidden neon-border">
          {/* Creative Animation Demo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-24 h-24 relative flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-5 h-5 rounded-full"
                  style={{ 
                    background: `var(--${i % 3 === 0 ? 'laser-color-1' : i % 3 === 1 ? 'laser-color-2' : 'laser-color-3'})`,
                    rotate: `${angle}deg`,
                    transformOrigin: "50px 12.5px",
                    filter: "blur(0.5px)"
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)"
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px 5px rgba(var(--laser-color-1-rgb), 0.5)",
                    "0 0 20px 5px rgba(var(--laser-color-2-rgb), 0.5)",
                    "0 0 20px 5px rgba(var(--laser-color-3-rgb), 0.5)",
                    "0 0 20px 5px rgba(var(--laser-color-1-rgb), 0.5)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span className="slimy-text" data-text="A">A</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      title: "Presentation",
      color: "accent-light",
      description: "Quality implementation showcases attention to detail. Our animations are optimized for performance and visual fidelity across all devices.",
      demo: (
        <div className="relative w-full aspect-video max-w-md mx-auto bg-gray/20 rounded-xl overflow-hidden neon-border">
          {/* Device Optimization Demo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 w-full p-6">
              {["Mobile", "Tablet", "Desktop"].map((device, i) => (
                <motion.div
                  key={device}
                  className="bg-gray/30 rounded-lg p-2 flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <motion.div
                    className="w-full aspect-[9/16] bg-background rounded mb-2 overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Device screen content */}
                    <motion.div 
                      className="absolute inset-1 rounded"
                      animate={{
                        background: [
                          "linear-gradient(to bottom, var(--laser-color-1), var(--background))",
                          "linear-gradient(to bottom, var(--laser-color-2), var(--background))",
                          "linear-gradient(to bottom, var(--laser-color-3), var(--background))"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Performance indicators */}
                    <motion.div
                      className="absolute bottom-1 right-1 bg-gray/50 rounded-full px-1 text-white text-[8px]"
                      animate={{
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      60fps
                    </motion.div>
                  </motion.div>
                  <span className="text-xs font-medium">{device}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-gray/5 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/3"></div>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-laser-color-1/10 blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive <span className="slimy-text text-accent-light neon-glow inline-block" data-text="Showcase">Showcase</span>
          </h2>
          <p className="text-foreground/80 max-w-xl mx-auto">
            Experience our core principles in action with these interactive demos.
          </p>
          
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-laser-color-1 via-laser-color-2 to-laser-color-3 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        {/* Tabs for different principles */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12 flex-wrap">
          {showcases.map((showcase, index) => (
            <TabItem
              key={index}
              title={showcase.title}
              isActive={activeTab === index}
              color={showcase.color}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
        
        {/* Content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`description-${activeTab}`}
              className="order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className={`text-2xl font-bold mb-4 text-${showcases[activeTab].color}`}>
                {showcases[activeTab].title}
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                {showcases[activeTab].description}
              </p>
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#features" 
                  className={`slimy-button px-6 py-3 rounded-full bg-${showcases[activeTab].color}/20 text-${showcases[activeTab].color} font-medium inline-flex items-center transition-all duration-300`}
                >
                  See Features
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`demo-${activeTab}`}
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {showcases[activeTab].demo}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 