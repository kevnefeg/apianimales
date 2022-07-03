const express = require("express");
const multer = require("multer");

const app = express();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../images");
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + "-" + file.originalname);
    }
})

const upload = multer({storage: fileStorageEngine});

app.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.send("File uploaded successfully");
});

app.post("/multiple", upload.array("images", 5), (req, res) => {
    console.log(req.files);
    res.send("Multiple files uploaded successfully");
});
