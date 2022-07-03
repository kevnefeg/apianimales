var {
    createPet,
    getPetMain,
    getAllPets,
    profilePet,
    updatePet,
    deletePet,
} = require("../controllers/pet.controller");
var express = require("express");
var router = express.Router();
const { upload } = require('../middleware/uploadFileWithNotEmail')
const { validateCreate } = require('../validator/pet.validator')
const { validateResult } = require('../helpers/validateHelper')



router.get("/main", getPetMain);
router.get("/", getAllPets);
router.get("/profile/:id", profilePet);
router.post("/", upload.array('image'), validateCreate, validateResult, createPet);//preguntar si hay varios campos con imagenes como hacerlo
router.put("/:id", updatePet);
router.delete("/:id", deletePet);

module.exports = router;