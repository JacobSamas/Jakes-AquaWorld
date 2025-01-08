"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Get cart item count from Redux
  const cartItemCount = useSelector((state) => state.cart.items.length);

  // Check authentication state on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // If token exists, user is logged in
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    setIsLoggedIn(false);
    window.location.href = "/"; // Redirect to home after logout
  };

  return (
    <nav className="bg-aqua-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              AquaWorld
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/about" className="hover:text-aqua-light">
              About
            </Link>
            <Link href="/shop" className="hover:text-aqua-light">
              Shop
            </Link>
            <Link href="/contact" className="hover:text-aqua-light">
              Contact
            </Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hover:text-aqua-light focus:outline-none"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="hover:text-aqua-light">
                Login
              </Link>
            )}
            {/* Cart Icon */}
            <Link href="/cart" className="relative hover:text-aqua-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18l-2.25 9H5.25L3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 21a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-aqua-light focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-aqua-dark">
          <div className="space-y-2 px-4 pt-2 pb-4">
            <Link href="/about" className="block hover:text-aqua-light">
              About
            </Link>
            <Link href="/shop" className="block hover:text-aqua-light">
              Shop
            </Link>
            <Link href="/contact" className="block hover:text-aqua-light">
              Contact
            </Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left hover:text-aqua-light"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="block hover:text-aqua-light">
                Login
              </Link>
            )}
            {/* Mobile Cart Icon */}
            <Link href="/cart" className="block hover:text-aqua-light">
              Cart {cartItemCount > 0 && `(${cartItemCount})`}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
