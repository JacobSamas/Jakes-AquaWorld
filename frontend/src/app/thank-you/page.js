"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ThankYouPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/shop"); // Automatically redirect after 10 seconds
    }, 10000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-aqua-light to-aqua-dark text-white flex items-center justify-center">
      <motion.div
        className="text-center max-w-lg mx-auto bg-white text-gray-900 p-8 rounded-lg shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4 text-aqua-dark"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          🎉 Thank You! 🎉
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Your order has been placed successfully. We’ll send you an email with
          your order details shortly.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href="/shop"
            className="bg-aqua-dark text-white px-6 py-2 rounded-lg hover:bg-aqua-light shadow-lg"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg"
          >
            Back to Home
          </Link>
        </motion.div>

        <motion.p
          className="text-sm mt-6 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Redirecting to the Shop Page in 10 seconds...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
