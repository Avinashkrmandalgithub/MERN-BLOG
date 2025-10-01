// src/pages/user/ProfilePage.jsx
import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const ProfilePage = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-6">My Profile</h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl space-y-6">
          <p className="text-gray-600 dark:text-gray-400"><strong>Username:</strong> JohnDoe</p>
          <p className="text-gray-600 dark:text-gray-400"><strong>Email:</strong> johndoe@example.com</p>
          <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition">
            Edit Profile
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
