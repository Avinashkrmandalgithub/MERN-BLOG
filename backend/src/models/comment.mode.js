import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Comment text is required"],
      trim: true,
      maxlength: 500,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },

    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

// getting quick access of likes or count 
commentSchema.virtual("likeCount").get(function () {
  return this.likes.length;
});

commentSchema.virtual("replyCount").get(function () {
  return this.replies.length;
});

commentSchema.set("toJSON", { virtuals: true });
commentSchema.set("toObject", { virtuals: true });

// auto delete replies when parent comment deleted
commentSchema.pre("remove", async function (next) {
  await this.model("Comment").deleteMany({ _id: { $in: this.replies } });
  next();
});

const CommentModel = mongoose.model("Comment", commentSchema);
export default CommentModel;
