// src/components/widgets/NewsletterWidget.js
import React from "react";

const NewsletterWidget = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-bold mb-2">💌 Stay Updated</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Get the latest stories delivered to your inbox weekly.</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      />
      <button className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">
        Subscribe
      </button>
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">No spam, unsubscribe anytime.</p>
    </div>
  );
};

export default NewsletterWidget;
