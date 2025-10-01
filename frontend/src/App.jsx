import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import HomePage from "./pages/general/HomePage.jsx";
import AboutPage from "./pages/general/AboutPage.jsx";
import ContactPage from "./pages/general/ContactPage.jsx";
import CategoriesPage from "./pages/general/CategoriesPage.jsx";

import LoginPage from "./pages/auth/LoginPage.jsx";
import SignUpPage from "./pages/auth/SignUpPage.jsx";

// import PostPage from "./pages/posts/PostPage.jsx";
import CreatePostPage from "./pages/posts/CreatePostPage.jsx";
import EditPostPage from "./pages/posts/EditPostPage.jsx";
import MyPostsPage from "./pages/posts/MyPostsPage.jsx";
import ProfilePage from "./pages/user/ProfilePage.jsx";

// Simulate auth check (replace with real logic)
const isAuthenticated = () => !!localStorage.getItem("token");

// Private Route Component
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

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

        {/* Protected Pages */}
        <Route
          path="/post/:id"
          element={
            <PrivateRoute>
              {/* <PostPage /> */}
            </PrivateRoute>
          }
        />
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

        {/* Catch-all redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

  );
};

export default App;
