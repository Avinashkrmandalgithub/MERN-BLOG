// src/components/widgets/TagsWidget.js
import React from "react";

const TagsWidget = () => {
  const tags = ["JavaScript", "React", "Design", "AI", "Web Development", "UI/UX", "Programming", "Tech", "Startup", "Career"];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-bold mb-4">🏷️ Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <button
            key={idx}
            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagsWidget;
