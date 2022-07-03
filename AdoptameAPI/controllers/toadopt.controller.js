ToAdoptModel = require("../models/toadopt.model.js");

exports.createToAdopt = async (req, res, next) => {
    try {
        let { 
            duiimageback, duiimagefront, address, houseimage, message,
            userID, shelterID, petID 
        } = req.body;
        let newToAdopt = await ToAdoptModel.create({
            duiimageback: req.files.path,
            duiimagefront: req.files.path,
            address,
            houseimage: req.files.path,
            message,
            userID,
            shelterID,
            petID
        });
        res.send({ newToAdopt });
    } catch (error) {
        next(error);
    }
};