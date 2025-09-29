import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is ready")
})

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes)



export default app;
