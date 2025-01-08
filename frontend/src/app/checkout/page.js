"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const CheckoutPage = () => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.address) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    // Navigate to Thank You Page
    router.push("/thank-you");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
          <button
            onClick={() => router.push("/shop")}
            className="mt-4 px-4 py-2 bg-aqua-dark text-white rounded hover:bg-aqua-light"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

        {/* Cart Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} ({item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Form */}
        <form onSubmit={handlePlaceOrder}>
          <div className="mb-6">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-aqua-dark focus:border-aqua-dark"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-aqua-dark focus:border-aqua-dark"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block font-medium mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-aqua-dark focus:border-aqua-dark"
              placeholder="Your Address"
              required
            />
          </div>

          {/* Place Order Button */}
          <button
            type="submit"
            className="w-full bg-aqua-dark text-white py-3 rounded-lg font-bold shadow-md hover:bg-aqua-light"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
