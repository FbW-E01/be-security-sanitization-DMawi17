import { body, check } from "express-validator";

const rules = [
    body("name").isLength({ min: 3 }).trim().isAlpha(),
    body("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("Must Be a Valid Email Address"),
    body("telephone").isLength({ min: 2 }).isNumeric(),
    body("country"),
    body("message").isLength({ max: 100 }),
];

export default rules;
