"use client";

import { motion } from "framer-motion";
import { SparklesIcon, ShieldCheckIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: SparklesIcon,
    title: "Exquisite Variety",
    description: "Choose from a wide range of rare and beautiful fish.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trusted Quality",
    description: "We guarantee healthy, high-quality fish for your aquarium.",
  },
  {
    icon: GlobeAltIcon,
    title: "Worldwide Shipping",
    description: "Delivering our exquisite fish to your doorstep, anywhere in the world.",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-bold text-aqua-dark"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose AquaWorld?
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600">
          We bring the underwater world closer to you with unmatched quality and variety.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-aqua-light rounded-lg shadow-lg text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <feature.icon className="w-12 h-12 text-aqua-dark mb-4" />
              <h3 className="text-xl font-bold text-aqua-dark">{feature.title}</h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
