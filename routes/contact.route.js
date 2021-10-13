import express from "express";
import { create, read } from "../controllers/contact.controller.js";
import errChecks from "../validation/errorChecks.js";
import rules from "../validation/validation.js";

const router = express.Router();

router.route("/").post(errChecks(rules), create).get(read);

export default router;
