const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ShelterSchema = new Schema( //name, address, phone, email, description , website, logo
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        website: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        },
        //socialmedia: [{ type: String, required: true }], //Como mandar un arreglo en insomnia
    },
    { timestamps: true }
);

const ShelterModel = mongoose.model("shelter", ShelterSchema);

module.exports = ShelterModel;