const express = require("express");
const Router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = file.originalname.split('.').pop();
        cb(null, `${uniqueSuffix}.${extension}`);
    },
});

const upload = multer({ storage });

Router.post("/", upload.single("image"), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    res.status(200).json({
        message: "File uploaded successfully",
        filename: file.filename,
        filePath: `/uploads/${file.filename}`
    });
});

module.exports = Router;