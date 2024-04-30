import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
const app = express()
import { config } from "dotenv";

config()

app.use(cors({
    origin: process.env.FRONTEND_URI, // marked * to make access from all
    credentials: true
}))

// console.log("Forntend URI", process.env.FRONTEND_URI);
app.use(morgan("dev"))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ // To make understand express the encoded url
    limit: "16kb", extended: true
}))
app.use(express.static("public")) // To store any public assests in server (Temp
app.use(cookieParser());
// Routes
import userRouter from "./routes/user.routes.js";

// Declaring Routes
app.use("/api/v1/users", userRouter)

export { app }