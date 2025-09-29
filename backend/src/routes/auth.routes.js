import express from 'express';

const router = express.Router();

router.post("/user/register", authController.register);

export default router;