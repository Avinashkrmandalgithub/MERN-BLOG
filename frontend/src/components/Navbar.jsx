// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, Bell, User, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme on mount and when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <nav
          className="flex justify-between items-center h-20"
          role="navigation"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-orange-500 transition-colors"
          >
            BlogSpace
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive
                        ? "font-semibold text-gray-900 dark:text-white"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar (hidden on mobile) */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-9 pr-3 py-2 w-48 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
              />
            </div>

            {/* Icons */}
            <button
              aria-label="Notifications"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              aria-label="User Profile"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-600" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>

            {/* CTA */}
            <Link
              to="/write"
              className="hidden md:inline-block bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              Write
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X
                  className={`w-6 h-6 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg shadow-md p-4 space-y-4">
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    end
                    className={({ isActive }) =>
                      `block transition-colors ${
                        isActive
                          ? "font-semibold text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/write"
              className="block text-center bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Write
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
