import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import postController from '../controllers/post.controller.js';

const router = express.Router();

// search 
router.get("/search", authMiddleware, postController.searchPosts);

// category filter
router.get("/category/:category", postController.getPostsByCategory);

// CRUD
router.get("/", authMiddleware, postController.getPosts);
router.post("/", authMiddleware, postController.createPost);
router.get("/:id", authMiddleware, postController.getPostById);
router.delete("/:id", authMiddleware, postController.deletePost);

// like/unlike
router.post("/:id/like", authMiddleware, postController.likePost);
router.post("/:id/unlike", authMiddleware, postController.unlikePost);

export default router;
