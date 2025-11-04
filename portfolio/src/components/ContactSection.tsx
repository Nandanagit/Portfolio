'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection({ children }: { children?: ReactNode }) {
  return (
    <motion.section
      className="w-full max-w-xl mx-auto mt-16 mb-8 p-8 bg-black border border-gray-800 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
