// src/components/StoryList.js
import React from "react";
import StoryCard from "./StoryCard.jsx";

const StoryList = () => {
  const articles = [
    {
      image: "https://i0.wp.com/wbmfg.com/wp-content/uploads/2023/09/Cozy-Reading-Nook-Blog-Post-Feature-Image.jpg?resize=1080%2C628&quality=89&ssl=1",
      tags: ["Lifestyle", "Interior Design", "Reading"],
      title: "Building a Cozy Reading Corner: Design Tips",
      author: { name: "Sarah Chen", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
      stats: { likes: 156, comments: 29 },
    },
    {
      image: "https://uploads.keitaro.com/uploads/2024/06/exploring-modern-javascript-frameworks-1.png",
      tags: ["JavaScript", "React", "Vue"],
      title: "Modern JavaScript Frameworks Comparison",
      author: { name: "Marcus Johnson", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
      stats: { likes: 423, comments: 87 },
    },
    {
      image: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/05/surreal-faces-in-minimalist-illustration.jpg?w=1250&h=1120&crop=1",
      tags: ["Design", "Minimalism", "UI"],
      title: "The Art of Minimalist Design",
      author: { name: "Elena Rodriguez", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
      stats: { likes: 298, comments: 34 },
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMaP2Em2C9yCXMsbcMtmBEvs_TQRwjSBrkg&s",
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
