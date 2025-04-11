# 💠 WhatsApp Full Screen DP Setter

Set full-screen WhatsApp profile pictures without cropping using this Node.js tool.  
Upload any image, scan the QR, and go live in seconds — auto-resized and centered perfectly.  
Built with Baileys, Express, Jimp & Multer for smooth, secure automation.  
Perfect for personal use, bots, or custom WhatsApp tools.

---

## 🚀 Features

- 📸 **Set any photo as a full-screen WhatsApp DP**
- 🎯 Auto-centers and resizes images perfectly
- ⚙️ Secure pairing with WhatsApp using **Baileys**
- 🌐 RESTful API – plug it into any UI easily
- 🛡️ Session-based & privacy-friendly — no data stored

---

## 📦 Installation & Usage

```bash
# Clone the repo
git clone https://github.com/Me-amruth/fullscreendp-wa.git

# Go into the project folder
cd fullscreendp-wa

# Install dependencies
npm install

# Start the server
npm start

# Server will start in port 8000, for localhost:
http://localhost:8000
```

---

## ⚙️ How It Works

Step-1: Enter your phone number & Upload your desired image via the API or frontend
> Phone number must be E.164 format,
for example: if your country india(+91), it will be 91XXXXXXXXXX (without '+' and blank spaces)

Step-2: Go to Whatsapp > Linked Devices > Link a device > Link with phone number instead, or You can will be taken to there Via notification

Step-3: Enter the given code there

The image is processed and auto-set as your WhatsApp DP, The temporary login device will automatically logout.
Both the image and session are deleted right after — for keeping your data private

---

<h3>🖼️ Demo Screenshots</h3>
<p>
  <img src="https://github.com/missnora07/resources/blob/1e83c0b804ad2ba3cd2f27f7a42c9d90f0104913/Screenshot_2025-04-11-20-41-16-533_com.android.chrome-picsay.jpg?raw=true" width="20%" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/missnora07/resources/blob/1e83c0b804ad2ba3cd2f27f7a42c9d90f0104913/Screenshot_2025-04-11-20-43-12-983_com.whatsapp.jpg?raw=true" width="20%" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/missnora07/resources/blob/1e83c0b804ad2ba3cd2f27f7a42c9d90f0104913/Screenshot_2025-04-11-20-39-41-196_com.whatsapp.jpg?raw=true" width="20%" />
</p>

---

## 📡 API Endpoints

Here are the available API routes for integrating with your own frontend or automation:

| Method | Endpoint   | Description                                                                 |
|--------|------------|-----------------------------------------------------------------------------|
| POST   | `/upload`  | Upload an image file to be processed as full-screen DP                      |
| GET    | `/connect` | Connect WhatsApp with QR scan and set the uploaded image as profile picture <br>🔸 *Query Params:* `phoneNumber`, `filename` |
| GET    | `/clear`   | Manually clear temporary files if needed                                    |

### 🔧 Example Usage

#### 📤 Upload Image

```bash
curl -X POST -F "image=@yourphoto.jpg" http://localhost:3000/upload
```
#### 🔗 Connect & Set DP

```bash
curl "http://localhost:3000/connect?phoneNumber=919876543210&filename=yourphoto.jpg"
```
#### 🧹 Clear Temp Files

```bash
curl http://localhost:3000/clear
```

---

## 🔧 Tech Stack

- **Node.js** – Backend logic
- **Express.js** – API Server
- **Baileys** – WhatsApp Web automation
- **Jimp** – Image manipulation and optimization
- **Multer** – File upload handling
- **Railway.app** – Easy deployment

---

## ⭐ Contribute or Support

If you like this project, give it a ⭐
Fork it, use it, remix it — and feel free to contribute.

#### ☕ You can show your support by Buying Me a Coffee

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buymeacoffee&logoColor=black)](https://www.buymeacoffee.com/am1uth)

> Every coffee counts. It fuels open-source, keeps me coding late nights, and brings more cool projects your way!

---

## 🏷️ GitHub Topics

Add these topics to your repo for better visibility:
```text
whatsapp  nodejs  automation  profile-picture  dp-setter  fullscreen  express  baileys
```
---

## 📢 Promo Caption for Sharing

> Want to set a full-screen WhatsApp DP with just one click?
No crop. No compromise. Just code.
Built with Node.js + Baileys.
→ github.com/Me-amruth/fullscreendp-wa
