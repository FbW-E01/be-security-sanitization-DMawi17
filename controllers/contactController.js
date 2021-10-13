import express from "express";
import Contact from "../models/contact.js";
import errChecks from "../errorChecks.js";
import rules from "../validation.js";

const router = express.Router();

// Besides adding validation and sanitation
// feel free to improve these in other ways!

router.post("/", errChecks(rules), async (request, response) => {
    response.json(await Contact.create(request.body));
});

router.get("/", async (request, response) => {
    response.json(await Contact.find());
});

export default router;
