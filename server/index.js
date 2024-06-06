import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectToDB from "./DB/ConnectToDB.js";
import userRoutes from "./Routes/UserRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware setup
app.use(
  cors({
    origin: "https://nexaro-six8.vercel.app",
    credentials: true,
  })
);

app.locals.cloudinaryCloudName = process.env.CLOUD_NAME_CLOUDINARY;

// Set a higher limit for JSON payloads
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Connect to the database
connectToDB();

// Define routes
app.use("/api", userRoutes);

// Serve static files from the React app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client/build")));

// Handle all routes and serve the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
