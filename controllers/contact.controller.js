import Contact from "../models/contact.model.js";

const create = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.json(contact);
    } catch (err) {
        res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    try {
        const contacts = await Contact.find().select("-id");
        res.json(contacts);
    } catch (err) {
        console.dir(error.message, { colors: true });
    }
};

export { create, read };
