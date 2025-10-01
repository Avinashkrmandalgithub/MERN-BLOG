// src/pages/general/AboutPage.jsx
import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-600">
            About BlogSpace
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Welcome to BlogSpace, your cozy corner of the internet. Explore amazing stories, share your thoughts, and connect with writers from around the world.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed sm:text-lg">
              Our mission is to create a community where creativity thrives, ideas flow freely, and everyone can find a story that resonates with them.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
            alt="Mission"
            className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Values Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">Creativity</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              We nurture creativity and encourage unique voices to shine.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">Community</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              Building a supportive and inspiring space for readers and writers alike.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold text-orange-600 mb-2">Inspiration</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              Encouraging storytelling that sparks imagination and ideas.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
