import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import postController from '../controllers/post.controller.js';


const router = express.Router();

router.get("/", authMiddleware, postController. getPosts);
router.post("/", authMiddleware, postController.createPost);
router.get("/:id",authMiddleware, postController.getPostById);


export default router;