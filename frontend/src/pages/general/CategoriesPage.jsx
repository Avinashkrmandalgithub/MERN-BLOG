// src/pages/general/CategoriesPage.jsx
import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";

const categories = ["Technology", "Lifestyle", "Health", "Travel", "Education", "Entertainment"];

const CategoriesPage = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-600">
            Explore Categories
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Browse through a wide range of topics and discover articles that inspire, educate, and entertain.
          </p>
        </section>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              to={`/category/${cat.toLowerCase()}`}
              key={cat}
              className="p-6 sm:p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition flex items-center justify-center text-center font-semibold text-gray-800 dark:text-gray-100 hover:text-orange-600 text-lg sm:text-xl"
            >
              {cat}
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoriesPage;
