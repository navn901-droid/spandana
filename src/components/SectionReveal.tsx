import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  id?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 35,
  className = '',
  id,
  viewportMargin = '-60px',
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth cinematic curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
