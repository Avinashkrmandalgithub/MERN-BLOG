// src/components/StoryList.js
import React from "react";
import StoryCard from "./StoryCard.jsx";

const StoryList = () => {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1512163143279-df832360b736?q=80&w=1974&auto=format&fit=crop",
      tags: ["Lifestyle", "Interior Design", "Reading"],
      title: "Building a Cozy Reading Corner: Design Tips",
      author: { name: "Sarah Chen", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
      stats: { likes: 156, comments: 29 },
    },
    {
      image: "https://images.unsplash.com/photo-1610337673044-720471f82a77?q=80&w=2070&auto=format&fit=crop",
      tags: ["JavaScript", "React", "Vue"],
      title: "Modern JavaScript Frameworks Comparison",
      author: { name: "Marcus Johnson", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
      stats: { likes: 423, comments: 87 },
    },
    {
      image: "https://images.unsplash.com/photo-1555940280-66e41a4a424a?q=80&w=2070&auto=format&fit=crop",
      tags: ["Design", "Minimalism", "UI"],
      title: "The Art of Minimalist Design",
      author: { name: "Elena Rodriguez", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
      stats: { likes: 298, comments: 34 },
    },
    {
      image: "https://images.unsplash.com/photo-1674027444485-a940e4d12179?q=80&w=2070&auto=format&fit=crop",
      tags: ["AI", "Writing", "Creativity"],
      title: "AI and Creative Writing: The Perfect Partnership",
      author: { name: "Elena Rodriguez", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
      stats: { likes: 267, comments: 42 },
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, idx) => (
          <StoryCard key={idx} article={article} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default StoryList;
