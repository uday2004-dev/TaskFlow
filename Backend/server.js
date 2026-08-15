import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import taskRouter from "./route/taskRoutes.js";

dotenv.config();

const app = express();

// CORS — routes se PEHLE
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

connectDB();

app.use("/api/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});