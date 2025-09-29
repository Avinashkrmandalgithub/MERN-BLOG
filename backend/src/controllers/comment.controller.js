import CommentModel from "../models/comment.model.js";
import PostModel from "../models/post.model.js";

const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { postId } = req.params;

    if (!text) {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const comment = await CommentModel.create({
      text,
      author: req.user._id,
      post: postId,
    });

    await PostModel.findByIdAndUpdate(postId, {
      $push: {
        comments: comment._id,
      },
    });

    res.status(201).json(comment);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const replyToComment = async (req, res) => {
  try {
    const { text, postId } = req.body;
    const { commentId } = req.params;

    if (!text || !postId) {
      return res.status(400).json({ message: "Reply text and postId are required" });
    }

    const reply = await CommentModel.create({
      text,
      author: req.user._id,
      post: req.body.postId,
    });

    await CommentModel.findByIdAndUpdate(commentId, {
      $push: {
        replies: reply._id,
      },
    });

    res.status(201).json(reply);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default {
  addComment,
  replyToComment,
};
