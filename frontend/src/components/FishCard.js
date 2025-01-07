"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const FishCard = ({ fish }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <motion.img
        src={fish.image}
        alt={fish.name}
        className="w-full h-40 object-cover rounded-md"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Name */}
      <motion.h3
        className="mt-4 text-xl font-bold text-aqua-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {fish.name}
      </motion.h3>

      {/* Price */}
      <motion.p
        className="text-lg text-gray-700 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        ${Number(fish.price || 0).toFixed(2)}
      </motion.p>

      {/* View Details Button */}
      <Link
        href={`/shop/${fish.id}`}
        className="inline-block mt-4 px-6 py-2 bg-aqua-dark text-white rounded-lg hover:bg-aqua-light"
      >
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          View Details
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default FishCard;
