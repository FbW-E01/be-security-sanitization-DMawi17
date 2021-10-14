import mongoose from "mongoose";

const { Schema } = mongoose; // destructuring!!

const contactSchema = new Schema({
    country: String,
    message: String,
    name: String,
    telephone: String,
    email: String,
});

const Contact = mongoose.model("contacts", contactSchema);

export default Contact;
