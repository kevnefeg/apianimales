var {
    createToAdopt,
} = require("../controllers/toadopt.controller");
var express = require("express");
var router = express.Router();
const { upload } = require('../middleware/uploadFile')
const { validateCreate } = require('../validator/toadopt.validator')
const { validateResult } = require('../helpers/validateHelper')

router.post("/",upload.array('images'), validateCreate, validateResult, createToAdopt);

module.exports = router;