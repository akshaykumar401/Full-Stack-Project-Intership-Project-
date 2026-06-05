import { asyncHandler } from "../utils/asyncHandler.ts";
import { ApiError } from "../utils/ApiError.ts";
import { ApiResponse } from "../utils/ApiResponse.ts";
import { type Request, type Response } from "express";
import { Contact } from "../models/contact.model.ts";
import jwt from "jsonwebtoken";
import { type CustomRequest } from "../middlewares/auth.middleware.ts";

// Login the Admin user
const loginAdmin = asyncHandler(async (req: Request, res: Response) => {
  // Getting username and Password from the Request Body...
  const { userName, password } = req.body;

  // Checking the Username and Password is Valid or Not...
  if (!userName || !password)
    throw new ApiError(400, "Please Provide the Username and Password...");

  // Getting the Admin User
  const row_username = process.env.USER_NAME;
  const row_password = process.env.PASSWORD

  const array_username = row_username ? row_username.split(",") : [];
  const array_password = row_password ? row_password.split(",") : [];

  // Admin Login...
  if (array_username.includes(userName) && array_password.includes(password)) {
    // Generate JWT Token
    const accessToken = jwt.sign(
      { userName },
      process.env.ACCESS_TOKEN_SECRET || "fallback_secret",
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1d" }
    );

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production"
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .json(
        new ApiResponse(
          200,
          {
            userName,
          },
          "Admin Logged in Successfully",
        ),
      );
  } else {
    throw new ApiError(401, "Invalid Username or Password...");
  }
});

// Get All Contact Messages
const getAllContactMessages = asyncHandler(async (req: Request, res: Response) => {
  const contactMessages = await Contact.find();
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        contactMessages,
        "Contact Messages Fetched Successfully",
      ),
    );
});

// Logout the Admin user
const logoutAdmin = asyncHandler(async (req: Request, res: Response) => {
  return res
    .status(200)
    .clearCookie("accessToken")
    .json(
      new ApiResponse(
        200,
        {},
        "Admin Logged out Successfully",
      ),
    );
});

// Getting the current user
const getCurrentUser = asyncHandler(async (req: CustomRequest, res: Response) => {
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { userName: req?.user?.userName ?? "" },
        "Current User Fetched Successfully",
      ),
    );
});

export { loginAdmin, getAllContactMessages, logoutAdmin, getCurrentUser };