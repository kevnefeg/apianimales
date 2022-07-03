const UserModel = require("../models/user.model");
const multer = require("multer");
const upload = multer({dest : "..uploads/"});

exports.getAllUsers = async (req, res, next) => {
    try {
        let users = await UserModel.find({}, "-password");
        res.send({
        count: users.length,
        users,
    });
    } catch (err) {
        next(err);
    }
};

exports.getUser = async (req, res, next) => {
    try {
        let email = req.params.email;
        let user = await UserModel.findOne({ email }, "-password");
        if (!user) {
        return res.status(404).send({
            message: "user not found",
        });
        }
        res.send({ user });
    } catch (err) {
        next(err);
    }
};

//TODO: COMO HACER PAGINACION

exports.createUser = async (req, res, next) => {
    try {
        //TODO: Requiere validacion
        let { fullname, email, password, phone, profilepick, role} = req.body;
        let newUser = await UserModel.create({
            fullname,
            email,
            password,
            phone,
            profilepick: "uploads/user.png",
            role
        });
        newUser.password = undefined;
        res.send("User created successfully");
    } catch (error) {
        next(error)
    }
};  

//TODO: QUE DATOS SON LOS QUE SE PODRAN EDITAR
exports.updateUser = async (req, res, next) => {
    try {
        let usernameToUpdate = req.params.email;
        //New Data
        
       let  { email, profilepick, password, phone} = req.body;
        let user = await UserModel.findOne({email: usernameToUpdate});
        
             if (!user)
                return res.status(400).send({
                    message: "The user you are trying to update does not exist",
                });
        
            user.email = email;
            user.profilepick = profilepick;
            user.password = password;
            user.phone = phone;
            
            let updateUser = await user.save();
        
            if ( user == updateUser) {
                return res.send({
                message : "User updated successfully",
                user: { profilepick, password, phone, email},    
                });
            }
            
            res.send({
                message : "cannot update user",
            });
        }   catch (error) {
            next(error)
        }
    };

exports.deleteUser = async (req, res, next) => {
    try {
        let email = req.params.email;
        let { deletedCount } = await UserModel.deleteOne({ email });
        if (deletedCount == 1) {
        return res.send({
            message: "successfully deleted",
        });
    }
        return res.status(400).send({
        message: "cannot delete the user, maybe is delete before",
        });
    } catch (err) {
        next(err);
    }
};