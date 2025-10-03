// src/pages/auth/SignUpPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore.js";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, register, laoding, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(username, email, password);

    if (!error) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-extrabold text-orange-600 mb-6 text-center">
          Sign Up for BlogSpace
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 transition"
            />
          </div>
          <button
            type="submit"
            disabled={laoding}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold text-lg transition"
          >
            {laoding ? "Signing up..." : "Sign up"}
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-3">{error}</p>}

        <p className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
