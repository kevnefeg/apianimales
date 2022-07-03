var {
    createService,
    getServiceMain,
    profileService,
    updateService,
    deleteService,
    getAllServices,
} = require("../controllers/service.controller");
var express = require("express");
var router = express.Router();
var hasRole = require("../middleware/hasRole");
const { upload } = require('../middleware/uploadFile')
const { validateCreate } = require('../validator/service.validator')
const { validateResult } = require('../helpers/validateHelper')

router.post("/", upload.single('image'), hasRole("Service"), validateCreate, validateResult, createService);
router.get("/main", hasRole("Service"), getServiceMain);
router.get("/", getAllServices);
router.get("/profile/:id", hasRole("Service"), profileService);
router.put("/:id", hasRole("Service"), updateService);
router.delete("/:id", hasRole("Service"), deleteService);

module.exports = router;