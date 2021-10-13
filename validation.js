import { body } from "express-validator";

const rules = [
    body("country").isLength({ min: 2 }),
    body("message").isLength({ min: 2 }),
    body("name").isLength({ min: 2 }),
    body("telephone").isLength({ min: 2 }),
    // body("message").isLength({ min: 2 }).withMessage("message"),
    // body("name").isLength({ min: 2 }).withMessage("name"),
    // body("telephone").isLength({ min: 2 }).withMessage("tel"),
];

export default rules;
