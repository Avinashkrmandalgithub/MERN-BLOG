import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import HomePage from "./pages/general/HomePage.jsx";
import AboutPage from "./pages/general/AboutPage.jsx";
import ContactPage from "./pages/general/ContactPage.jsx";
import CategoriesPage from "./pages/general/CategoriesPage.jsx";

import LoginPage from "./pages/auth/LoginPage.jsx";
import SignUpPage from "./pages/auth/SignUpPage.jsx";

import CreatePostPage from "./pages/posts/CreatePostPage.jsx";
import EditPostPage from "./pages/posts/EditPostPage.jsx";
import MyPostsPage from "./pages/user/MyPostsPage.jsx";
import ProfilePage from "./pages/user/ProfilePage.jsx";
import PostPage from "./pages/posts/PostPage.jsx";

const App = () => {
  return (

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/categories" element={<CategoriesPage />} />

        {/* Temporarily make all pages accessible */}
        <Route path="/post/:id" element={ <PostPage /> } />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/edit-post/:id" element={<EditPostPage />} />
        <Route path="/my-posts" element={<MyPostsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Catch-all redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

  );
};

export default App;
