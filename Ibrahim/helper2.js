// 📜 utils/contextManager.js
// 🏺 Royal Context Scroll of RAHL-XMD
// 👑 Crafted for divine mention replies with noble thumbnail banners

const NEWS_LETTER_JID = "120363285388090068@newsletter";
const BOT_NAME = "RAHL-XMD"; // 👑 Formerly BWM-XMD — now blessed with the Royal Mark

const scrollGallery = [
    "https://files.catbox.moe/165qf7.jpg",
    "https://files.catbox.moe/24j10y.jpeg"
];

// 🎯 Draw from the sacred scrolls to select a divine thumbnail
const DEFAULT_THUMBNAIL = scrollGallery[Math.floor(Math.random() * scrollGallery.length)];

/**
 * 🧿 createContext2
 * Enchants a WhatsApp message with powerful Royal context metadata
 * @param {string} userJid - The sacred JID to be mentioned
 * @param {object} options - Optional noble values (title, body, thumbnail)
 * @returns {object} - The enchanted context payload
 */
const createContext2 = (userJid, options = {}) => ({
    contextInfo: {
        mentionedJid: [userJid], // 📌 Summon the user into the royal scroll
        forwardingScore: 999,     // 🏹 Maximum score from the court archives
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: NEWS_LETTER_JID,
            newsletterName: BOT_NAME,
            serverMessageId: Math.floor(100000 + Math.random() * 900000) // 🎲 Divine message identifier
        },
        externalAdReply: {
            title: options.title || BOT_NAME, // 👑 Royal Header
            body: options.body || "Premium WhatsApp Bot Solution", // 📜 Royal Message Description
            thumbnailUrl: options.thumbnail || DEFAULT_THUMBNAIL, // 🖼️ Selected Royal Image
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true // 🌟 Showcase with grandeur
        }
    }
});

// 🔓 Allow this royal utility to be summoned elsewhere
module.exports = {
    createContext2
};
