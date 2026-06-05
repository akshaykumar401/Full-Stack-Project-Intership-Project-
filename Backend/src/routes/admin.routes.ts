import { Router } from "express";
import {
  loginAdmin,
  getAllContactMessages,
  logoutAdmin,
  getCurrentUser,
} from "../controllers/admin.controller.ts";
import { verifyAdmin } from "../middlewares/auth.middleware.ts";

const router: Router = Router();

router.route("/login").post(loginAdmin);
router.route("/contact-messages").get(verifyAdmin, getAllContactMessages);
router.route("/logout").post(verifyAdmin, logoutAdmin);
router.route("/current-user").get(verifyAdmin, getCurrentUser);

export default router;