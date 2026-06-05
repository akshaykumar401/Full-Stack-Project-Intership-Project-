import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.ts";
import { asyncHandler } from "../utils/asyncHandler.ts";

export interface CustomRequest extends Request {
  user?: any;
}

export const verifyAdmin = asyncHandler(async (req: CustomRequest, _res: Response, next: NextFunction) => {
  try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "fallback_secret");

    req.user = decodedToken;
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid access token");
  }
});
