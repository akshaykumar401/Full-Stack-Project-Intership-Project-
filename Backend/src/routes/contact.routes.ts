import { Router } from "express";
import {
  createContactFormMessage
} from "../controller/contact.controller.ts";

const router: Router = Router();
router.route("/contact").post(createContactFormMessage);
export default router;
