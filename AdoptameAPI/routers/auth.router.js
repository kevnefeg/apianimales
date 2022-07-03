var { createUser } = require("../controllers/user.controller");
var express = require("express");
var jwt = require("jsonwebtoken");
var UserModel = require("../models/user.model");
var router = express.Router();
const { validateCreate } = require('../validator/user.validator')
const { validateResult } = require('../helpers/validateHelper')
const { upload } = require('../middleware/uploadFile')

router.post("/register", upload.single('image'), validateCreate, validateResult, createUser),

    router.post("/login", async (req, res, next) => {
        try {
            let { email, password } = req.body; //TODO: Add email
            let user = await UserModel.findOne({ email });
            if (!user)
                return res.status(400).send({
                    message: "User not found",
                });
            let validPassword = await user.isValidPassword(password);
            if (!validPassword)
                return res.status(400).send({
                    message: "Wrong password",
                });
            let body = { _id: user._id, email: user.email };
            let token = jwt.sign(
                { user: body },
                process.env.JWT_SECRET || "TOP_SECRET"
            );
            return res.json({ token, role: user.role, id: user._id });
        } catch (err) {
            next(err);
        }
    });
module.exports = router;
