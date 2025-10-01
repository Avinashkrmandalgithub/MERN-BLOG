// src/pages/posts/PostPage.jsx
import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const PostPage = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold text-orange-600 mb-6">Post Title</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          By Author Name | Published Date
        </p>
        <div className="prose dark:prose-invert max-w-full">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
            Cras venenatis euismod malesuada. Curabitur sit amet est in nulla hendrerit commodo.
          </p>
          <p>
            More content goes here... Images, code snippets, quotes, etc.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostPage;
