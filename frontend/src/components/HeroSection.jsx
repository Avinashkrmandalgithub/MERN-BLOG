import React from "react";
import heroImage from "../assets/Hero.png"; 
import Badge from "./Badge.jsx";
import CTAButtons from "./CTAButtons.jsx";
import Stats from "./Stats.jsx";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <Badge text="Welcome to BlogSpace" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-6">
            Where stories{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              come alive
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            Discover amazing stories, share your thoughts, and connect with writers from around the world. 
            Your cozy corner of the internet awaits.
          </p>
          <CTAButtons />
          <Stats />
        </div>

        {/* Right Column */}
        <div className="flex justify-center lg:justify-end">
          <img 
            src={heroImage} 
            alt="Person reading a book on a couch"
            className="w-full max-w-md lg:max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
