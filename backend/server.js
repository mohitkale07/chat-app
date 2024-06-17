import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "../backend/routes/authRoutes.js"
import messageRoutes from "../backend/routes/messageRoutes.js"
import userRoutes from "../backend/routes/userRoutes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(express.json()) //to parse incoming request with json payload(req.body)
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);


app.get("/", (req, res) => {
  res.send("Hello world");
});


app.listen(PORT, () => {
    connectToMongoDb()
  console.log(`Server has started at ${PORT}`);
});
