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
      $push: { comments: comment._id },
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getComments = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await CommentModel.find({ post: postId })
      .populate("author", "username avatar")
      .populate({
        path: "replies",
        populate: { path: "author", select: "username avatar" },
      });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const replyToComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { commentId } = req.params;

    if (!text) {
      return res.status(400).json({ message: "Reply text is required" });
    }

    const parentComment = await CommentModel.findById(commentId);
    if (!parentComment) {
      return res.status(404).json({ message: "Parent comment not found" });
    }

    const reply = await CommentModel.create({
      text,
      author: req.user._id,
      post: parentComment.post, // same post as parent comment
    });

    parentComment.replies.push(reply._id);
    await parentComment.save();

    res.status(201).json(reply);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { commentId } = req.params;

    const comment = await CommentModel.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (comment.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    comment.text = text || comment.text;
    await comment.save();

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await CommentModel.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (comment.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await PostModel.findByIdAndUpdate(comment.post, {
      $pull: { comments: comment._id },
    });

    await comment.deleteOne();

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateReply = async (req, res) => {
  try {
    const { text } = req.body;
    const { replyId } = req.params;

    const reply = await CommentModel.findById(replyId);
    if (!reply) {
      return res.status(404).json({ message: "Reply not found" });
    }

    if (reply.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    reply.text = text || reply.text;
    await reply.save();

    res.status(200).json(reply);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteReply = async (req, res) => {
  try {
    const { replyId } = req.params;

    const reply = await CommentModel.findById(replyId);
    if (!reply) {
      return res.status(404).json({ message: "Reply not found" });
    }

    if (reply.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // remove from parent comment
    await CommentModel.findOneAndUpdate(
      { replies: replyId },
      { $pull: { replies: replyId } }
    );

    await reply.deleteOne();

    res.status(200).json({ message: "Reply deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  addComment,
  getComments,
  replyToComment,
  updateComment,
  deleteComment,
  updateReply,
  deleteReply,
};
