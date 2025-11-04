'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export default function Button({ children, onClick, href, target, rel, className = '' }: ButtonProps) {
  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        target={target}
        rel={rel}
        className={`inline-block px-6 py-2 rounded border border-white bg-black text-white transition-colors hover:bg-white hover:text-black ${className}`}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-6 py-2 rounded border border-white bg-black text-white transition-colors hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </motion.button>
  );
}
