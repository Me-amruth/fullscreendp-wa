const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const connection = require('./routes/connection');
const uploader = require('./routes/uploader');
const clear = require('./routes/clear');

// Make sure uploads folder exists at server start
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log("Created 'uploads' folder ✅");
}

app.use('/', express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/connect', connection);
app.use('/upload', uploader);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/clear', clear);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});