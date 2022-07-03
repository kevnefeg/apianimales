const multer = require("multer");

const Filestorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, req.body.email + '_' + new Date().getTime() + '_' + file.originalname);
    }
});

const upload = multer({ storage: Filestorage });

module.exports = { upload }