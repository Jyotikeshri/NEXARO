import jwt from "jsonwebtoken";
import userModel from "../../Models/UserModel.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

async function userLogInController(req, res) {
  try {
    const { email, password } = req.body;
    console.log("TOKEN_SECRET_KEY:", process.env.TOKEN_SECRET_KEY);

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 8, // 8 hours
      });

      const tokenOption = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // only secure in production
        sameSite: "Strict",
      };

      res.cookie("token", token, tokenOption).status(200).json({
        message: "Login successfully",
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error("Please check Password");
    }
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

export default userLogInController;
