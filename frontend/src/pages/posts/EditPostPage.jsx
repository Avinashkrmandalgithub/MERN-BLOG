// src/pages/posts/EditPostPage.jsx
import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const EditPostPage = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-6">Edit Post</h1>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Post Title"
            defaultValue="My First Blog Post"
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition"
          />
          <input
            type="text"
            placeholder="Category"
            defaultValue="Technology"
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition"
          />
          <textarea
            placeholder="Write your content here..."
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition h-60 resize-none"
          ></textarea>
          <div className="flex gap-4">
            <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold text-lg transition">
              Save Changes
            </button>
            <button className="flex-1 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-3 rounded-xl font-semibold transition">
              Cancel
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default EditPostPage;
