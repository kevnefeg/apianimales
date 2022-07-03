const multer = require("multer");

const Filestorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, req.user.email + Date.now() + file.originalname);
    }
});

const upload = multer({ storage: Filestorage });

module.exports = { upload }