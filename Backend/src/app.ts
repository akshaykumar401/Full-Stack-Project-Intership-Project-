import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Importing all Routes...
import contactRouter from "./routes/contact.routes.ts";
import adminRouter from "./routes/admin.routes.ts";

// Routes Decleration....
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/admin", adminRouter);

// Health Route
app.get("/", (req: Request, res: Response) => {
  return res
    .status(200)
    .json({
      message: "Backend is Healthy",
      status: 200,
    });
});


export { app };