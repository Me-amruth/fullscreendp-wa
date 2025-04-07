const Jimp = require('jimp');
const fs = require('fs');

const generateProfilePicture = async (media) => {
    try {
        const jimp = await Jimp.read(media)
        const min = jimp.getWidth()
        const max = jimp.getHeight()
        const cropped = jimp.crop(0, 0, min, max)
        return {
            img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
            preview: await cropped.normalize().getBufferAsync(Jimp.MIME_JPEG)
        }
    } catch (error) {
        console.error(`Failed to generate profile picture `, error);
    }
};

const deleteTemp = async (filePath, sessionPath) => {
    try {
        if (filePath && fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`Image ${filePath} deleted successfully.`);
        }

        if (sessionPath && fs.existsSync(sessionPath)) {
            fs.rmSync(sessionPath, { recursive: true, force: true });
            console.log(`Session ${sessionPath} directory deleted.`);
        }
    } catch (e) {
        console.error('Error while deleting temp directories:', e);
    }
};

const makeDirIsNotExists = async (dir) => {
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Directory ${dir} created.`)
    }
};

module.exports = { generateProfilePicture, deleteTemp, makeDirIsNotExists };