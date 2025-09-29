import PostModel from '../models/post.model.js';


const createPost = async (req, res) => {
  try {
    const { title, content, tags, category, image, status } = req.body;

  if(!title || !content || !tags || !category || !image || !status) {
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
    post
  })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find()
    .populate("author", "username avatar")
    .populate("comments")

    res.status(200).json(posts);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

const getPostById = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id)
    .populate("author", "username avatar")
    .populate({
      path: "comments",
      populate: { path: "author", select: "username avatar" },
    });

    if(!post){
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.status(200).json(post);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}



export default {
  createPost,
  getPosts,
  getPostById,
}