import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import commentController from '../controllers/comment.controller.js';

const router = express.Router();

router.post("/:postId", authMiddleware, commentController.addComment);
router.post("/reply/:commentId", authMiddleware, commentController.replyToComment);

export default router;
