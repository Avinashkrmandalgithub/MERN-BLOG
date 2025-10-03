import PostModel from "../models/post.model.js";

const createPost = async (req, res) => {
  try {
    const { title, content, tags, category, image, status } = req.body;

    if (!title || !content || !tags || !category || !image || !status) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const post = await PostModel.create({
      title,
      content,
      author: req.user._id,
      tags,
      category,
      image,
      status,
    });

    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find()
      .populate("author", "username avatar")
      .populate("comments");

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id)
      .populate("author", "username avatar")
      .populate({
        path: "comments",
        populate: { path: "author", select: "username avatar" },
      });

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.user.id);
    if (!post)
      return res.status(404).json({
        message: "Post not found",
      });

    if (post.author.toString() !== req.user._id.toString())
      return res.status(403).json({
        message: "Unauthorized action",
      });

    await PostModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const searchPosts = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q)
      return res.status(400).json({
        message: "Search query is required.",
      });

    const posts = await PostModel.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { content: { $regex: q, $options: "i" } },
        { tags: { $regex: q, $options: "i" } },
      ],
    }).populate("author", "username avatar");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPostsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const posts = await PostModel.find({ category }).populate(
      "author",
      "username avatar"
    );

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const likePost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.likes.includes(req.user._id)) {
      return res.status(400).json({ message: "You already liked this post" });
    }

    post.likes.push(req.user._id);
    await post.save();

    res.status(200).json({ message: "Post liked", likes: post.likes.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const unlikePost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (!post.likes.includes(req.user._id)) {
      return res
        .status(400)
        .json({ message: "You haven't liked this post yet" });
    }

    post.likes = post.likes.filter(
      (userId) => userId.toString() !== req.user._id.toString()
    );

    await post.save();

    res.status(200).json({ message: "Post unliked", likes: post.likes.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  createPost,
  getPosts,
  getPostById,
  deletePost,
  searchPosts,
  getPostsByCategory,
  likePost,
  unlikePost,
};
