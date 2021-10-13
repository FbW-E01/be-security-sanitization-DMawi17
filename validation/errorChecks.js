import { validationResult } from "express-validator";

function errChecks(rules) {
    const isValid = (req, res, next) => {
        const errors = validationResult(req);

        !errors.isEmpty()
            ? res.status(400).json({ errors: errors.errors.map((e) => e.msg) })
            : next();
    };

    return Array(...rules, isValid);
}

export default errChecks;
