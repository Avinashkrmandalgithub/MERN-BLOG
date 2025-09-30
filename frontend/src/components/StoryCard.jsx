// src/components/StoryCard.js
import React from "react";

const StoryCard = ({ article }) => {
  const { image, tags, title, author, stats } = article;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      <img className="h-48 w-full object-cover" src={image} alt={title} />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-3 flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex-grow">{title}</h3>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-3" src={author.avatar} alt={`Avatar of ${author.name}`} />
            <div className="text-sm text-gray-800 dark:text-gray-200">
              <p className="font-semibold">{author.name}</p>
              <p className="text-gray-500 dark:text-gray-400">Dec 16, 2024 · 6 min read</p>
            </div>
          </div>

          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <div className="flex items-center mr-3">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <span>{stats.likes}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span>{stats.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
