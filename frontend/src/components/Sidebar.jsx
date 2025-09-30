// src/components/Sidebar.js
import React from "react";
import TrendingWidget from "./widgets/TrendingWidget.jsx";
import NewsletterWidget from "./widgets/NewsletterWidget.jsx";
import TagsWidget from "./widgets/TagsWidget.jsx";
import FollowUsWidget from "./widgets/FollowUsWidget.jsx";

const Sidebar = () => {
  return (
    <aside className="space-y-8">
      <TrendingWidget />
      <NewsletterWidget />
      <TagsWidget />
      <FollowUsWidget />
    </aside>
  );
};

export default Sidebar;
