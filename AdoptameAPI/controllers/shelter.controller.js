const ShelterModel = require('../models/shelter.model');

exports.createShelter = async (req, res, next) => {
    try {
        let{name, address, phone, email, description, website, logo, socialmedia} = req.body;
        let newShelter = await ShelterModel.create({
            name,
            address,
            phone,
            email,
            description,
            website,
            logo: req.file.path,
            socialmedia
        });
        res.send({newShelter});
    } catch (error) {
        next(error);
    }
}

// GET function Shelters
exports.getAllShelters = async (req, res, next) => {
    try {
        let shelters = await ShelterModel.find({}, "-password")
        
        res.send({
            count: shelters.length,
            shelters,
        });
    } catch (error) {
        next(error);
    }
};

exports.getShelterMain = async (req, res, next) => {
    try {
        let shelters = await ShelterModel.find({}, "-password")
        .skip(0)
        .limit(10);
        res.send({
            count: shelters.length,
            shelters,
        });
    } catch (error) {
        next(error);
    }
};

exports.profileShelter = async (req, res, next) => {
    try {
        let name = req.params.name;
        let shelter = await ShelterModel.findOne({name}, "-password");
        if (!shelter) {
            return res.status(404).send({
                message: "shelter not found",
            });
        }
        res.send({ shelter });
    } catch (error) {
        next(error);
    }
};

//Como hacer que solo se pasen los parametros que se quieren
exports.updateShelter = async (req, res, next) => {
    try {
        let id = req.params.id;
        let shelter = await ShelterModel.findById(id);
        if (!shelter) {
            return res.status(404).send({
                message: "shelter not found",
            });
        }
        let {name, address, phone, email, description, website, logo, socialmedia} = req.body;
        shelter.name = name;
        shelter.address = address;
        shelter.phone = phone;
        shelter.email = email;
        shelter.description = description;
        shelter.website = website;
        shelter.logo = logo;
        shelter.socialmedia = socialmedia;
        await shelter.save();
        res.send({shelter});
    } catch (error) {
        next(error);
    }
}

exports.deleteShelter = async (req, res, next) => {
    try {
        let id = req.params.id;
        let shelter = await ShelterModel.findByIdAndDelete(id);
        if (!shelter) {
            return res.status(404).send({
                message: "shelter not found",
            });
        }
        return res.send({ 
            message: "shelter deleted",
        });
    } catch (error) {
        next(error);
    }
};