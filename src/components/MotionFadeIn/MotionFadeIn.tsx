'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ComponentProps, ReactNode } from 'react';

interface MotionFadeInProps extends Omit<ComponentProps<typeof motion.div>, 'initial' | 'animate' | 'whileInView' | 'transition'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
  amount?: number;
}

function MotionFadeIn({ children, delay = 0, duration = 0.5, yOffset = 20, once = true, amount = 0.2, ...rest }: MotionFadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset };
  const whileInView = { opacity: 1, y: 0 };
  const transition = prefersReducedMotion ? { duration: 0 } : { duration, delay, ease: 'easeOut' as const };

  return (
    <motion.div initial={initial} transition={transition} viewport={{ once, amount }} whileInView={whileInView} {...rest}>
      {children}
    </motion.div>
  );
}

export default MotionFadeIn;
