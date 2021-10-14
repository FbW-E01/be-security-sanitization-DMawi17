import { body, check } from "express-validator";

const rules = [
    body("name")
        .isLength({ min: 2 })
        .withMessage("Minimum of two characters required!")
        .trim()
        .isAlpha()
        .withMessage("Use only letters please!"),
    body("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("Must be a valid email address"),
    body("telephone")
        .isLength({ min: 6 })
        .withMessage("Minimum of 6 characters required!")
        .isNumeric()
        .withMessage("User only numbers please!"),
    body("country"),
    body("message")
        .isLength({ max: 100 })
        .withMessage("Maximum length of 100 characters reached!"),
];

export default rules;
