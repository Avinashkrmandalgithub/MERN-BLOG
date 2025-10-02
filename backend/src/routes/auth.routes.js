import express from 'express';
import authController from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

// auth
router.post("/user/register", authController.register);
router.post("/user/login", authController.login);
router.post("/user/logout", authController.logout);

//profile
router.get("/user/me", authMiddleware, authController.getMe);
router.put("/user/update", authMiddleware, authController.updateProfile);
router.put("/user/change-password", authMiddleware, authController.changePassword);

export default router;