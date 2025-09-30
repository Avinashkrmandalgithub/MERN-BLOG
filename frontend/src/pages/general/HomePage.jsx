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
      {/* Navbar */}
      <Navbar />

      <HeroSection />
      <main className="pt-20 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        
        {/* Main Content + Sidebar */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Featured Stories */}
          <div className="lg:col-span-2 space-y-10">
            <FeaturedStory />
            {/* Add more stories here later */}
            <StoryList />
          </div>

          {/* Right: Sidebar */}
          <Sidebar />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
