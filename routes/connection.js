const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    delay,
    S_WHATSAPP_NET,
} = require("baileys");
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const express = require("express");
const Router = express.Router();
const fs = require('fs');
const path = require('path');
const { generateProfilePicture, deleteTemp, makeDirIsNotExists } = require('../utils/functions');
const uploads = path.join(__dirname, '../uploads');
const session = path.join(__dirname, '../session');
Router.get("/", async (req, res) => {
    if (!req.query.phoneNumber) {
        return res.status(400).json({ error: "Phone number is required" });
    }
    if (!req.query.filename) {
        return res.status(400).json({ error: "Filename is required" });
    }
    const filePath = path.join(uploads, decodeURIComponent(req.query.filename));
    const sessionPath = path.join(session, req.query.phoneNumber);
    const connect = async () => {
        const { state, saveCreds } = await useMultiFileAuthState(sessionPath)
        const client = makeWASocket({
            logger: pino({ level: "silent" }),
            printQRInTerminal: false,
            auth: state,
            browser: ['Mac OS', 'Safari', '10.15.7'],
            syncFullHistory: false,
        });

        if (!client.authState.creds.registered) {
            const phoneNumber = req.query.phoneNumber.replace(/[^0-9]/g, '');
            await delay(1000);
            let code = await client.requestPairingCode(phoneNumber);
            code = code?.match(/.{1,4}/g)?.join("-") || code;
            console.log(`Pairing code :`, code);
            if (!res.headersSent) res.status(200).json({ code: code });
        }

        client.ev.on('connection.update', async (update) => {
            const { connection, lastDisconnect } = update;
            if (connection === 'close') {
                let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
                if (reason === DisconnectReason.connectionLost || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.restartRequired || reason === DisconnectReason.timedOut) {
                    await connect();
                } else if (reason === DisconnectReason.loggedOut) {
                    return await deleteTemp(filePath, sessionPath);
                } else {
                    client.end(`Unknown DisconnectReason: ${reason}|${connection}`);
                }
            } else if (connection === 'open') {
                console.log('[Connected] ' + JSON.stringify(client.user.id, null, 2));
                await delay(100);
                await client.sendMessage(client.user.id, { text: `_*Connected to wafullscreendp*_` });
                const image = fs.readFileSync(filePath);
                if (image) {
                    const { img } = await generateProfilePicture(image);
                    await client.query({
                        tag: 'iq',
                        attrs: {
                            to: S_WHATSAPP_NET,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [
                            {
                                tag: 'picture',
                                attrs: {
                                    type: 'image'
                                },
                                content: img
                            }
                        ]
                    });
                    await delay(500);
                    await client.sendMessage(client.user.id, { text: '*_Profile picture updated, Now your profile looks sharp. Spread our website with your friends and family._*\n\n_*Thanks for trusting our service. ❤️*_' });
                    await delay(1000);
                    await client.sendMessage(client.user.id, { sticker: fs.readFileSync(path.join(__dirname, '../media/sticker.webp')) });
                    await delay(1000);
                    await client.sendMessage(client.user.id, { text: '*"Logging out. The world will hear from me again."*' });
                } else {
                    await client.sendMessage(client.user.id, { text: 'Profile picture not changed, logging out.' });
                }
                await delay(1000);
                await client.logout();
                return await deleteTemp(filePath, sessionPath);
            }
        });

        client.ev.on("creds.update", saveCreds);
    }

    try {
        await makeDirIsNotExists(uploads);
        await makeDirIsNotExists(session);
        await deleteTemp(false, sessionPath);
        await connect();
    } catch (e) {
        console.error(e);
        await deleteTemp(filePath, sessionPath);
        return res.status(500).json({ error: "Something went wrong. Please try again." });
    }

});

module.exports = Router;