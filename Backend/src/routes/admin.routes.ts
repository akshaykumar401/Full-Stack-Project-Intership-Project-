import { Router } from "express";
import {
  loginAdmin,
  getAllContactMessages,
  logoutAdmin,
} from "../controller/admin.controller.ts";
import { verifyAdmin } from "../middleware/auth.middleware.ts";

const router: Router = Router();

router.route("/login").post(loginAdmin);
router.route("/contact-messages").get(verifyAdmin, getAllContactMessages);
router.route("/logout").post(verifyAdmin, logoutAdmin);

export default router;