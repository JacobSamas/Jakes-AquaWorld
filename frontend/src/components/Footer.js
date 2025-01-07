"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-aqua-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-aqua-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-aqua-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-aqua-light">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-aqua-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="hover:text-aqua-light">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-aqua-light">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-aqua-light">
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: support@aquaworld.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Ocean Ave, Aqua City</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-600 pt-4">
          <p>&copy; {new Date().getFullYear()} AquaWorld. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
