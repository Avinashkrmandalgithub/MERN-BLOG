// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
      {/* Top Row: Brand, Nav, Social */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Brand */}
        <h2 className="text-xl font-bold text-orange-600">BlogSpace</h2>

        {/* Nav Links */}
        <ul className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
          <li>
            <Link to="/posts" className="hover:text-orange-600">
              Posts
            </Link>
          </li>
          <li>
            <Link to="/categories" className="hover:text-orange-600">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0 text-gray-600 dark:text-gray-400">
          <a href="#">
            <Twitter className="w-5 h-5 hover:text-orange-600" />
          </a>
          <a href="#">
            <Github className="w-5 h-5 hover:text-orange-600" />
          </a>
          <a href="#">
            <Linkedin className="w-5 h-5 hover:text-orange-600" />
          </a>
          <a href="#">
            <Instagram className="w-5 h-5 hover:text-orange-600" />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} BlogSpace — Crafted with ❤ & ☕
      </div>
    </footer>
  );
};

export default Footer;
