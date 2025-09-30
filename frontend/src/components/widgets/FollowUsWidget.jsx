// src/components/widgets/FollowUsWidget.js
import React from "react";
import { Instagram, Twitter, Dribbble } from "lucide-react";

const FollowUsWidget = () => {
  const icons = [
    { icon: <Instagram className="w-6 h-6" />, link: "#" },
    { icon: <Twitter className="w-6 h-6" />, link: "#" },
    { icon: <Dribbble className="w-6 h-6" />, link: "#" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-bold mb-4">🔗 Follow Us</h3>
      <div className="flex items-center space-x-4">
        {icons.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FollowUsWidget;
