var {
    createShelter,
    getShelterMain,
    profileShelter,
    updateShelter,
    deleteShelter,
    getAllShelters,
} = require("../controllers/shelter.controller");
var express = require("express");
var router = express.Router();
const { upload } = require('../middleware/uploadFile')
const { validateCreate } = require('../validator/shelter.validator')
const { validateResult } = require('../helpers/validateHelper')

router.post("/", upload.single('image'), validateCreate, validateResult, createShelter);
router.get("/main", getShelterMain);
router.get("/profile/:id", profileShelter);
router.get("/", getAllShelters);
router.put("/:id", updateShelter);
router.delete("/:id", deleteShelter);

module.exports = router;