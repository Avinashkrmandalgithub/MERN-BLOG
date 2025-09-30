// src/components/widgets/TrendingWidget.js
import React from "react";

const TrendingWidget = () => {
  const trendingPosts = [
    { title: "The Future of Web Development", author: "Sarah Chen", views: "12.5K views", time: "5 min" },
    { title: "Designing for Accessibility", author: "Marcus Johnson", views: "9.2K views", time: "8 min" },
    { title: "AI and Creative Writing", author: "Elena Rodriguez", views: "15.1K views", time: "6 min" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-bold mb-4">🔥 Trending</h3>
      <div className="space-y-4">
        {trendingPosts.map((post, idx) => (
          <div key={idx} className={idx !== trendingPosts.length - 1 ? "pb-4 border-b border-gray-100 dark:border-gray-700" : ""}>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{post.title}</h4>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{post.author}</span>
              <span>{post.views} &middot; {post.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingWidget;
