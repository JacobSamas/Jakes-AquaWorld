"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-aqua-light to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-aqua-dark text-center py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About AquaWorld
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Dive into the world of vibrant aquatic life and expert care.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              At AquaWorld, our mission is to bring the beauty of aquatic life
              to your home while promoting sustainable practices.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the leading provider of rare and vibrant aquatic species
              while educating enthusiasts worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unique Offerings Section */}
      <section className="bg-aqua-dark py-16 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose AquaWorld?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <motion.div
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Image
                src="/images/rare-fish.jpg"
                alt="Rare Fish"
                width={100}
                height={100}
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Rare Fish</h3>
              <p>
                Access a curated selection of unique and rare aquatic species
                from around the globe.
              </p>
            </motion.div>
            <motion.div
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Image
                src="/images/care-tips.jpg"
                alt="Care Tips"
                width={100}
                height={100}
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Expert Care Tips</h3>
              <p>
                Learn how to create the perfect environment for your aquatic
                friends with our expert advice.
              </p>
            </motion.div>
            <motion.div
              className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Image
                src="/images/sustainability.jpg"
                alt="Sustainability"
                width={100}
                height={100}
                className="w-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p>
                We prioritize sustainable practices to ensure a thriving future
                for aquatic ecosystems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <Link
          href="/shop"
          className="px-8 py-4 bg-aqua-light text-gray-900 font-bold text-lg rounded-lg shadow-lg hover:bg-aqua-dark hover:text-white transition"
        >
          Explore Our Collection
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
