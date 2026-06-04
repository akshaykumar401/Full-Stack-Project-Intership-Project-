import mongoose, { Schema, type Document } from "mongoose";

// Interface for OTP Document
interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  createdAt:Date;
}

const contactSchema: Schema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model<IContact>("Contact", contactSchema);