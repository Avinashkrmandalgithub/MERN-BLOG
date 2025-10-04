// App.jsx
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuthStore from "./store/useAuthStore.js";

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

import PrivateRoute from "./components/PrivateRoute.jsx";

const App = () => {
  const { getMe, user } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      getMe(); // ✅ fetch only once when app loads
    }
  }, [getMe, user]);

  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/categories" element={<CategoriesPage />} />

      {/* Public Post Page */}
      <Route path="/post/:id" element={<PostPage />} />

      {/* Private Routes */}
      <Route
        path="/create-post"
        element={
          <PrivateRoute>
            <CreatePostPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-post/:id"
        element={
          <PrivateRoute>
            <EditPostPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-posts"
        element={
          <PrivateRoute>
            <MyPostsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
