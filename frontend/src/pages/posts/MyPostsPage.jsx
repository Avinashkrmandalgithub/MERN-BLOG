// src/pages/user/MyPostsPage.jsx
import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "My First Blog Post", date: "2025-10-01", category: "Technology" },
  { id: 2, title: "A Day in Nature", date: "2025-09-25", category: "Travel" },
  { id: 3, title: "Healthy Eating Tips", date: "2025-09-20", category: "Health" },
];

const MyPostsPage = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-8">My Posts</h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 flex justify-between items-center border border-gray-200 dark:border-gray-700"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{post.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {post.category} | {post.date}
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  to={`/edit-post/${post.id}`}
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition"
                >
                  Edit
                </Link>
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyPostsPage;
