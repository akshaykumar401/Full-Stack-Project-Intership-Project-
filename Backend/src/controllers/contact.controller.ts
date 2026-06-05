import { asyncHandler } from "../utils/asyncHandler.ts";
import { ApiError } from "../utils/ApiError.ts";
import { ApiResponse } from "../utils/ApiResponse.ts";
import { type Request, type Response } from "express";
import { Contact } from "../models/contact.model.ts";

// Inserting the Contact Form Data into the Database 
const createContactFormMessage = asyncHandler(async (req: Request, res: Response) => {
  // Getting FullName, Email, Message...
  const { fullName, email, message } = req.body;

  // Checking if the Data is Valid or Not...
  if (!fullName || !email || !message)
    throw new ApiError(400, "Please Provide the Data...");

  // Creating the Contact
  const newMessage = await Contact.create({
    name: fullName,
    email,
    message,
  });
  
  // Checking if the Message is Created or Not...
  if (!newMessage) {
    throw new ApiError(400, "Something went wrong while creating the Message.");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200, 
        newMessage,
        "Message Created Successfully",
      )
    );
});

export { createContactFormMessage };