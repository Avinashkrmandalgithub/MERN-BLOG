// src/pages/general/HomePage.jsx
import React from "react";
import Navbar from "../../components/Navbar.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import FeaturedStory from "../../components/FeaturedStory.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import StoryList from "../../components/StoryList.jsx";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />

      <main className="max-w-7xl mx-auto px-6 mt-10">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <FeaturedStory />
            <StoryList />
          </div>

          {/* Sidebar */}
          <Sidebar />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
