"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            <Link href="/" className="hover:text-aqua-light">
              Home
            </Link>
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
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
            <Link href="/" className="block hover:text-aqua-light">
              Home
            </Link>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
