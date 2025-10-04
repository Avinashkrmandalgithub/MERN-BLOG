import bcrypt from "bcryptjs";
import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

// generate jwt token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// register user
const register = async (req, res) => {
  try {
    const { username, email, password, avatar, bio } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await UserModel.create({
      username,
      email,
      password,
      avatar,
      bio,
    });
    const token = generateToken(user._id);

    // send token in cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      })
      .status(201)
      .json({
        message: "User registered successfully",
        _id: user._id,
        username: user.username,
        email: user.email,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await UserModel.findOne({ email }).select("+password");
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user._id);

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "User logged in",
        _id: user._id,
        username: user.username,
        email: user.email,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// logout user
const logout = (req, res) => {
  res
    .cookie("token", "", { httpOnly: true, expires: new Date(0) })
    .status(200)
    .json({ message: "Logged out successfully" });
};

// fetch profile
const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id).select("-password");
    if (!user)
      return res.status(404).json({
        message: "User not found.",
      });

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// update profile
const updateProfile = async (req, res) => {
  try {
    const { username, email, avatar, bio } = req.body;
    const user = await UserModel.findById(req.user._id);
    if (!user)
      return res.status(404).json({
        message: "User not found",
      });

    if (username) user.username = username;
    if (email) user.email = email;
    if (avatar) user.email = avatar;
    if (bio) user.email = bio;

    await user.save();
    res.status(201).json({
      message: "Profile updated",
      _id: user._id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      bio: user.bio,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// change password
const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword)
      return res.status(400).json({
        message: "All fields are required",
      });

    const user = await UserModel.findById(req.user._id).select("+password");
    if (!user)
      return res.status(404).json({
        message: "User not found",
      });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch)
      return res.status(400).json({
        message: "Old password incorrect",
      });

    user.password = newPassword;
    await user.save();

    res.status(201).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default {
  register,
  login,
  logout,
  getMe,
  updateProfile,
  changePassword,
};
