"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Rivera",
    review:
      "AquaWorld transformed my aquarium into a vibrant underwater paradise. The fish are healthy, and the variety is incredible!",
    location: "New York, USA",
  },
  {
    name: "Liam Smith",
    review:
      "I’ve never been so satisfied with an online aquarium store. Fast delivery, great support, and stunning fish!",
    location: "London, UK",
  },
  {
    name: "Emma Tanaka",
    review:
      "Their customer service is top-notch, and the fish arrived in perfect condition. Highly recommend AquaWorld!",
    location: "Tokyo, Japan",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-aqua-light py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-aqua-dark"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <p className="text-lg text-gray-700 italic">&quot;{testimonial.review}&quot;</p>
              <h3 className="mt-4 text-xl font-bold text-aqua-dark">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
