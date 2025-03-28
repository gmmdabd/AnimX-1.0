'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 ${i < rating ? 'text-laser-color-1' : 'text-gray/30'}`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Review card component
const ReviewCard = ({ 
  name, 
  role, 
  content, 
  rating, 
  index 
}: { 
  name: string; 
  role: string; 
  content: string; 
  rating: number; 
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="review-card neon-border bg-gray/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      style={{ '--animation-delay': `${index * 0.4}s` } as React.CSSProperties}
    >
      <div className="mb-4">
        <StarRating rating={rating} />
      </div>
      
      <p className="text-foreground italic mb-6 text-lg leading-relaxed">&quot;{content}&quot;</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-laser-color-1 to-laser-color-3 mr-4">
          <span className="text-white font-semibold text-lg">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-accent-light">{name}</h4>
          <p className="text-sm text-foreground/70">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function ReviewsSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.5 });
  const principlesRef = useRef(null);
  const isPrinciplesInView = useInView(principlesRef, { once: true, amount: 0.3 });
  
  // Sample reviews data
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      content: "The animation features have completely transformed our user interface. Our app feels alive now, and user engagement has increased by 42% since implementation!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "UX Developer",
      content: "I've tried many animation libraries, but AnimX strikes the perfect balance between performance and visual impact. The cursor effects are particularly impressive.",
      rating: 5
    },
    {
      name: "Olivia Rodriguez",
      role: "Creative Director",
      content: "Our clients are blown away by the smooth transitions and creative animations we've implemented using AnimX. It's become our secret weapon for winning pitches.",
      rating: 4
    },
    {
      name: "James Wilson",
      role: "Frontend Engineer",
      content: "The documentation is excellent, and the modular approach makes it easy to implement just what you need. Performance optimization is clearly a priority.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "UI Designer",
      content: "The neon effects and laser animations have given our dark mode a futuristic feel that users absolutely love. It's subtle yet impactful.",
      rating: 4
    },
    {
      name: "David Thompson",
      role: "Startup Founder",
      content: "We implemented AnimX for our landing page and saw conversion rates improve by 28%. The engaging animations keep visitors on the page longer!",
      rating: 5
    }
  ];

  // Key principles that highlight our focus areas
  const principles = [
    {
      title: "User Experience",
      description: "Intuitive navigation and flow that guides users naturally through digital experiences",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      title: "Visual Design",
      description: "Aesthetics and brand consistency that create memorable, cohesive experiences",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Originality",
      description: "Innovative approaches and unique solutions that set your product apart",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Presentation",
      description: "Quality implementation that showcases attention to detail",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray/5">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What <span className="text-accent-light neon-glow inline-block">Clients</span> Say</h2>
            <p className="text-foreground/80 max-w-xl mx-auto">See how AnimX has transformed digital experiences for our clients across industries.</p>
          </motion.div>
          
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-laser-color-1 via-laser-color-2 to-laser-color-3 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              role={review.role}
              content={review.content}
              rating={review.rating}
              index={index}
            />
          ))}
        </div>
        
        {/* Key Principles Section */}
        <div ref={principlesRef} className="mt-32 mb-16">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isPrinciplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="slimy-text text-accent-light neon-glow inline-block" data-text="Principles">Principles</span></h2>
            <p className="text-foreground/80 max-w-xl mx-auto">The core philosophies that guide our animation framework and ensure exceptional digital experiences.</p>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-laser-color-1 via-laser-color-2 to-laser-color-3 mx-auto mt-8 rounded-full"
              initial={{ width: 0 }}
              animate={isPrinciplesInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="bg-gray/10 backdrop-blur-sm p-6 rounded-2xl neon-border"
                initial={{ opacity: 0, y: 50 }}
                animate={isPrinciplesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                style={{ '--animation-delay': `${index * 0.3}s` } as React.CSSProperties}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gray/20 flex items-center justify-center mb-5 text-accent-light">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-accent-light">{principle.title}</h3>
                  <p className="text-foreground/80">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 