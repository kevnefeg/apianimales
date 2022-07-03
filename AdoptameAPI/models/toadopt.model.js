const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ToadoptSchema = new Schema(
    {
        duiimageback: { //misma pregunta de las imagenes
            type: String,
            required: true
        },
        duiimagefront: { //misma pregunta de las imagenes
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        houseimage: [{ type: String, required: true }],
        message: {
            type: String,
            required: true
        },
        userID: { type: Schema.Types.ObjectId, ref: "user", required: true },
        shelterID: { type: Schema.Types.ObjectId, ref: "shelter", required: true },
        petID: { type: Schema.Types.ObjectId, ref: "pet", required: true },
    },
    { timestamps: true }
);

const ToAdoptModel = mongoose.model("toadopt", ToadoptSchema);
module.exports = ToAdoptModel;