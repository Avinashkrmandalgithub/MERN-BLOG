import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';
import commentRoutes from './routes/comment.routes.js';

const app = express();
app.use(cors({
  origin: process.env.CLIENT_URI,
  credentials: true,
}))

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is ready")
})

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)



export default app;
