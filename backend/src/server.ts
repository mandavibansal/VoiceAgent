import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/",(req,res) => {
    res.json({
        message:"VOICE AGENT running",
    });
});
app.use("/api/auth",authRoutes);

const PORT =process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(
        `Server running on http://localhost:${PORT}`
    );
});