import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },

  content: {
    type: String,
    required: [true, "Content is required"],
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  tags: {
    type: [String],
    default: [],
  },

  category: {
    type: String,
    default: "General",
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    },
  ],

  image: {
    type: String,
    default: "",
  },

  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },

}, {timestamps: true} );


const PostModel = mongoose.model("Post", postSchema);
export default PostModel;