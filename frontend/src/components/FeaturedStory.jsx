// src/components/FeaturedStory.js
import React from "react";

const FeaturedStory = () => {
  const tags = ["Web Development", "Future Tech", "JavaScript"];
  return (
    <div className="mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden lg:flex hover:shadow-lg transition-shadow">
        <div className="lg:w-1/2">
          <img
            className="h-64 w-full lg:h-full object-cover"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
            alt="Laptop with code on screen"
          />
        </div>

        <div className="p-8 lg:w-1/2 flex flex-col justify-center">
          <div className="flex items-center mb-4 flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  idx % 3 === 0
                    ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200"
                    : idx % 3 === 1
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            The Future of Web Development: Trends to Watch in 2024
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Explore the latest technologies and frameworks shaping the future of web development, from AI integration to new frontend paradigms.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Marcus Johnson"
              />
              <div className="text-sm text-gray-800 dark:text-gray-200">
                <p className="font-semibold">Marcus Johnson</p>
                <p className="text-gray-500 dark:text-gray-400">Dec 17, 2024 · 7 min read</p>
              </div>
            </div>

            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <div className="flex items-center mr-4">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span>189</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;
