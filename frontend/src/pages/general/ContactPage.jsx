// src/pages/general/ContactPage.jsx
import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const ContactPage = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-6">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Have a question or suggestion? Send us a message!</p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition resize-none h-40"
          ></textarea>
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold text-lg transition">
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
