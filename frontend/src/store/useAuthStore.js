import { create } from "zustand";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  // register
  register: async (username, email, password) => {
    try {
      set({ loading: true, error: null });
      const res = await axios.post("/auth/user/register", {
        username,
        email,
        password,
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
      const res = await axios.post("/auth/user/login", {
        email,
        password,
      });
      set({ user: res.data, loading: false });
    } catch (error) {
      set({
        error: err.response?.data?.message || "Login failed",
        loading: false,
      });
    }
  },

  // logout
  logout: async () => {
    try {
      set({ user: null });
    } catch (error) {
      set({ error: err.response?.data?.message || "Logout failed" });
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
  updateProfile: async (username, email) => {
    try {
      set({ loading: true, error: null });
      const res = await axios.put("/auth/user/update", { username, email });
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
}));

export default useAuthStore;
