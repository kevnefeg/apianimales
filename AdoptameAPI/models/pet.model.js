const mongoose = require("mongoose");
const { float } = require("webidl-conversions");

const Schema = mongoose.Schema; //name(string),age(Number),personality(string),vaccine(string),size(number),weight(number),birthdate(date),gender(string),history(string),adoptionRequirements(string)
const PetSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        personality: { type: String, required: true },
        vaccine: { type: String, required: true },
        specie: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        weight: {
            type: String,
            required: true
        },
        birthdate: { //TODO: deberia ser tipo string o tipo DATE
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        history: {
            type: String,
            required: true
        },
        adoptionRequirement: {
            type: String,
            required: true
        },
       // photos: { type: String, required:true },
        //videos: { type: String, required:true },
        //userID: { type: Schema.Types.ObjectId, ref: "user", required: true }
    },
    { timestamps: true }
);

const PetModel = mongoose.model("pet", PetSchema);

module.exports = PetModel;