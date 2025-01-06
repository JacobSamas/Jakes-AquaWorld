"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-aqua-light h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/hero.webp"
        alt="Underwater Background"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-aqua-dark bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to AquaWorld
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover the most exquisite fish for your aquarium.
        </motion.p>
        <motion.button
          className="mt-8 px-6 py-3 bg-sand text-aqua-dark font-medium rounded-lg shadow-lg hover:bg-sand-light transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
