'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [trail, setTrail] = useState<{ x: number, y: number }[]>([]);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const maxTrailLength = 40; // Increase trail length for more pronounced curve effect

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const mouseOverHandler = (event: MouseEvent) => {
      // Check if the cursor is over a clickable element
      const target = event.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.onclick !== null ||
        target.closest('a, button, [role="button"]') !== null;
      
      setIsPointer(isClickable);
    };

    const mouseLeaveHandler = () => {
      setIsHidden(true);
    };

    const mouseEnterHandler = () => {
      setIsHidden(false);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseover', mouseOverHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseover', mouseOverHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Animation loop for the trail effect
  const animate = (time: number) => {
    if (previousTimeRef.current !== null) {
      // Add current position to trail
      setTrail(prevTrail => {
        const newTrail = [position, ...prevTrail].slice(0, maxTrailLength);
        return newTrail;
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position]);

  return (
    <>
      {/* Laser line trail effect */}
      {trail.length > 1 && trail.slice(0, -1).map((point, index) => {
        if (index >= trail.length - 1) return null;
        
        const nextPoint = trail[index + 1];
        const dx = nextPoint.x - point.x;
        const dy = nextPoint.y - point.y;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Calculate opacity based on position in the trail
        const trailOpacity = 1 - (index / maxTrailLength) * 0.7; // Reduced opacity fading for better visibility
        
        // Determine color based on position in trail (yellow > green > purple)
        let color;
        if (index < maxTrailLength / 3) {
          color = 'var(--laser-color-1)'; // Yellow - first part
        } else if (index < (maxTrailLength * 2) / 3) {
          color = 'var(--laser-color-2)'; // Green - middle part
        } else {
          color = 'var(--laser-color-3)'; // Purple - end part
        }
        
        // Skip rendering if too small or invisible
        if (distance < 1 || trailOpacity <= 0) return null;
        
        // Make the trail thicker for better visibility against dark background
        const thickness = Math.min(6, 3 + (1 - index / maxTrailLength) * 5);
        
        return (
          <motion.div
            key={index}
            className="laser-trail-segment hidden md:block pointer-events-none"
            style={{
              position: 'fixed',
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: `${distance}px`,
              height: `${thickness}px`,
              opacity: trailOpacity,
              background: color,
              boxShadow: `0 0 12px 3px ${color}`,
              transform: `rotate(${angle}deg)`,
              transformOrigin: '0 50%',
              zIndex: 9998 - index,
              mixBlendMode: 'lighten',
              borderRadius: '4px'
            }}
          />
        );
      })}
      
      {/* Main cursor */}
      <motion.div
        className="custom-cursor neon-glow hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '24px',
          height: '24px',
          background: 'var(--laser-color-1)',
          boxShadow: '0 0 15px var(--laser-color-1), 0 0 25px var(--laser-color-1)'
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  );
} 