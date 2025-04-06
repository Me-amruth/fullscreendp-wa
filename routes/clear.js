const express = require("express");
const Router = express.Router();
const fs = require('fs');
const path = require('path');

async function clearDir() {
    try {
        const uploads = path.join(__dirname, '../uploads');
        const session = path.join(__dirname, '../session');

        if (fs.existsSync(uploads)) {
            fs.rmSync(uploads, { recursive: true, force: true });
            console.log('Uploads directory deleted.');
        }

        if (fs.existsSync(session)) {
            fs.rmSync(session, { recursive: true, force: true });
            console.log('Session directory deleted.');
        }

        if (!fs.existsSync(uploads)) {
            fs.mkdirSync(uploads, { recursive: true });
            console.log("Created 'uploads' folder ✅");
        }
        if (!fs.existsSync(session)) {
            fs.mkdirSync(session, { recursive: true });
            console.log("Created 'uploads' folder ✅");
        }
    } catch (e) {
        console.error('Error while clearing directories:', e);
    }
}

Router.get("/", async (req, res) => {
    try {
        await clearDir();
        res.status(200).json({ message: "success" });
    } catch(e) {
        res.json({ error: JSON.stringify(e) });
    }
});

module.exports = Router;