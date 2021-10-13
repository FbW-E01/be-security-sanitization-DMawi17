import { body, check } from "express-validator";

const rules = [
    body("name")
        .isLength({ min: 2 })
        .withMessage("min 2 char")
        .trim()
        .isAlpha()
        .withMessage("Use only letters only please!"),
    body("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("Must be a valid email address"),
    body("telephone")
        .isLength({ min: 6 })
        .withMessage("Minimum of 6 characters!")
        .isNumeric()
        .withMessage("User only numbers please!"),
    body("country"),
    body("message")
        .isLength({ max: 100 })
        .withMessage("Maximum length of 100 characters reached!"),
];

export default rules;
