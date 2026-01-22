import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({ path: "./src/ui/backend/.env" });


const app = express();

// Middleware
app.get("/home", (req, res) => {
  return res.status(200).json({
    message: "I am coming from backend",
    success: true
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Fix CORS options
const corsOption = {
  origin: "http://localhost:5173", // ✅ Corrected URL (added colon)
  credentials: true               // ✅ Lowercase 'credentials' and set to true
};

app.use(cors(corsOption)); // ✅ Apply CORS middleware

const PORT = process.env.PORT||3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
}); 