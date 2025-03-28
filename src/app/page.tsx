'use client';

import React, { useEffect, useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ReviewsSection from '@/components/ReviewsSection';
import InteractiveShowcase from '@/components/InteractiveShowcase';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating page loading for animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Extended for the new animation to be appreciated

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Custom cursor for desktop */}
      <CustomCursor />

      {/* Page loading animation */}
      {isLoading && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden">
          <div className="relative w-40 h-40">
            {/* Animated blobs */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-laser-color-1/30 rounded-full filter blur-md animate-blob"></div>
              <div className="absolute w-24 h-24 bg-laser-color-2/30 rounded-full filter blur-md animate-blob animation-delay-2000"></div>
              <div className="absolute w-24 h-24 bg-laser-color-3/30 rounded-full filter blur-md animate-blob animation-delay-4000"></div>
              
              {/* Spinner ring */}
              <div className="absolute inset-0 rounded-full border-4 border-t-laser-color-1 border-r-laser-color-2 border-b-laser-color-3 border-l-laser-color-2 animate-spin"></div>
              
              {/* Logo */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.1, 1],
                  opacity: [0, 1, 1]
                }}
                transition={{ 
                  duration: 1.2,
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
              >
                <div className="text-2xl font-bold text-accent-light neon-glow">
                  AnimX
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div 
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } relative`}
        style={{
          background: 'linear-gradient(180deg, var(--background) 0%, var(--background) 90%, rgba(10, 16, 34, 0.9) 100%)'
        }}
      >
        {/* Background gradient mesh */}
        <div className="fixed inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full bg-laser-color-1/20 blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <FeaturesSection />
            <InteractiveShowcase />
            <ReviewsSection />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
