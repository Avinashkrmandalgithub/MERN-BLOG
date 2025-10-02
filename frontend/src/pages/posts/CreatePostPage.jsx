// src/pages/posts/CreatePostPage.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handlePublish = (e) => {
    e.preventDefault();
    // TODO: Implement API call to create post with image
    console.log({ title, category, content, image });
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-8 text-center sm:text-left">
          Create a New Post
        </h1>

        <form className="space-y-6" onSubmit={handlePublish}>
          {/* Post Title */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition"
            required
          />

          {/* Category */}
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition"
            required
          />

          {/* Content */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your content here..."
            className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition h-60 resize-none"
            required
          ></textarea>

          {/* Image Upload */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <label className="w-full sm:w-32 font-semibold text-gray-700 dark:text-gray-300">
              Upload Image:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full sm:w-auto px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          {/* Image Preview */}
          {image && (
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-400 mb-2">Preview:</p>
              <img
                src={image}
                alt="Preview"
                className="w-full max-h-64 object-cover rounded-xl shadow-md"
              />
            </div>
          )}

          {/* Publish Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold text-lg transition"
          >
            Publish Post
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default CreatePostPage;
