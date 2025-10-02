// src/pages/user/ProfilePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [bio, setBio] = useState("This is my bio.");
  const [avatar, setAvatar] = useState(null);

  const handleSave = () => {
    // TODO: API call to save updated profile
    setEditMode(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24">
        {/* Page Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-10 text-center">
          My Profile
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Avatar Section */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="relative">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-orange-500 shadow-md">
                <img
                  src={avatar || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {editMode && (
                <label className="absolute bottom-2 right-2 bg-orange-600 text-white text-xs px-3 py-1 rounded-lg cursor-pointer hover:bg-orange-700 transition">
                  Change
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            {editMode ? (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                  <label className="w-28 font-semibold text-gray-700 dark:text-gray-300">
                    Username:
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full sm:w-80 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                  <label className="w-28 font-semibold text-gray-700 dark:text-gray-300">
                    Email:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:w-80 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                  <label className="w-28 font-semibold text-gray-700 dark:text-gray-300 pt-2">
                    Bio:
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                    className="w-full sm:w-80 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white resize-none"
                  />
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-orange-600">Username:</strong>{" "}
                  {username}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-orange-600">Email:</strong> {email}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong className="text-orange-600">Bio:</strong> {bio}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              {editMode ? (
                <>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="px-6 py-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-xl font-semibold transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditMode(true)}
                  className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition"
                >
                  Edit Profile
                </button>
              )}

              <Link
                to="/my-posts"
                className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-xl font-semibold transition text-center"
              >
                My Posts
              </Link>
              <Link
                to="/create-post"
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition text-center"
              >
                Create Post
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
