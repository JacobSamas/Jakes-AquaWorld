"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import Link from "next/link";

const FishDetailPage = ({ params }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = params;

  const [fish, setFish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedFish, setRelatedFish] = useState([]);

  useEffect(() => {
    const fetchFishDetail = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/fish/${id}`);
        if (!response.ok) throw new Error("Failed to fetch fish details");
        const data = await response.json();
        setFish(data.fish);

        const relatedResponse = await fetch("http://localhost:5001/api/fish");
        const relatedData = await relatedResponse.json();
        setRelatedFish(
          relatedData.fish.filter((item) => item.id !== Number(id)).slice(0, 4)
        );

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Unable to load fish details. Please try again.");
        setLoading(false);
      }
    };

    fetchFishDetail();
  }, [id]);

  const handleAddToCart = () => {
    if (fish) {
      dispatch(
        addToCart({
          id: fish.id,
          name: fish.name,
          price: fish.price,
          quantity: 1,
          image: fish.image,
        })
      );
    }
  };

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (error) {
    return (
      <div className="text-center mt-20 text-red-500">
        <p>{error}</p>
        <button
          onClick={() => router.push("/shop")}
          className="mt-4 px-4 py-2 bg-aqua-dark text-white rounded-lg hover:bg-aqua-light"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-aqua-light to-aqua-dark text-white">
      <div className="max-w-6xl mx-auto py-12 px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold">{fish.name}</h1>
          <p className="text-lg mt-2">Species: {fish.species || "Unknown"}</p>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <motion.img
            src={fish.image || "/images/default-fish.jpg"}
            alt={fish.name}
            className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Details */}
          <div className="flex-1">
            <p className="text-lg mb-4">
              <strong>Description:</strong> {fish.description || "No description available."}
            </p>
            <p className="text-lg mb-4">
              <strong>Price:</strong> ${Number(fish.price || 0).toFixed(2)}
            </p>
            <p className="text-lg mb-4">
              <strong>Habitat:</strong> Tropical waters (example placeholder)
            </p>
            <p className="text-lg mb-4">
              <strong>Diet:</strong> Omnivorous (example placeholder)
            </p>
            <button
              onClick={handleAddToCart}
              className="mt-4 px-6 py-2 bg-white text-aqua-dark font-semibold rounded-lg shadow-lg hover:bg-gray-200"
            >
              Add to Cart
            </button>
          </div>
        </motion.div>

        {/* Related Fish Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedFish.map((item) => (
              <Link
                href={`/shop/${item.id}`}
                key={item.id}
                className="bg-white text-aqua-dark rounded-lg p-4 hover:shadow-lg transition"
              >
                <img
                  src={item.image || "/images/default-fish.jpg"}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>${Number(item.price || 0).toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Back to Shop Button */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block px-6 py-2 bg-white text-aqua-dark font-semibold rounded-lg shadow-lg hover:bg-gray-200"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FishDetailPage;
