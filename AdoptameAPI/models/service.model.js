const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ServiceSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        logo: { //debe ser en string por la url o como?
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
    },
    { timestamps: true }
);

const ServiceModel = mongoose.model("service", ServiceSchema);
module.exports = ServiceModel;