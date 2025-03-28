'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    formSubmitted: false,
    formError: false,
    submitting: false,
  });

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        formSubmitted: true, 
        submitting: false,
        // Reset form fields after submission
        name: '',
        email: '',
        message: ''
      }));
    }, 1500);
  };

  // Staggered animation for form elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-secondary/10 blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-laser-color-3/10 blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Get In <span className="text-accent-light neon-glow inline-block">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-foreground max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind? Reach out to us and let's create something amazing together.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <motion.div
              ref={containerRef}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-2 text-accent-light">Contact Information</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-laser-color-1 via-laser-color-2 to-laser-color-3 rounded-full"></div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-accent/10 text-accent rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-dark">+1 (123) 456-7890</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-laser-color-2/20 text-laser-color-2 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">Email</h4>
                  <p className="text-foreground/80">info@animx.example</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-laser-color-3/20 text-laser-color-3 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-foreground">Location</h4>
                  <p className="text-foreground/80">123 Animation Street, Digital City</p>
                </div>
              </motion.div>
              
              {/* Social links */}
              <motion.div variants={itemVariants} className="pt-4">
                <h4 className="font-medium mb-3">Connect with us</h4>
                <div className="flex space-x-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="bg-background text-foreground hover:text-accent p-3 rounded-full shadow-md transition-colors duration-300 neon-glow"
                      whileHover={{ scale: 1.1, backgroundColor: 'var(--laser-color-2)', color: 'white' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="neon-border bg-gray/10 rounded-2xl shadow-2xl backdrop-blur-sm p-6 md:p-8"
              style={{ '--animation-delay': '0.2s' }}
            >
              {formState.formSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-laser-color-2/20 text-laser-color-2 mb-6 neon-glow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Message Sent!</h3>
                  <p className="text-foreground/80">We'll get back to you as soon as possible.</p>
                  <motion.button
                    className="mt-6 px-6 py-2 bg-gradient-to-r from-laser-color-1 via-laser-color-2 to-laser-color-3 text-white rounded-full font-medium shadow-lg shadow-accent/20"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 0 20px 5px rgba(var(--accent-rgb), 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFormState(prev => ({ ...prev, formSubmitted: false }))}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <motion.div variants={itemVariants} className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Your Name</label>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray/30 focus:outline-none focus:ring-2 focus:ring-laser-color-2/50 focus:border-laser-color-2/50 transition-all duration-300 bg-gray/20 text-foreground placeholder-foreground/50"
                        placeholder="John Doe"
                        required
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email Address</label>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray/30 focus:outline-none focus:ring-2 focus:ring-laser-color-2/50 focus:border-laser-color-2/50 transition-all duration-300 bg-gray/20 text-foreground placeholder-foreground/50"
                        placeholder="john@example.com"
                        required
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Your Message</label>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      whileFocus={{ scale: 1.01 }}
                    >
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray/30 focus:outline-none focus:ring-2 focus:ring-laser-color-2/50 focus:border-laser-color-2/50 transition-all duration-300 resize-none bg-gray/20 text-foreground placeholder-foreground/50"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-laser-color-1 via-laser-color-2 to-laser-color-3 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-accent/20"
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: '0 0 20px 5px rgba(var(--accent-rgb), 0.3)',
                        background: 'linear-gradient(to right, var(--laser-color-3), var(--laser-color-2), var(--laser-color-1))'
                      }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formState.submitting}
                    >
                      {formState.submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 