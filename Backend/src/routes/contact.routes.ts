import { Router } from "express";
import {
  createContactFormMessage
} from "../controllers/contact.controller.ts";

const router: Router = Router();
router.route("/contact").post(createContactFormMessage);
export default router;
