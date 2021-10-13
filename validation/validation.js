import { body, check } from "express-validator";

const rules = [
    body("name")
        .isLength({ min: 3 })
        .withMessage("min 3 char")
        .trim()
        .isAlpha()
        .withMessage("alphabets only!"),
    body("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("Must Be a Valid Email Address"),
    body("telephone")
        .isLength({ min: 2 })
        .withMessage("min length 2")
        .isNumeric()
        .withMessage("only numbers"),
    body("country"),
    body("message")
        .isLength({ max: 100 })
        .withMessage("max length of 100 char reached!"),
];

export default rules;
