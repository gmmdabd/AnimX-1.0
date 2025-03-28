'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Feature card with animation
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  index: number 
}) => {
  return (
    <motion.div
      className="neon-border relative overflow-hidden group bg-gradient-to-b from-gray/30 to-background p-6 rounded-2xl shadow-lg backdrop-blur-sm"
      initial={{ 
        opacity: 0, 
        y: 50,
        borderRadius: "1rem" 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5,
          delay: index * 0.1 
        }
      }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      style={{ '--animation-delay': `${index * 0.4}s` }}
    >
      {/* Animated background element */}
      <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-accent/5 blur-xl group-hover:bg-accent/10 transition-all duration-700"></div>
      
      {/* Badge - shows principle focus for this feature */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-gray/30 backdrop-blur-md rounded-full px-3 py-1 text-xs uppercase tracking-wider font-medium">
          {index % 4 === 0 ? 'UX' : index % 4 === 1 ? 'Design' : index % 4 === 2 ? 'Original' : 'Quality'}
        </div>
      </div>

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-gray/20 flex items-center justify-center mb-6 text-accent-light neon-glow group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        
        <h2 className="text-xl font-semibold mb-4 text-accent-light neon-glow">{title}</h2>
        
        <p className="text-foreground/80 leading-relaxed">
          {description}
        </p>

        {/* Interactive detail that appears on hover */}
        <div className="mt-6 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
          <div className="border-t border-gray/20 pt-4">
            <h4 className="text-sm font-medium mb-2 text-accent-light">Key Principles:</h4>
            <div className="flex flex-wrap gap-2">
              {['User Experience', 'Visual Design', 'Originality', 'Presentation'].map((tag, i) => (
                <span 
                  key={i} 
                  className={`text-xs px-2 py-1 rounded-full ${
                    i === 0 ? 'bg-laser-color-1/20 text-laser-color-1' : 
                    i === 1 ? 'bg-laser-color-2/20 text-laser-color-2' : 
                    i === 2 ? 'bg-laser-color-3/20 text-laser-color-3' : 
                    'bg-accent-light/20 text-accent-light'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function FeaturesSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.5 });
  
  // Features data
  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>,
      title: "Fluid Animations",
      description: "Create smooth transitions between states with our physics-based animation system.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      title: "Creative Transitions",
      description: "Engage users with unique page transitions and interactive elements.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
      title: "Optimized Performance",
      description: "Animations are hardware-accelerated for smooth 60fps performance on all devices.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>,
      title: "Responsive Design",
      description: "Animations adapt fluidly to different screen sizes and device capabilities.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
      title: "Modular Components",
      description: "Mix and match pre-built animation components to create unique experiences.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
      title: "Customizable",
      description: "Tailor every aspect of your animations with our intuitive API and extensive options.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray/5">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful <span className="text-accent-light neon-glow">Animation</span> Features</h2>
            <p className="text-gray-dark max-w-xl mx-auto">Discover all the ways you can enhance your user interface with our cutting-edge animation technology.</p>
          </motion.div>
          
          <motion.div 
            className="h-1 w-20 bg-accent-light mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 