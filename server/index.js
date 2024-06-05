import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./DB/ConnectToDB.js";
import userRoutes from "./Routes/UserRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware setup
const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:5173"]; // Add your deployed frontend URL here

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

app.locals.cloudinaryCloudName = process.env.CLOUD_NAME_CLOUDINARY;

// Set a higher limit for JSON payloads
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Connect to the database
connectToDB();

// Define routes
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("server is live now");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
