'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center relative z-10">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nandana P
      </motion.h1>
      <motion.h2
        className="text-xl md:text-2xl font-semibold mb-2 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Associate Software Engineer
      </motion.h2>
      <motion.p
        className="text-base md:text-lg text-gray-400 mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        I build efficient and user-friendly software solutions.
      </motion.p>
      <motion.div
        className="flex space-x-4 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <span className="inline-block animate-bounce text-2xl">⬤</span>
        <span className="inline-block animate-pulse text-2xl">◯</span>
        <span className="inline-block animate-bounce text-2xl">⬤</span>
      </motion.div>
    </section>
  );
}
