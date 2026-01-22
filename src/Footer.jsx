import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      
      <hr className="border-t border-gray-300" />

      <footer className="w-full text-black font-bold py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side */}
          <div className=
          "text-lg font-bold tracking-wide">
            Job Hunt
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-500 transition duration-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-sky-400 transition duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition duration-200" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;