const PetModel = require("../models/pet.model");

//Como manejar los arreglos y mandarlos en insomnia
exports.createPet = async (req, res, next) => {
    try {
        let {name, age, personality, vaccine, specie, size, weight, birthdate,
        gender,history,adoptionRequirement,photos,videos,userID} = req.body;

        let newPet = await PetModel.create({
            name,
            age,
            personality,
            vaccine,
            specie,
            size,
            weight,
            birthdate,
            gender,
            history,
            adoptionRequirement,
            photos: req.files.path,
            videos: req.files.path,
            userID
        });

        res.send({newPet});
    } catch (error) {
        next(error);
    }
};

//Para imprimir los primeros 10 posts en la pagina principal
exports.getPetMain = async (req, res, next) => {
    try {
        let pets = await PetModel.find({}, "-password")
        .skip(0)
        .limit(10);
        res.send({
            count: pets.length,
            pets,
        });
    } catch (error) {
        next(error);
    }
};

//Obtener todos los animales
exports.getAllPets = async (req, res, next) => {
    try {
        let pets = await PetModel.find({}, "-password")
      
        res.send({
            count: pets.length,
            pets,
        });
    } catch (error) {
        next(error);
    }
};

//obtener el perfil de una mascota
exports.profilePet = async (req, res, next) => {
    try {
        let id = req.params.id;
        let pet = await PetModel.findById(id);
        if (!pet) {
            return res.status(404).send({
                message: "pet not found",
            });
        }
        res.send({ pet });
    } catch (error) {
        next(error);
    }
};

//No sé si esta bien
exports.updatePet = async (req, res, next) => {
    try {
        let Petoupdate = req.params.id;
        let { name, age, personality, vaccine, specie, size, weight, birthdate, gender, history, adoptionRequirement, photos, videos} = req.body;
            let pet = await PetModel.findById ({id : Petoupdate});

        if(!pet)
            return res.status(400).send({
                meesage : "The pet you are trying to update does not exist",
            });
        
        pet.name = name;
        pet.age = age;
        pet.personality = personality;
        pet.vaccine = vaccine;
        pet.specie = specie;
        pet.size = size;
        pet.weight = weight;
        pet.birthdate = birthdate;
        pet.gender = gender;
        pet.history = history;
        pet.adoptionRequirement = adoptionRequirement;
        pet.photos = photos;
        pet.videos = videos;

        let updatePet = await pet.save();

        if(pet == updatePet){
            return res.send({
                message: "pet updated successfully",
                pet: { name, age, personality, vaccine, specie, size, weight, birthdate,gender,history,adoptionRequirement,photos,videos},
            });
        }
        res.send({
            message: "cannot update your pet",
        });
    } catch (error) {
        next (error)
    }
};

exports.deletePet = async (req, res, next) => {
    try {
        let id = req.params.id;
        let pet = await PetModel.findByIdAndDelete(id);
        if (!pet) {
            return res.status(404).send({
                message: "pet not found",
            });
        }
        return res.send({ 
            message: "pet deleted",
        });
    } catch (error) {
        next(error);
    }
};