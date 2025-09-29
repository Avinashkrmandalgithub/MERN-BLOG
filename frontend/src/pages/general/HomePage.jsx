import React from "react";
import Navbar from "../../components/Navbar.jsx"; 
import HeroSection from "../../components/HeroSection.jsx";

const HomePage = () => {
  return (
    <div className="text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
};

export default HomePage;
