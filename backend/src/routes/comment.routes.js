import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import commentController from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/:postId", commentController.getComments);
router.post("/:postId", authMiddleware, commentController.addComment);

router.post("/reply/:commentId", authMiddleware, commentController.replyToComment);
router.put("/:commentId", authMiddleware, commentController.updateComment);
router.delete("/:commentId", authMiddleware, commentController.deleteComment);

router.put("/reply/:replyId", authMiddleware, commentController.updateReply);
router.delete("/reply/:replyId", authMiddleware, commentController.deleteReply);

export default router;
