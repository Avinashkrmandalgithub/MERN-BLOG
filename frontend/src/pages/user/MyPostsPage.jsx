import React, { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";
import { Heart, MessageSquare } from "lucide-react";

const initialPosts = [
  {
    id: 1,
    title: "My First Blog Post",
    date: "2025-10-01",
    category: "Technology",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ3CSrq7bFOspefpqrR2SXCDNvgULrJNC4ow&s",
    likes: 12,
    comments: [
      { id: 1, author: "Alice", avatar: "https://i.pravatar.cc/40?img=1", text: "Great post!" },
      { id: 2, author: "Bob", avatar: "https://i.pravatar.cc/40?img=2", text: "Loved it!" },
      { id: 3, author: "Eve", avatar: "https://i.pravatar.cc/40?img=8", text: "Awesome!" },
    ],
    author: { name: "John Doe", avatar: "https://i.pravatar.cc/40?img=5" },
  },
  {
    id: 2,
    title: "A Day in Nature",
    date: "2025-09-25",
    category: "Travel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWR51KoPIpYk5jqKaVEEyiSrSY7GxZywChZQ&s",
    likes: 8,
    comments: [
      { id: 1, author: "Charlie", avatar: "https://i.pravatar.cc/40?img=3", text: "Amazing photos!" },
    ],
    author: { name: "Jane Smith", avatar: "https://i.pravatar.cc/40?img=6" },
  },
  {
    id: 3,
    title: "Healthy Eating Tips",
    date: "2025-09-20",
    category: "Health",
    image: "https://via.placeholder.com/400x400",
    likes: 15,
    comments: [
      { id: 1, author: "Dana", avatar: "https://i.pravatar.cc/40?img=4", text: "Very useful!" },
    ],
    author: { name: "Mark Lee", avatar: "https://i.pravatar.cc/40?img=7" },
  },
  {
    id: 4,
    title: "Tech Gadgets 2025",
    date: "2025-09-10",
    category: "Technology",
    image: "https://via.placeholder.com/400x400",
    likes: 20,
    comments: [
      { id: 1, author: "Sam", avatar: "https://i.pravatar.cc/40?img=9", text: "Love these gadgets!" },
    ],
    author: { name: "Anna Kim", avatar: "https://i.pravatar.cc/40?img=10" },
  },
];

const MyPostsPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [expandedComments, setExpandedComments] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter((post) => post.id !== id));
      if (expandedComments === id) setExpandedComments(null);
    }
  };

  const toggleComments = (id) => {
    setExpandedComments(expandedComments === id ? null : id);
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-12 text-center sm:text-left">
          My Posts
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`bg-white dark:bg-gray-800 rounded-3xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden transition hover:shadow-xl`}
            >
              {/* Post Image */}
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              )}

              {/* Post Info */}
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                {/* Author + Title */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-900 dark:text-white">{post.author.name}</span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.category} | {post.date}
                  </p>

                  {/* Likes & Comment Icon */}
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mt-2">
                    <div className="flex items-center gap-1">
                      <Heart size={18} className="text-red-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComments(post.id);
                      }}
                    >
                      <MessageSquare size={18} />
                      <span>{post.comments.length}</span>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedComments === post.id ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  {expandedComments === post.id &&
                    post.comments.map((c) => (
                      <div key={c.id} className="flex items-center gap-2 mb-2">
                        <img
                          src={c.avatar}
                          alt={c.author}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <p className="text-sm text-gray-700 dark:text-gray-300 truncate">
                          <span className="font-semibold">{c.author}:</span> {c.text}
                        </p>
                      </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-3">
                  <Link
                    to={`/edit-post/${post.id}`}
                    className="flex-1 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold text-center transition"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(post.id);
                    }}
                    className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition"
                  >
                    Delete
                  </button>
                </div>
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
