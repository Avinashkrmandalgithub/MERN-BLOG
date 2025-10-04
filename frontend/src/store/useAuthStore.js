import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      // register
      register: async (username, email, password, avatar, bio) => {
        try {
          set({ loading: true, error: null });
          const res = await axios.post("/auth/user/register", {
            username,
            email,
            password,
            avatar,
            bio,
          });
          set({ user: res.data, loading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Registration failed",
            loading: false,
          });
        }
      },

      // login
      login: async (email, password) => {
        try {
          set({ loading: true, error: null });
          const res = await axios.post("/auth/user/login", { email, password });
          set({ user: res.data, loading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Login failed",
            loading: false,
          });
        }
      },

      // logout
      logout: async () => {
        try {
          await axios.post("/auth/user/logout");
        } catch (err) {
          console.error("Logout failed:", err.response?.data?.message);
        } finally {
          set({ user: null, error: null, loading: false });
        }
      },

      // Get current user
      getMe: async () => {
        try {
          set({ loading: true, error: null });
          const res = await axios.get("/auth/user/me");
          set({ user: res.data, loading: false });
        } catch (err) {
          set({
            error: err.response?.data?.message || "Failed to fetch profile",
            loading: false,
          });
        }
      },

      // Update profile
      updateProfile: async (username, email, avatar, bio) => {
        try {
          set({ loading: true, error: null });
          const res = await axios.put("/auth/user/update", {
            username,
            email,
            avatar,
            bio,
          });
          set({ user: res.data, loading: false });
        } catch (err) {
          set({
            error: err.response?.data?.message || "Update failed",
            loading: false,
          });
        }
      },

      // Change password
      changePassword: async (oldPassword, newPassword) => {
        try {
          set({ loading: true, error: null });
          await axios.put("/auth/user/change-password", {
            oldPassword,
            newPassword,
          });
          set({ loading: false });
        } catch (err) {
          set({
            error: err.response?.data?.message || "Password change failed",
            loading: false,
          });
        }
      },
    }),
    {
      name: "auth-storage", // key for localStorage
      getStorage: () => localStorage, // or sessionStorage
    }
  )
);

export default useAuthStore;
