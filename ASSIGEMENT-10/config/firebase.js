const fs = require("fs");
const path = require("path");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// Locate service account key
let serviceAccountPath = path.join(__dirname, "../serviceAccountKey.json");

if (!fs.existsSync(serviceAccountPath)) {
    // Fallback: look for any firebase-adminsdk*.json file in root
    const rootDir = path.join(__dirname, "..");
    const files = fs.readdirSync(rootDir);
    const keyFile = files.find(f => f.includes("firebase-adminsdk") && f.endsWith(".json"));
    if (keyFile) {
        serviceAccountPath = path.join(rootDir, keyFile);
    }
}

const serviceAccount = require(serviceAccountPath);

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

console.log("Firebase connected successfully");

module.exports = db;