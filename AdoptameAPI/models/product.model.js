const mongoose = require("mongoose");
const { float } = require("webidl-conversions");

const Schema = mongoose.Schema;
const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: { //debe ser en string por la url o como?
            type: String,
            required: true
        },
        serviceID: [{type: Schema.Types.ObjectId, ref: "service"}],
    },
    { timestamps: true }
);

const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;
